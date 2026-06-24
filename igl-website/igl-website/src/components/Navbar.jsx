import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './navbar.css'

const LINKS = ['Home', 'Episodes', 'About', 'Contact']

export default function Navbar() {
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const linkRefs = useRef([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo(navRef.current, { y: -90, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' })
      .fromTo(logoRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
      .fromTo(
        linkRefs.current,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
        '-=0.3'
      )
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header ref={navRef} className="navbar">
      <div className="navbar__inner container">
        <a href="#home" ref={logoRef} className="navbar__logo" onClick={(e) => handleNav(e, 'home')}>
          <span className="navbar__logo-mark">🎤</span>
          <span className="navbar__logo-text">
            India's Got <em>Latent</em>
          </span>
        </a>

        <nav className="navbar__links navbar__links--desktop">
          {LINKS.map((label, i) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              ref={(el) => (linkRefs.current[i] = el)}
              onClick={(e) => handleNav(e, label.toLowerCase())}
            >
              {label}
            </a>
          ))}
        </nav>

        <button className="navbar__burger" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          <span className={open ? 'is-open' : ''} />
          <span className={open ? 'is-open' : ''} />
        </button>
      </div>

      <nav className={`navbar__links--mobile ${open ? 'is-open' : ''}`}>
        {LINKS.map((label) => (
          <a key={label} href={`#${label.toLowerCase()}`} onClick={(e) => handleNav(e, label.toLowerCase())}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
