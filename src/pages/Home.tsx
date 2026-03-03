import { Link } from 'react-router-dom'
import AppStoreBadge from '../components/AppStoreBadge'
import {
  IconShield, IconZap, IconBrain,
  IconLock, IconAccessibility, IconHeart, IconActivity,
  IconSun, IconClock, IconMoon, IconArrowRight,
} from '../components/Icons'

/* ── Small helpers ──────────────────────────────────────────── */

function FeatureCard({
  icon, badge, badgeClass, title, subtitle, bullets,
}: {
  icon: React.ReactNode
  badge: string
  badgeClass: string
  title: string
  subtitle: string
  bullets: string[]
}) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={`icon-wrap icon-wrap--${badgeClass}`}>{icon}</div>
      <span className={`badge badge-${badgeClass}`} style={{ marginBottom: '.625rem', alignSelf: 'flex-start' }}>
        {badge}
      </span>
      <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '.25rem' }}>{title}</h3>
      <p style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--text-400)', marginBottom: '.875rem' }}>
        {subtitle}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.4375rem', marginTop: 'auto' }}>
        {bullets.map(b => (
          <li key={b} style={{ display: 'flex', gap: '.5rem', alignItems: 'center', fontSize: 'var(--text-sm)', color: 'var(--text-600)' }}>
            <span style={{ color: 'var(--mint-500)', flexShrink: 0, lineHeight: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}

function BenefitCard({ icon, iconClass, title, desc }: { icon: React.ReactNode; iconClass: string; title: string; desc: string }) {
  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <div className={`icon-wrap icon-wrap--${iconClass}`} style={{ margin: '0 auto 1rem' }}>{icon}</div>
      <h3 style={{ fontSize: 'var(--text-base)', marginBottom: '.375rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-600)', fontSize: 'var(--text-sm)', lineHeight: 1.7, margin: 0 }}>{desc}</p>
    </div>
  )
}

function RhythmStep({ icon, iconClass, time, title, detail }: { icon: React.ReactNode; iconClass: string; time: string; title: string; detail: string }) {
  return (
    <div className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
      <div className={`icon-wrap icon-wrap--${iconClass}`} style={{ marginBottom: 0, flexShrink: 0 }}>{icon}</div>
      <div>
        <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '.1875rem' }}>{time}</p>
        <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: '.4375rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-600)', margin: 0, lineHeight: 1.75, fontSize: 'var(--text-sm)' }}>{detail}</p>
      </div>
    </div>
  )
}

/* ── Page ────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <main id="main-content">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>
              <IconActivity size={13} />
              iOS &amp; Apple Watch
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5.5vw, 3.625rem)',
              fontWeight: 800, lineHeight: 1.1,
              letterSpacing: '-.02em', marginBottom: '1.375rem',
            }}>
              Your Activity &amp; Energy<br />Management Companion
            </h1>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-600)', lineHeight: 1.75, maxWidth: '44rem', margin: '0 auto 2.25rem' }}>
              CoPace helps you track and manage your activity levels through personalized insights
              on your iPhone with Apple Watch, Oura, Whoop, Garmin, and other HealthKit-compatible devices.
            </p>
            <div style={{ display: 'flex', gap: '.875rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
              <AppStoreBadge />
              <Link to="/guide" className="btn btn-ghost btn-lg">
                Read the Guide <IconArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Stylised phone previews */}
          <div style={{
            background: 'linear-gradient(180deg, var(--teal-50) 0%, var(--bg-raised) 100%)',
            borderRadius: 'var(--r-2xl) var(--r-2xl) 0 0',
            padding: '3rem 2rem 0', textAlign: 'center', overflow: 'hidden',
          }}>
            <div style={{ display: 'inline-flex', gap: '1.375rem', alignItems: 'flex-end', justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { label: 'Morning Budget', bg: 'var(--teal-500)', icon: <IconZap size={26} strokeWidth={1.5} />, value: '80%', sub: 'Moderate Energy' },
                { label: 'The Shield',     bg: 'var(--mint-500)', icon: <IconShield size={26} strokeWidth={1.5} />, value: '72 bpm', sub: 'Within Target' },
                { label: 'Evening Check',  bg: '#6D5FFD',          icon: <IconMoon size={26} strokeWidth={1.5} />, value: 'Balanced', sub: 'Log your day' },
              ].map((s, i) => (
                <div key={s.label} style={{
                  width: 148, background: s.bg,
                  borderRadius: '1.375rem',
                  padding: '1.375rem 1.125rem 1.625rem',
                  color: 'white', textAlign: 'center',
                  boxShadow: '0 24px 48px -8px rgba(0,0,0,.18)',
                  transform: i === 1 ? 'translateY(-1.25rem)' : 'none',
                }}>
                  <div style={{ opacity: .9, marginBottom: '.625rem', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 800, marginBottom: '.25rem', letterSpacing: '-.01em' }}>{s.value}</div>
                  <div style={{ fontSize: '.7rem', opacity: .8, marginBottom: '.875rem' }}>{s.sub}</div>
                  <div style={{ fontSize: '.65rem', opacity: .55, fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature Cards ──────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '2.75rem' }}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Core Features</p>
            <h2 className="section-title">Everything You Need to Pace Well</h2>
          </div>
          <div className="card-grid">
            <FeatureCard
              icon={<IconShield size={20} />}
              badge="Apple Watch"
              badgeClass="blue"
              title="The Shield"
              subtitle="Real-Time Activity Monitoring"
              bullets={['Live heart rate monitoring', 'Haptic alerts at your threshold', 'Smart movement filtering']}
            />
            <FeatureCard
              icon={<IconZap size={20} />}
              badge="Morning"
              badgeClass="green"
              title="Morning Budget"
              subtitle="HRV-Based Energy Forecast"
              bullets={['Daily energy percentage', 'Sleep quality analysis', 'Activity recommendations']}
            />
            <FeatureCard
              icon={<IconBrain size={20} />}
              badge="Premium"
              badgeClass="amber"
              title="Adaptive Learning"
              subtitle="Gets Smarter Over Time"
              bullets={['3-phase learning system', 'Auto-adjusting ceilings', 'Personalized to your body']}
            />
          </div>
        </div>
      </section>

      {/* ── Benefits ───────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '2.75rem' }}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Why CoPace</p>
            <h2 className="section-title">Built With You in Mind</h2>
            <p className="section-lead" style={{ margin: '0 auto' }}>
              Every feature designed for people managing their energy and activity levels
            </p>
          </div>
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <BenefitCard icon={<IconLock size={20} />}          iconClass="blue"  title="Privacy First"        desc="All health data stays local on your device. No cloud storage, no data sharing without consent." />
            <BenefitCard icon={<IconAccessibility size={20} />} iconClass="green" title="Accessibility First"   desc="Large text, high contrast, VoiceOver support. Designed for WCAG AA+ accessibility." />
            <BenefitCard icon={<IconHeart size={20} />}         iconClass="red"   title="Apple Health Native"   desc="Seamless HealthKit integration. Works with Apple Watch, Oura, Whoop, and more." />
            <BenefitCard icon={<IconActivity size={20} />}      iconClass="amber" title="Empathetic Design"     desc="A tool, not a cage. Guidance without judgment, support without shame." />
          </div>
        </div>
      </section>

      {/* ── Daily Rhythm ───────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '2.75rem' }}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>How It Works</p>
            <h2 className="section-title">Your Daily Rhythm</h2>
            <p className="section-lead" style={{ margin: '0 auto' }}>CoPace guides you through each part of your day</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '46rem', margin: '0 auto' }}>
            <RhythmStep
              icon={<IconSun size={20} />} iconClass="amber"
              time="Morning"
              title="Wake & Analyze"
              detail="Open the app for your personalized energy forecast. See your battery level, activity threshold, and HRV delta from baseline. Plan your day around your body's signals."
            />
            <RhythmStep
              icon={<IconClock size={20} />} iconClass="blue"
              time="Throughout the Day"
              title="Live with the Shield"
              detail="Activate the Shield on your Apple Watch. Go about your activities with real-time heart rate monitoring. Get gentle haptic alerts when approaching your threshold."
            />
            <RhythmStep
              icon={<IconMoon size={20} />} iconClass="green"
              time="Evening"
              title="Reflect & Log"
              detail="Quick check-in: Balanced, Drained, or Empty? Your input helps CoPace learn your unique patterns and refine tomorrow's recommendations."
            />
          </div>
        </div>
      </section>

      {/* ── Privacy CTA ────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--teal-700) 0%, var(--teal-500) 100%)',
            borderRadius: 'var(--r-2xl)',
            padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)',
            color: 'white', textAlign: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* subtle texture circles */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', borderRadius: 'inherit' }}>
              <div style={{ position: 'absolute', width: 320, height: 320, borderRadius: '50%', background: 'rgba(255,255,255,.06)', top: -80, right: -80 }} />
              <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,.04)', bottom: -60, left: -40 }} />
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.125rem' }}>
                <span style={{ background: 'rgba(255,255,255,.18)', borderRadius: 'var(--r-xl)', padding: '.75rem' }}>
                  <IconLock size={28} strokeWidth={1.75} />
                </span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 800, color: 'white', marginBottom: '.875rem', letterSpacing: '-.015em' }}>
                Your Data, Your Control
              </h2>
              <p style={{ color: 'rgba(255,255,255,.82)', fontSize: 'var(--text-base)', maxWidth: '38rem', margin: '0 auto 1.875rem', lineHeight: 1.75 }}>
                All your health data is stored locally on your device using Apple's secure HealthKit framework.
                We never collect, store, or share your health information. Privacy isn't a feature—it's our foundation.
              </p>
              <Link to="/privacy" style={{
                display: 'inline-flex', alignItems: 'center', gap: '.5rem',
                background: 'rgba(255,255,255,.18)', color: 'white',
                border: '1px solid rgba(255,255,255,.3)',
                padding: '.625rem 1.375rem', borderRadius: 'var(--r-full)',
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-sm)',
                textDecoration: 'none', transition: 'background .15s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,.26)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,.18)')}
              >
                Read our Privacy Policy <IconArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container text-center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Get Started</p>
          <h2 className="section-title">Ready to Start?</h2>
          <p className="section-lead" style={{ margin: '0 auto 2.25rem' }}>
            Download CoPace today and take control of your energy management.
          </p>
          <div style={{ display: 'flex', gap: '.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <AppStoreBadge />
            <Link to="/guide" className="btn btn-ghost btn-lg">
              Explore the Guide <IconArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
