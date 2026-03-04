import { useState } from 'react'
import { Link } from 'react-router-dom'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function Hardship() {
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return

    setFormState('submitting')

    try {
      const res = await fetch('https://us-central1-copace-2a945.cloudfunctions.net/hardshipRequest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email, reason }),
      })

      if (res.ok) {
        setFormState('success')
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <main id="main-content">
        <div className="section">
          <div className="container" style={{ maxWidth: '32rem', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <span style={{ width: '4.5rem', height: '4.5rem', borderRadius: 'var(--r-2xl)', background: 'var(--mint-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--mint-700)' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </span>
            </div>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 800, marginBottom: '1rem' }}>Request Received</h1>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Thank you for reaching out. We've received your request and will send your
              redemption code to <strong>{email}</strong> within 24–48 hours.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '2rem' }}>
              Please check your spam folder if you don't see our email in your inbox.
            </p>
            <Link to="/" className="btn btn-primary btn-lg">Return to Home</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main id="main-content">
      <div className="section">
        <div className="container" style={{ maxWidth: '40rem' }}>
          <p className="eyebrow">Compassionate Pricing</p>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Pacing is for Everyone.
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            We understand that chronic illness often impacts financial stability. We are committed
            to ensuring price is never a barrier to your health.
          </p>

          {/* Pricing comparison */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
            <div className="card" style={{ textAlign: 'center', opacity: 0.6 }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Standard Price</p>
              <p style={{ fontSize: '2rem', fontWeight: 800, textDecoration: 'line-through', color: 'var(--color-text-muted)' }}>$44.99</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>per year</p>
            </div>
            <div className="card" style={{ textAlign: 'center', borderColor: 'var(--color-primary)', background: 'var(--color-primary-light)' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Hardship Price</p>
              <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>$29.99</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-primary)' }}>per year</p>
            </div>
          </div>

          {/* Details */}
          <div className="callout callout--green" style={{ marginBottom: '2rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Honor system — no documentation required</p>
            <p style={{ margin: 0 }}>
              We trust you. If you're experiencing disability, fixed income, or financial hardship,
              you qualify. No proof documents needed.
            </p>
          </div>

          <div className="card" style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>How it works</h3>
            <ol className="step-list">
              <li>Fill out the form below with your email (and optionally your reason)</li>
              <li>We'll manually review and send your unique redemption code within 24–48 hours</li>
              <li>Redeem the code in the App Store to access Premium at the hardship price</li>
            </ol>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label htmlFor="email" style={{ display: 'block', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.5rem' }}>
                Email address <span style={{ color: 'var(--color-danger)' }}>*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{
                  width: '100%',
                  padding: '0.6875rem 0.875rem',
                  border: '1.5px solid var(--color-border)',
                  borderRadius: 'var(--r-md)',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-sans)',
                  outline: 'none',
                  transition: 'border-color 0.15s',
                }}
                onFocus={e => { e.currentTarget.style.borderColor = 'var(--color-primary)' }}
                onBlur={e => { e.currentTarget.style.borderColor = 'var(--color-border)' }}
              />
            </div>
            <div>
              <label htmlFor="reason" style={{ display: 'block', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.5rem' }}>
                Reason <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(optional)</span>
              </label>
              <textarea
                id="reason"
                value={reason}
                onChange={e => setReason(e.target.value)}
                placeholder="Tell us a little about your situation (optional — we trust you regardless)"
                rows={3}
                style={{
                  width: '100%',
                  padding: '0.6875rem 0.875rem',
                  border: '1.5px solid var(--color-border)',
                  borderRadius: 'var(--r-md)',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-sans)',
                  resize: 'vertical',
                  outline: 'none',
                  transition: 'border-color 0.15s',
                }}
                onFocus={e => { e.currentTarget.style.borderColor = 'var(--color-primary)' }}
                onBlur={e => { e.currentTarget.style.borderColor = 'var(--color-border)' }}
              />
            </div>

            {formState === 'error' && (
              <div style={{ background: '#FEE2E2', borderRadius: 'var(--r-md)', padding: '0.875rem 1rem', color: '#991B1B', fontSize: '0.9375rem' }}>
                Something went wrong. Please try emailing us directly at{' '}
                <a href="mailto:support@copace.app" style={{ color: '#991B1B', fontWeight: 600 }}>support@copace.app</a>.
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={formState === 'submitting'}
              style={{ alignSelf: 'flex-start' }}
            >
              {formState === 'submitting' ? 'Sending…' : 'Request Redemption Code'}
            </button>
          </form>

          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginTop: '1.5rem' }}>
            Codes are manually reviewed before sending. You'll receive an email within 24–48 hours.
          </p>
        </div>
      </div>
    </main>
  )
}
