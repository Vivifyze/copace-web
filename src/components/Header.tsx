import { NavLink } from 'react-router-dom'
import { CoPaceLogo } from './Icons'

const APP_STORE_URL = 'https://apps.apple.com/us/app/copace-pacing-energy-limit/id6757660550'

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="container header__inner">
        <NavLink to="/" className="header__logo" aria-label="CoPace home">
          <CoPaceLogo size={32} />
          CoPace
        </NavLink>

        <nav className="header__nav" aria-label="Main navigation">
          <NavLink to="/guide">Guide</NavLink>
          <NavLink to="/support">Support</NavLink>
        </nav>

        <div className="header__cta">
          <a
            href={APP_STORE_URL}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        </div>
      </div>
    </header>
  )
}
