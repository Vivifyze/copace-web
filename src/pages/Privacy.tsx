export default function Privacy() {
  return (
    <main id="main-content">
      <div className="section">
        <div className="container" style={{ maxWidth: '52rem' }}>
          <p className="eyebrow">Legal</p>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, marginBottom: '0.5rem' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '2rem' }}>Last Updated: January 13, 2026</p>

          <div className="callout callout--green" style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>Our core commitment</p>
            <p style={{ margin: 0 }}>
              Your health data stays on your device. We do not collect, store, or transmit your health
              information to our servers unless you explicitly opt in to optional analytics.
            </p>
          </div>

          <div className="prose">
            <h2>1. Information We Collect</h2>

            <h3>1.1 Health Data (On-Device Only)</h3>
            <p>
              CoPace accesses the following data through Apple HealthKit. This data is stored
              locally on your device and is <strong>never transmitted to our servers</strong>:
            </p>
            <ul>
              <li>Heart Rate</li>
              <li>Heart Rate Variability (HRV)</li>
              <li>Resting Heart Rate</li>
              <li>Step Count</li>
              <li>Sleep Data</li>
              <li>Workout Sessions</li>
            </ul>

            <h3>1.2 App Usage Data (Optional)</h3>
            <p>
              We may collect the following analytics data, but only if you explicitly opt in.
              This is <strong>disabled by default</strong>:
            </p>
            <ul>
              <li>App performance metrics (crash reports, load times)</li>
              <li>Feature usage patterns (which screens you visit, not what you do on them)</li>
              <li>Device type and iOS version</li>
            </ul>
            <p>Analytics data is never linked to your identity and never includes any health data.</p>

            <h3>1.3 Data We Do NOT Collect</h3>
            <ul>
              <li>Name, email address, or contact information</li>
              <li>Location data</li>
              <li>Photos or camera access</li>
              <li>Contacts or calendar information</li>
              <li>Any personally identifiable information</li>
            </ul>

            <h2>2. How We Use Your Information</h2>

            <h3>2.1 Health Data (On-Device Only)</h3>
            <p>Your health data is used exclusively on your device to:</p>
            <ul>
              <li>Calculate your daily energy budget based on HRV</li>
              <li>Monitor heart rate during activities and provide alerts</li>
              <li>Track pacing patterns over time</li>
              <li>Personalize safety thresholds via local machine learning models</li>
            </ul>

            <h3>2.2 Analytics Data (If Enabled)</h3>
            <ul>
              <li>Identify and fix bugs and crashes</li>
              <li>Understand which features are most helpful</li>
              <li>Improve app performance and user experience</li>
            </ul>

            <h2>3. Data Storage and Security</h2>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr><th>Data Type</th><th>Where Stored</th><th>Transmitted?</th></tr>
                </thead>
                <tbody>
                  <tr><td>Health Data</td><td>On your device (HealthKit)</td><td>Never</td></tr>
                  <tr><td>App Settings &amp; Logs</td><td>On your device</td><td>Never</td></tr>
                  <tr><td>Analytics Data</td><td>Anonymous, third-party (Firebase)</td><td>Only if opted in</td></tr>
                </tbody>
              </table>
            </div>

            <h2>4. Data Sharing and Third Parties</h2>
            <p>
              <strong>We do not sell, rent, or share your personal information with third parties.</strong>
            </p>

            <h3>4.1 Third-Party Services (If Analytics Enabled)</h3>
            <p>
              If you opt in to analytics, we use <strong>Google Firebase</strong> for crash
              reporting and anonymous usage analytics. No health data is ever included.
            </p>

            <h3>4.2 Apple</h3>
            <p>
              CoPace uses Apple's HealthKit framework. Health data is subject to Apple's privacy
              policy. CoPace only accesses data with your explicit iOS permission.
            </p>

            <h2>5. Your Privacy Rights</h2>

            <h3>5.1 Health Data Control</h3>
            <p>
              You can toggle individual health permissions on or off at any time in iOS Settings → CoPace,
              or in the Health app → Profile → Apps → CoPace.
            </p>

            <h3>5.2 Analytics Opt-Out</h3>
            <p>
              Disable analytics at any time: Settings → Privacy → Help Improve CoPace.
            </p>

            <h3>5.3 GDPR Rights (EU Users)</h3>
            <p>Under GDPR, you have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request deletion of your data</li>
              <li>Request rectification of inaccurate data</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h3>5.4 California Privacy Rights (CCPA)</h3>
            <p>California residents have the right to:</p>
            <ul>
              <li>Know what personal information is collected</li>
              <li>Know whether personal information is sold or disclosed (it is not)</li>
              <li>Opt out of sale (no sale occurs)</li>
              <li>Request deletion</li>
              <li>Non-discrimination for exercising these rights</li>
            </ul>

            <h2>6. Data Retention</h2>
            <p>
              Health data and app logs are stored on your device and deleted when you delete the app.
              Any anonymized analytics data retained by Firebase is subject to Firebase's data retention policies.
              Contact us to request deletion of any analytics data associated with your app instance.
            </p>

            <h2>7. Children's Privacy</h2>
            <p>
              CoPace is not intended for users under 13 years of age. We do not knowingly collect
              personal information from children under 13.
            </p>

            <h2>8. International Data Transfers</h2>
            <p>
              If analytics are enabled, anonymized data may be processed in countries outside your own.
              We ensure appropriate safeguards are in place for any such transfers.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant
              changes by updating the "Last Updated" date. Continued use of the app constitutes
              acceptance of the revised policy.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              For privacy questions, requests, or to exercise your rights, contact us at:
            </p>
            <ul>
              <li>Email: <a href="mailto:support@copace.app">support@copace.app</a></li>
              <li>Website: <a href="https://copace.app/support">copace.app/support</a></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
