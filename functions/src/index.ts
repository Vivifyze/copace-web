import {onRequest} from "firebase-functions/v2/https";
import {defineSecret} from "firebase-functions/params";
import {setGlobalOptions} from "firebase-functions/v2";
import * as admin from "firebase-admin";
import {Resend} from "resend";
import {logger} from "firebase-functions/v2";

admin.initializeApp();
const db = admin.firestore();

setGlobalOptions({region: "us-central1"});

// API key stored in Firebase Secret Manager
// Set it once with: firebase functions:secrets:set RESEND_API_KEY
const resendApiKey = defineSecret("RESEND_API_KEY");

// ── Types ────────────────────────────────────────────────────
interface HardshipRequestBody {
  email: string;
  reason?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

// ── hardshipRequest ──────────────────────────────────────────
export const hardshipRequest = onRequest(
  {secrets: [resendApiKey]},
  async (req, res) => {
    // CORS
    const allowed = [
      "https://copace.app",
      "https://copace-2a945.web.app",
      "http://localhost:5173",
    ];
    const origin = req.headers.origin ?? "";
    if (allowed.includes(origin)) {
      res.set("Access-Control-Allow-Origin", origin);
    }
    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }
    if (req.method !== "POST") {
      res.status(405).json({error: "Method not allowed"});
      return;
    }

    const body = req.body as HardshipRequestBody;
    const email = (body.email ?? "").trim().toLowerCase();
    const reason = (body.reason ?? "").trim();

    if (!email || !isValidEmail(email)) {
      res.status(400).json({error: "A valid email address is required."});
      return;
    }

    // 1. Save to Firestore
    const docRef = await db.collection("hardshipRequests").add({
      email,
      reason: reason || null,
      status: "pending",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    logger.info("Hardship request saved", {id: docRef.id, email});

    // 2. Email notification via Resend
    const apiKey = resendApiKey.value();
    if (apiKey) {
      try {
        const resend = new Resend(apiKey);
        await resend.emails.send({
          from: "CoPace <noreply@copace.app>",
          to: ["support@copace.app"],
          subject: `[CoPace] Hardship request — ${email}`,
          html: `
            <div style="font-family:sans-serif;max-width:480px">
              <h2 style="margin:0 0 16px;color:#0F4A44">New hardship request</h2>
              <table style="border-collapse:collapse;font-size:14px;width:100%">
                <tr>
                  <td style="padding:6px 16px 6px 0;color:#6b7280;width:90px">Request ID</td>
                  <td style="padding:6px 0;font-family:monospace">${docRef.id}</td>
                </tr>
                <tr>
                  <td style="padding:6px 16px 6px 0;color:#6b7280">Email</td>
                  <td style="padding:6px 0">${email}</td>
                </tr>
                <tr>
                  <td style="padding:6px 16px 6px 0;color:#6b7280;vertical-align:top">Reason</td>
                  <td style="padding:6px 0">${reason ||
                    "<em style='color:#9ca3af'>none provided</em>"}</td>
                </tr>
              </table>
              <div style="margin-top:24px">
                <a href="https://console.firebase.google.com/project/copace-2a945/firestore/data/hardshipRequests/${docRef.id}"
                   style="display:inline-block;background:#3AADA0;color:white;padding:10px 20px;
                          border-radius:6px;text-decoration:none;font-weight:600;font-size:14px">
                  Review in Firestore →
                </a>
              </div>
            </div>
          `,
        });
        logger.info("Notification email sent", {id: docRef.id});
      } catch (err) {
        // Non-fatal — request already in Firestore
        logger.error("Email notification failed", {id: docRef.id, err});
      }
    } else {
      logger.warn("RESEND_API_KEY not set — skipping email", {id: docRef.id});
    }

    res.status(200).json({success: true, id: docRef.id});
  }
);
