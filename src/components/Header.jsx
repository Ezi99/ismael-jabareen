import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            className="hamburger"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
          <span></span>
          <span></span>
          <span></span>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>
                About
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={(e) => handleNavClick(e, '#education')}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => handleNavClick(e, '#experience')}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

