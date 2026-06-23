import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero.jsx'
import Kingdoms from './components/Kingdoms.jsx'
import IronThrone from './components/IronThrone.jsx'
import Houses from './components/Houses.jsx'
import Outro from './components/Outro.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      gsap.globalTimeline.timeScale(50) // skip animations near-instantly
      ScrollTrigger.config({ ignoreMobileResize: true })
    }

    const handleResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <main>
      <Hero />
      
      
      <Houses />
      
    </main>
  )
}
