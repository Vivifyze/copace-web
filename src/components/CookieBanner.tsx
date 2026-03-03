import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { initAnalytics } from '../firebase'

const STORAGE_KEY = 'copace-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
    initAnalytics()
  }

  function handleDecline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="region" aria-label="Cookie consent">
      <p>
        We use cookies to understand how you use our site and improve your experience.
        This includes analytics cookies.{' '}
        <Link to="/privacy">Learn more</Link>
      </p>
      <div className="cookie-banner__actions">
        <button className="cookie-btn cookie-btn-decline" onClick={handleDecline}>
          Decline
        </button>
        <button className="cookie-btn cookie-btn-accept" onClick={handleAccept}>
          Accept
        </button>
      </div>
    </div>
  )
}
