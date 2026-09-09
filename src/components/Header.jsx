import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )

    NAV_ITEMS.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const section = document.querySelector(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="nav" aria-label="Primary">
          <div className="logo">
            <span className="logo-badge" aria-hidden="true">
              IJ
            </span>
            <span>Ismael Jabareen</span>
          </div>
          <button
            className={`hamburger ${isMenuOpen ? 'is-open' : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="primary-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul id="primary-nav" className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeId === id ? 'is-active' : ''}
                  aria-current={activeId === id ? 'true' : undefined}
                  onClick={(e) => handleNavClick(e, `#${id}`)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
