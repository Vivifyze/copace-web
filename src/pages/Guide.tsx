import AppStoreBadge from '../components/AppStoreBadge'
import { IconLock, IconZap, IconHeart } from '../components/Icons'

export default function Guide() {
  return (
    <main id="main-content">
      <div className="section">
        <div className="container">
          {/* Page header */}
          <div style={{ maxWidth: '44rem', marginBottom: '3rem' }}>
            <p className="eyebrow">Documentation</p>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
              CoPace User Guide
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              A gentle tool to help you pace your energy—not a cage, but a compass.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              Written for people who want to better understand and manage their daily activity levels and energy patterns.
            </p>
          </div>

          <div className="guide-layout">
            {/* Sidebar */}
            <nav className="guide-sidebar" aria-label="Guide sections">
              <h3>Contents</h3>
              <ul>
                <li><a href="#quick-start">Quick Start</a></li>
                <li className="sub-item"><a href="#health-permissions">Health Permissions</a></li>
                <li className="sub-item"><a href="#time-machine">Time Machine</a></li>
                <li className="sub-item"><a href="#choose-device">Choose Device</a></li>
                <li><a href="#premium">Premium Features</a></li>
                <li><a href="#the-shield">The Shield</a></li>
                <li><a href="#morning-budget">Morning Budget</a></li>
                <li><a href="#sleep-strain">Sleep Strain</a></li>
                <li><a href="#settings">Settings</a></li>
                <li><a href="#evening-checkin">Evening Check-In</a></li>
                <li><a href="#device-compatibility">Device Compatibility</a></li>
                <li><a href="#learning-phases">Learning Phases</a></li>
                <li><a href="#privacy-data">Privacy &amp; Data</a></li>
                <li><a href="#troubleshooting">Troubleshooting</a></li>
                <li><a href="#faqs">FAQs</a></li>
              </ul>
            </nav>

            {/* Content */}
            <div className="prose">

              {/* ── Quick Start ── */}
              <h2 id="quick-start">Quick Start: The One-Minute Setup</h2>

              <h3 id="health-permissions">Step 1: Grant Health Permissions</h3>
              <p>
                CoPace requests the following health data types from Apple HealthKit:
              </p>
              <ul>
                <li>Heart Rate</li>
                <li>Heart Rate Variability (HRV)</li>
                <li>Sleep</li>
                <li>Steps</li>
                <li>Resting Heart Rate</li>
              </ul>
              <div className="callout callout--green">
                <p><span style={{ display: 'inline-flex', verticalAlign: 'middle', marginRight: '.25rem', color: 'var(--mint-700)' }}><IconLock size={14} strokeWidth={2} /></span> What we don't do: Your health data never leaves your phone.</p>
              </div>

              <h3 id="time-machine">Step 2: Time Machine Analysis</h3>
              <p>
                CoPace will analyze 60 days of your past health data to build your personalized baseline.
              </p>
              <ul>
                <li>Calculates your average Resting Heart Rate (RHR)</li>
                <li>Calculates your average Heart Rate Variability (HRV)</li>
                <li>These become "your normal" to compare against each day</li>
              </ul>
              <div className="callout">
                <p><strong>Pro Tip:</strong> Don't worry if you don't have 60 days of data. The app will use whatever you have.</p>
              </div>

              <h3 id="choose-device">Step 3: Choose Your Device</h3>
              <p>Select your primary tracking device during setup:</p>
              <ul>
                <li>Apple Watch</li>
                <li>Oura or Whoop</li>
                <li>Garmin / Fitbit</li>
                <li>Basic Tracking (iPhone only)</li>
              </ul>

              {/* ── Premium ── */}
              <h2 id="premium">Premium Features</h2>

              <p>CoPace is free for core features. Premium unlocks advanced tools for deeper personalization.</p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Free</th>
                      <th>Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Wake up knowing your energy level for the day', true, true],
                      ['Get your personalized activity heart rate threshold', true, true],
                      ['Real-time protection on Apple Watch', true, true],
                      ['Get warned before you overdo it', true, true],
                      ['Quick evening journal', true, true],
                      ['See why you\'re tired even after sleeping', true, true],
                      ['Track your patterns over time', true, true],
                      ['Accurate tracking if you take beta blockers', true, true],
                      ['Manually adjust your limits', true, true],
                      ['Your health data never leaves your phone', true, true],
                      ['Works with Apple Watch, Oura, Whoop, Garmin', true, true],
                      ['Built for brain fog and chronic fatigue', true, true],
                      ['No false alarms from positional changes (Motion Shield)', false, true],
                      ['App learns your body and adapts automatically (Adaptive Budget)', false, true],
                      ['Stop guessing — your limit auto-adjusts based on how you feel', false, true],
                    ].map(([feature, free, premium]) => (
                      <tr key={String(feature)}>
                        <td>{String(feature)}</td>
                        <td className={free ? 'check' : 'cross'}>{free ? '✓' : '–'}</td>
                        <td className={premium ? 'check' : 'cross'}>{premium ? '✓' : '–'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3>Motion Shield <span className="badge badge-amber" style={{ verticalAlign: 'middle' }}>Premium</span></h3>
              <p><em>Reduce false alerts from positional changes and movement.</em></p>
              <ul>
                <li>Fewer interruptions, more accurate alerts</li>
                <li>Intelligent movement filtering using accelerometer data</li>
                <li>Visual indicator: Star badge on Watch screen when active</li>
              </ul>
              <p><strong>Requirements:</strong> Apple Watch Series 4 or later, CoPace Premium subscription, Steps permission in Health app.</p>

              <h3>Adaptive Budget <span className="badge badge-amber" style={{ verticalAlign: 'middle' }}>Premium</span></h3>
              <p><em>Let CoPace auto-adjust your threshold based on outcomes.</em></p>
              <ul>
                <li>Less guesswork, learns your patterns over time</li>
                <li>Gets smarter the more you log</li>
              </ul>
              <p><strong>Requirements:</strong> 14+ days of evening check-in logs (70% data density), daily morning analysis.</p>
              <p><strong>How to enable:</strong> Settings → Adaptive Budget → Toggle ON → Log evening status daily.</p>

              <h3>Priority Support <span className="badge badge-amber" style={{ verticalAlign: 'middle' }}>Premium</span></h3>
              <ul>
                <li>24-hour response time</li>
                <li>Direct developer access</li>
                <li>Feature request consideration</li>
              </ul>
              <p>Email <a href="mailto:support@copace.app">support@copace.app</a> and include "PREMIUM" in the subject line.</p>

              {/* ── The Shield ── */}
              <h2 id="the-shield">The Shield (Apple Watch)</h2>
              <p>
                The Shield is CoPace's real-time heart rate monitor for Apple Watch. It alerts you
                when you're approaching your personalized activity threshold.
              </p>

              <h3>How It Works</h3>
              <ol className="step-list">
                <li>Open CoPace on your Apple Watch</li>
                <li>Tap "Activate Shield"</li>
                <li>Go about your day — it runs in the background</li>
              </ol>

              <h3>What You'll See</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#D1FAE5', border: '1px solid #6EE7B7', borderRadius: 'var(--r-md)', padding: '1rem', textAlign: 'center' }}>
                  <div style={{ fontWeight: 700, color: '#065F46', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '.375rem', justifyContent: 'center' }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10B981', display: 'inline-block', flexShrink: 0 }} /> Green Screen</div>
                  <div style={{ fontSize: '0.875rem', color: '#065F46' }}>Within Target — shows current heart rate</div>
                </div>
                <div style={{ background: '#FEE2E2', border: '1px solid #FCA5A5', borderRadius: 'var(--r-md)', padding: '1rem', textAlign: 'center' }}>
                  <div style={{ fontWeight: 700, color: '#991B1B', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '.375rem', justifyContent: 'center' }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#EF4444', display: 'inline-block', flexShrink: 0 }} /> Red Screen</div>
                  <div style={{ fontSize: '0.875rem', color: '#991B1B' }}>Slow Down — haptic alert + red background</div>
                </div>
              </div>

              <div className="callout callout--amber">
                <p><span style={{ display: 'inline-flex', verticalAlign: 'middle', marginRight: '.25rem', color: 'var(--amber-700)' }}><IconZap size={13} strokeWidth={2} /></span><strong>Battery note:</strong> The Shield continuously monitors heart rate, which drains Apple Watch battery faster than normal. CoPace uses efficient background processing to minimize this impact.</p>
              </div>

              {/* ── Morning Budget ── */}
              <h2 id="morning-budget">Your Morning Budget</h2>
              <p>
                Every morning, CoPace calculates your daily energy level based on three factors:
              </p>
              <div style={{ background: 'var(--color-primary-light)', borderRadius: 'var(--r-lg)', padding: '1.25rem 1.5rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--color-primary)', textAlign: 'center', fontSize: '1rem' }}>
                Sleep Quality + HRV Delta + Yesterday's Outcome = Today's Battery
              </div>

              <h3>Energy Levels</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {[
                  { label: 'High Energy', pct: '100%', color: '#10B981', bg: '#D1FAE5', advice: 'Full capacity day' },
                  { label: 'Moderate Energy', pct: '80%', color: '#F59E0B', bg: '#FEF3C7', advice: 'Recovery incomplete, pace carefully' },
                  { label: 'Low Energy', pct: '50%', color: '#EF4444', bg: '#FEE2E2', advice: 'Rest-focused day' },
                ].map(level => (
                  <div key={level.label} style={{ background: level.bg, borderRadius: 'var(--r-md)', padding: '0.875rem 1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ fontWeight: 800, fontSize: '1.125rem', color: level.color, width: '3.5rem', flexShrink: 0 }}>{level.pct}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: level.color }}>{level.label}</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>{level.advice}</div>
                    </div>
                  </div>
                ))}
              </div>

              <h3>Low Energy Day Strategies</h3>
              <ul>
                <li>Prioritize rest above all else</li>
                <li>Avoid stairs / ask for help with physical tasks</li>
                <li>Sit while working when possible</li>
                <li>Cancel non-essential activities</li>
                <li>Gentle movement only</li>
              </ul>

              {/* ── Sleep Strain ── */}
              <h2 id="sleep-strain">Sleep Strain</h2>
              <p>
                Sleep Strain tracks how often your heart rate spiked during the night.
                Stressed sleep means your heart rate rose and fell multiple times rather than staying low.
              </p>
              <p>
                <strong>Sleep Strain Minutes</strong> tracks the total duration of elevated heart rate
                during sleep. The more minutes, the more your body was working overnight.
              </p>
              <p>Possible reasons for elevated nighttime heart rate include stress, restless sleep,
                environmental factors, physical discomfort, and various physiological factors.
                If you're concerned, share the data with your doctor.</p>
              <div className="callout">
                <p><span style={{ display: 'inline-flex', verticalAlign: 'middle', marginRight: '.25rem', color: 'var(--blue-500)' }}><IconHeart size={13} strokeWidth={2} /></span>Give yourself grace on high Sleep Strain days. Your body was working hard overnight — adjust your expectations for today accordingly.</p>
              </div>

              {/* ── Settings ── */}
              <h2 id="settings">Settings</h2>

              <h3>Beta Blocker Mode</h3>
              <p>
                If you take beta blockers (Metoprolol, Propranolol, etc.), enable this mode.
                It switches CoPace's calculations to use your "Lowest Sleeping Heart Rate" instead
                of standard Resting Heart Rate as the baseline, giving you more accurate results.
              </p>

              <h3>Threshold Offset</h3>
              <p>Your activity threshold is calculated as:</p>
              <div style={{ background: 'var(--color-bg-alt)', borderRadius: 'var(--r-md)', padding: '1rem 1.25rem', fontFamily: 'monospace', fontSize: '0.9375rem', marginBottom: '1rem' }}>
                Activity Threshold = Resting HR + Threshold Offset
              </div>
              <ul>
                <li><strong>Starting point:</strong> +15 bpm</li>
                <li><strong>Too restricted?</strong> Increase the offset (e.g. +17 bpm)</li>
                <li><strong>Frequently fatigued?</strong> Decrease the offset (e.g. +13 bpm)</li>
              </ul>
              <p><em>Premium users:</em> Adaptive Budget adjusts this automatically based on your evening check-ins.</p>

              {/* ── Evening Check-In ── */}
              <h2 id="evening-checkin">Evening Check-In</h2>
              <p>Every evening, log how your day felt. This is the most important thing you can do to help CoPace learn your patterns.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {[
                  { status: 'Balanced', dot: '#10B981', color: '#10B981', bg: '#D1FAE5', desc: 'Felt okay, good energy' },
                  { status: 'Drained',  dot: '#F59E0B', color: '#F59E0B', bg: '#FEF3C7', desc: 'Tired but functioning' },
                  { status: 'Empty',    dot: '#EF4444', color: '#EF4444', bg: '#FEE2E2', desc: 'Very fatigued, low energy' },
                ].map(s => (
                  <div key={s.status} style={{ background: s.bg, borderRadius: 'var(--r-md)', padding: '0.875rem 1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: s.dot, display: 'inline-block', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: s.color }}>{s.status}</strong>
                      <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', marginLeft: '0.5rem' }}>— {s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p>You can log for past days (up to 7 days back). Over time, CoPace adjusts to fit your unique patterns.</p>

              {/* ── Device Compatibility ── */}
              <h2 id="device-compatibility">Device Compatibility</h2>

              <h3>iPhone Only (Planning Mode)</h3>
              <ul>
                <li>Morning energy budget (The Forecast)</li>
                <li>Daily analysis (The Receipt)</li>
                <li>Evening check-in</li>
                <li>Historical trends (Ledger view)</li>
              </ul>
              <p>Does <strong>not</strong> include real-time monitoring or haptic alerts.</p>

              <h3>iPhone + Apple Watch (Full Experience)</h3>
              <ul>
                <li>Everything from Planning Mode</li>
                <li>Real-time heart rate monitoring</li>
                <li>Haptic alerts when over threshold</li>
                <li>Motion Shield (Premium)</li>
              </ul>

              <h3>Oura / Whoop / Garmin / Fitbit</h3>
              <ul>
                <li>Morning energy budget (HRV-based)</li>
                <li>Daily analysis and insights</li>
                <li>Limitation: manual energy budgeting; basic exertion tracking if HR syncs to HealthKit</li>
              </ul>

              {/* ── Learning Phases ── */}
              <h2 id="learning-phases">Learning Phases</h2>
              <p>CoPace adapts to you over time through three learning phases. Daily evening check-ins are required to progress.</p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Phase</th><th>Name</th><th>Duration</th><th>What Happens</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>1</td><td>Calibration</td><td>Days 0–14</td><td>Standard threshold, conservative adjustments</td></tr>
                    <tr><td>2</td><td>Titration</td><td>Days 15–59</td><td>Moderate threshold adjustments begin</td></tr>
                    <tr><td>3</td><td>Personalized</td><td>Day 60+</td><td>Fully personalized adjustments, pattern-based recommendations</td></tr>
                  </tbody>
                </table>
              </div>

              {/* ── Privacy & Data ── */}
              <h2 id="privacy-data">Privacy &amp; Data</h2>

              <h3>Data that never leaves your device</h3>
              <ul>
                <li>Health data (heart rate, HRV, sleep)</li>
                <li>Daily logs (morning budget, evening status)</li>
                <li>Personalized threshold adjustments</li>
              </ul>

              <h3>Data sent (only if you opt in)</h3>
              <ul>
                <li>Anonymous crash reports (no health data included)</li>
              </ul>

              <h3>Data never sent, ever</h3>
              <ul>
                <li>Actual heart rate numbers or HRV values</li>
                <li>Location data</li>
                <li>Name or email address</li>
              </ul>

              <p>To control analytics: Settings → Privacy → Help Improve CoPace (off by default).</p>

              {/* ── Troubleshooting ── */}
              <h2 id="troubleshooting">Troubleshooting</h2>

              <h3>"Permission Required" error</h3>
              <p>Grant all 5 health data types. To fix:</p>
              <ol className="step-list">
                <li>Open the Health app on your iPhone</li>
                <li>Go to Profile → Apps → CoPace</li>
                <li>Toggle all permissions ON</li>
              </ol>
              <p>Quick test: Settings → Validate Health Permissions inside CoPace.</p>

              <h3>Shield doesn't alert at threshold</h3>
              <p>Possible causes:</p>
              <ul>
                <li><strong>Motion Shield filtered it:</strong> You were walking (steps &gt; 20/min detected)</li>
                <li><strong>Threshold not synced:</strong> Run Morning Analysis on iPhone first</li>
              </ul>
              <p>To test: run in place for 30 seconds to trigger an alert.</p>

              <h3>Export Diagnostic Report</h3>
              <p>Settings → Export Diagnostic Report generates a privacy-safe troubleshooting file you can send to support.</p>

              {/* ── FAQs ── */}
              <h2 id="faqs">FAQs</h2>

              {[
                {
                  q: 'Is this a medical device?',
                  a: 'No. CoPace is a wellness tool. It does not diagnose or treat any medical condition. Always consult your doctor before changing your activity levels.',
                },
                {
                  q: 'What if my threshold feels too restrictive?',
                  a: 'Adjust the threshold offset in Settings → Activity Threshold. You can also disable Adaptive Budget if it\'s being too conservative. Remember: CoPace is a tool, not a cage — use the data as information, not strict rules.',
                },
                {
                  q: 'How much does it cost?',
                  a: 'The core app is free — Morning Budget, Basic Shield, Evening Check-In, all included. Premium is $4.99/month or $44.99/year, which adds Motion Shield, Adaptive Budget, and Priority Support. A Financial Hardship Program is also available.',
                },
                {
                  q: 'What devices are compatible?',
                  a: 'CoPace requires iOS 17.6 or later. The full experience requires an Apple Watch. It also works with Oura, Whoop, Garmin, and Fitbit via HealthKit.',
                },
              ].map(({ q, a }) => (
                <div key={q} style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
                  <h3 style={{ marginTop: 0, marginBottom: '0.5rem', fontSize: '1rem' }}>{q}</h3>
                  <p style={{ marginBottom: 0 }}>{a}</p>
                </div>
              ))}

              {/* ── Closing ── */}
              <div className="callout callout--green" style={{ marginTop: '3rem' }}>
                <p style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '.375rem' }}><span style={{ color: 'var(--mint-700)', lineHeight: 0 }}><IconHeart size={16} strokeWidth={2} /></span> You've Got This</p>
                <p style={{ margin: 0 }}>
                  Managing your energy can be challenging. CoPace is here to help — providing data-driven
                  insights to support your wellness journey. Use it as a compass, not a cage.
                  Let it inform your choices, but trust your own intuition.
                </p>
              </div>

              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <AppStoreBadge />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
