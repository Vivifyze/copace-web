export default function Support() {
  return (
    <main id="main-content">
      <div className="section">
        <div className="container" style={{ maxWidth: '52rem' }}>
          <p className="eyebrow">Help Center</p>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem' }}>Support</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', marginBottom: '3rem', lineHeight: 1.7 }}>
            We're here to help! If you have questions, feedback, or need assistance with CoPace,
            please don't hesitate to reach out.
          </p>

          {/* Contact card */}
          <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', marginBottom: '3rem' }}>
            <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>✉️</div>
            <div>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Contact Support</h2>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
                Email us for support inquiries, technical issues, or general questions about CoPace.
                Premium users receive a 24-hour response time.
              </p>
              <a href="mailto:support@copace.app" className="btn btn-primary">
                support@copace.app
              </a>
            </div>
          </div>

          {/* FAQs */}
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              {
                q: 'What devices are compatible with CoPace?',
                a: 'CoPace requires iOS 17.6 or later and is designed for iPhone and Apple Watch. The full experience requires an Apple Watch for real-time monitoring features. CoPace also supports Oura, Whoop, Garmin, and Fitbit via HealthKit.',
              },
              {
                q: 'How does CoPace access my health data?',
                a: 'CoPace integrates with Apple HealthKit to access heart rate, heart rate variability, sleep, and other health metrics. You control exactly what data the app can access through iOS permissions. All health data stays on your device and is never transmitted to our servers.',
              },
              {
                q: 'Is my data private and secure?',
                a: 'Yes. All your health data is stored locally on your device using Apple\'s secure HealthKit framework. We never collect, store, or share your health information. Anonymous crash reports are optional and off by default. See our Privacy Policy for full details.',
              },
              {
                q: 'Can I use CoPace without an Apple Watch?',
                a: 'CoPace can provide daily analysis features — morning energy budget, evening check-in, and historical trends — using data from your iPhone\'s Health app. However, the real-time Shield monitoring and haptic alerts require an Apple Watch.',
              },
              {
                q: 'Is CoPace a medical device?',
                a: 'No. CoPace is a wellness tool designed to help you track and understand your activity and energy patterns. It is not a medical device and has not been evaluated by the FDA, MHRA, or EMA. Always consult your healthcare provider before making changes to your activity levels.',
              },
              {
                q: 'How do I manage the app\'s permissions?',
                a: 'Open the Settings app on your iPhone, scroll down to CoPace, and adjust health permissions from there. You can also go to the Health app → Profile → Apps → CoPace to toggle individual data types.',
              },
              {
                q: 'How do I delete my data?',
                a: 'Deleting the CoPace app removes all app settings and logs. Health data stored in Apple HealthKit can be deleted through the Health app. To request deletion of anonymized analytics data, contact support@copace.app.',
              },
              {
                q: 'What accessibility features does CoPace support?',
                a: 'CoPace is built with extensive accessibility features including VoiceOver support, Dynamic Type for adjustable text sizes, high contrast color schemes, large touch targets, and cognitive accessibility features designed for users with brain fog and reduced cognitive capacity. We target WCAG AA+ compliance.',
              },
            ].map(({ q, a }) => (
              <details key={q} style={{ borderBottom: '1px solid var(--color-border)', padding: '1.25rem 0' }}>
                <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1rem', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  {q}
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '1.25rem', flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.75rem', marginBottom: 0, lineHeight: 1.75 }}>{a}</p>
              </details>
            ))}
          </div>

          {/* Still need help */}
          <div style={{
            background: 'var(--color-primary-light)',
            borderRadius: 'var(--r-xl)',
            padding: '2rem',
            marginTop: '3rem',
            textAlign: 'center',
          }}>
            <p style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>Still need help?</p>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.25rem' }}>
              Can't find what you're looking for? We're happy to help directly.
            </p>
            <a href="mailto:support@copace.app" className="btn btn-primary">
              Email Support
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
