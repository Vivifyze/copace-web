import { Link } from 'react-router-dom'
import { CoPaceLogo } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="CoPace home">
              <CoPaceLogo size={30} />
              CoPace
            </Link>
            <p>
              A pacing &amp; energy management companion for people managing chronic illness
              and fatigue. All health data stays on your device.
            </p>
          </div>

          <div className="footer__col">
            <h4>Product</h4>
            <ul>
              <li><Link to="/guide">User Guide</Link></li>
              <li><Link to="/hardship">Financial Hardship</Link></li>
              <li>
                <a
                  href="https://apps.apple.com/us/app/copace-pacing-energy-limit/id6757660550"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App Store
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/support">Support</Link></li>
              <li><a href="mailto:support@copace.app">support@copace.app</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} CoPace. All rights reserved.</p>
          <p>Not a medical device. For wellness use only.</p>
        </div>
      </div>
    </footer>
  )
}
