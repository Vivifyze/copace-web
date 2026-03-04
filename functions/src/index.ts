import {onRequest} from "firebase-functions/v2/https";
import {setGlobalOptions} from "firebase-functions/v2";
import * as admin from "firebase-admin";
import {logger} from "firebase-functions/v2";

admin.initializeApp();
const db = admin.firestore();

setGlobalOptions({region: "us-central1"});

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

    const docRef = await db.collection("hardshipRequests").add({
      email,
      reason: reason || null,
      status: "pending",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    logger.info("Hardship request saved", {id: docRef.id, email});

    res.status(200).json({success: true, id: docRef.id});
  }
);
