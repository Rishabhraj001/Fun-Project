import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import TickLogo from './TickLogo'
import logo from '../images/nikel.png'

export default function Navbar({ accent }) {
  const navRef = useRef(null)
  const tickPathRef = useRef(null)

  useEffect(() => {
    const items = navRef.current.querySelectorAll('.nav-item')
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      navRef.current,
      { yPercent: -100 },
      { yPercent: 0, duration: 0.8 }
    ).fromTo(
      items,
      { y: -16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
      '-=0.4'
    )

    // draw-on for the tick stroke
    const path = tickPathRef.current
    if (path) {
      const len = path.getTotalLength()
      gsap.fromTo(
        path,
        { strokeDasharray: len, strokeDashoffset: len },
        { strokeDashoffset: 0, duration: 1, ease: 'power2.inOut', delay: 0.3 }
      )
    }
  }, [])

  return (
    <nav ref={navRef} className="navbar">
      <div className="nav-item nav-brand">
       <img src={logo} className="nav-logo" alt="NIKE" />
        <span>NIKE</span>
      </div>

      <ul className="nav-links">
        <li className="nav-item">Shoes</li>
        <li className="nav-item">Collections</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Support</li>
      </ul>

      <button className="nav-item nav-cta" style={{ '--accent': accent }}>
        Get the app
      </button>
    </nav>
  )
}
