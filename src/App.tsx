import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import Guide from './pages/Guide'
import Support from './pages/Support'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Hardship from './pages/Hardship'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// Update page title per route
function PageTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    const titles: Record<string, string> = {
      '/':          'CoPace: Pacing & Energy Limit',
      '/guide':     'User Guide — CoPace',
      '/support':   'Support — CoPace',
      '/privacy':   'Privacy Policy — CoPace',
      '/terms':     'Terms of Service — CoPace',
      '/hardship':  'Financial Hardship Program — CoPace',
    }
    document.title = titles[pathname] ?? 'CoPace'
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageTitle />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/guide"    element={<Guide />} />
        <Route path="/support"  element={<Support />} />
        <Route path="/privacy"  element={<Privacy />} />
        <Route path="/terms"    element={<Terms />} />
        <Route path="/hardship" element={<Hardship />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </BrowserRouter>
  )
}
