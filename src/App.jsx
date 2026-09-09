import { useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
