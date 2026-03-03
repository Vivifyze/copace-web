export default function Terms() {
  return (
    <main id="main-content">
      <div className="section">
        <div className="container" style={{ maxWidth: '52rem' }}>
          <p className="eyebrow">Legal</p>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, marginBottom: '0.5rem' }}>Terms of Service</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '2rem' }}>Last Updated: January 17, 2026</p>

          <div className="callout callout--amber" style={{ marginBottom: '2.5rem' }}>
            <p>
              Please read these Terms carefully before using CoPace. These Terms govern your use of
              the app and include important disclaimers and limitations of liability.
            </p>
          </div>

          <div className="prose">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using CoPace, you agree to be bound by these Terms of Service.
              If you do not agree, do not use the app.
            </p>
            <p><strong>Age Requirement:</strong> You must be at least 16 years old to use CoPace.</p>

            <h2>2. Description of Service</h2>
            <p>CoPace provides:</p>
            <ul>
              <li>Monitoring of activity patterns through Apple HealthKit integration</li>
              <li>Real-time feedback during activities based on heart rate data</li>
              <li>Daily analysis and insights based on biometric data</li>
              <li>Tools to track and manage activity levels</li>
            </ul>
            <p>
              CoPace is a wellness tool designed to help you identify patterns that may be affecting
              your health. It is not a medical device.
            </p>

            <h2>3. Medical Disclaimer</h2>

            <div className="callout" style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Plain English Summary</p>
              <p style={{ marginBottom: '0.5rem' }}>
                We built CoPace to help you manage your energy, but it is just software. It doesn't
                know your body like you do.
              </p>
              <p style={{ marginBottom: '0.5rem' }}><strong>It's a Guide, Not a Doctor.</strong> CoPace provides estimates and suggestions based on sensor data. These are starting points, not medical directives.</p>
              <p style={{ margin: 0 }}><strong>Don't Push It:</strong> If the app says "You have 50% energy left" but you feel awful, stop and rest. Your body always knows best.</p>
            </div>

            <p><strong>CoPace is NOT a medical device.</strong> It has not been evaluated or approved by the FDA, MHRA, EMA, or any other regulatory authority. Nothing in the app constitutes medical advice, diagnosis, or treatment.</p>

            <p>Important limitations:</p>
            <ul>
              <li>Sensor data can be affected by noise, loose fit, tattoos, and motion artifacts</li>
              <li>The app cannot distinguish heart rate spikes from exercise, stress, illness, or medication</li>
              <li>CoPace is not suitable for emergency monitoring</li>
              <li>If you think you have a medical emergency, call your doctor or emergency services immediately</li>
            </ul>
            <p>Always consult your healthcare provider before making changes to your activity levels or routine.</p>

            <h2>4. Estimates, Calculations, and Algorithm Limitations</h2>
            <p>
              <strong>ALL DATA, CALCULATIONS, PREDICTIONS, THRESHOLDS, SCORES, AND RECOMMENDATIONS
              PROVIDED BY COPACE ARE ESTIMATES ONLY AND MAY BE INACCURATE, INCOMPLETE, OR INCORRECT.</strong>
            </p>
            <p>Accuracy limitations include:</p>
            <ul>
              <li><strong>No Guarantee of Accuracy:</strong> Algorithms are statistical estimates, not medical-grade measurements</li>
              <li><strong>Individual Variability:</strong> Bodies differ; what works for most may not work for you</li>
              <li><strong>Sensor Limitations:</strong> Device placement, skin contact, movement, tattoos, temperature, and heart rhythm irregularities all affect readings</li>
              <li><strong>Algorithm Evolution:</strong> Our models improve over time; past recommendations may differ from current ones</li>
            </ul>

            <h2>5. User Responsibilities</h2>
            <p>By using CoPace, you agree to:</p>
            <ul>
              <li>Use the app for lawful wellness purposes only</li>
              <li>Not rely solely on app data for health decisions</li>
              <li>Consult healthcare professionals for medical advice</li>
              <li>Maintain the security of your device</li>
              <li>Not reverse engineer, decompile, or modify the app</li>
            </ul>

            <h2>6. Apple HealthKit Integration</h2>
            <p>
              By using CoPace, you authorize the app to read and write relevant health data types
              via Apple HealthKit. You can revoke this authorization at any time through iOS Settings.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              CoPace grants you a limited, non-exclusive, non-transferable, revocable license to use
              the app for personal, non-commercial purposes. You may not copy, modify, distribute,
              sell, sublicense, or create derivative works based on CoPace.
            </p>

            <h2>8. Disclaimer of Warranties</h2>
            <p>
              COPACE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL IMPLIED
              WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              NON-INFRINGEMENT, ACCURACY OF DATA OR CALCULATIONS, AND UNINTERRUPTED SERVICE.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, COPACE, ITS AFFILIATES, OFFICERS, DIRECTORS,
              EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY DAMAGES WHATSOEVER,
              INCLUDING BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
              OR PUNITIVE DAMAGES, ARISING FROM YOUR USE OF THE APP OR RELIANCE ON ITS DATA.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless CoPace and its affiliates from any claims,
              damages, or expenses arising from: your use or misuse of the app; health outcomes
              related to app use; medical decisions made based on app data; or violations of these Terms.
            </p>

            <h2>11. Termination</h2>
            <p>
              CoPace may suspend or terminate your access at any time. You may stop using the app
              at any time by deleting it from your device.
            </p>

            <h2>12. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of the United States. Any disputes shall be
              resolved by binding arbitration under the American Arbitration Association rules.
              You waive the right to a jury trial and the right to participate in class action litigation.
            </p>
            <p><em>EU Users:</em> Separate provisions apply as required by applicable EU law.</p>

            <h2>13. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of material changes.
              Continued use of the app after changes constitutes acceptance of the modified Terms.
            </p>

            <h2>14. Severability</h2>
            <p>
              If any provision of these Terms is found unenforceable, the remaining provisions
              continue in full force and effect.
            </p>

            <h2>15. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between
              you and CoPace regarding your use of the app.
            </p>

            <h2>16. Apple Terms</h2>
            <p>
              These Terms are between you and CoPace only, not Apple. Apple is a third-party
              beneficiary of these Terms and may enforce them against you.
            </p>

            <h2>17. Contact</h2>
            <p>
              Questions about these Terms? Contact us at{' '}
              <a href="mailto:support@copace.app">support@copace.app</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
