import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Kingdoms.css'

gsap.registerPlugin(ScrollTrigger)

const KINGDOMS = [
  { name: 'The North', sigil: '❄', color: 'var(--ice)', desc: 'Vast, cold, and older than the realm itself. Ruled from a castle of grey stone for eight thousand years.' },
  { name: 'The Vale', sigil: '⛰', color: '#7d8fa0', desc: 'A kingdom of mountain and moon, defended by passes so narrow that an army can be undone by a single archer.' },
  { name: 'The Riverlands', sigil: '🌊', color: '#5b8a9e', desc: 'Crossed by three great rivers, it is the road every army must take — and the first land any war burns through.' },
  { name: 'The Iron Islands', sigil: '⚓', color: '#3c4a52', desc: 'A scatter of rock in a cold sea, home to a people who pay the iron price and answer to no crown gladly.' },
  { name: 'The Westerlands', sigil: '🦁', color: 'var(--gold)', desc: 'Gold-rich hills that bought more wars than they ever fought. Wealth, here, is its own kind of army.' },
  { name: 'The Reach', sigil: '🌹', color: '#7e8f4a', desc: 'The breadbasket of Westeros — orchards, roses, and the largest fleet of any kingdom but the throne\'s own.' },
  { name: 'The Stormlands', sigil: '⚡', color: '#4a4f5e', desc: 'Battered by sea-storms and old grudges alike, it has given the realm more than one line of kings.' },
  { name: 'Dorne', sigil: '☀', color: '#a8362b', desc: 'Desert, spice, and a law of inheritance unlike any other kingdom\'s — the one land the dragons never fully tamed.' },
]


export default function Kingdoms() {
  const trackRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    const section = sectionRef.current
    const cards = track.querySelectorAll('.kingdom-card')

    const distance = track.scrollWidth - section.offsetWidth

    const tween = gsap.to(track, {
      x: -distance,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${distance + window.innerWidth * 0.4}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })

    cards.forEach((card) => {
      gsap.fromTo(card, { opacity: 0.25, scale: 0.92 }, {
        opacity: 1,
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          containerAnimation: tween.scrollTrigger.animation,
          start: 'left 75%',
          end: 'left 35%',
          scrub: true,
        },
      })
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section className="kingdoms-section" ref={sectionRef}>
      <div className="kingdoms-heading">
        <p className="eyebrow">Before the throne, there were kingdoms</p>
        <h2>Nine realms. One map.</h2>
      </div>
      <div className="kingdoms-track" ref={trackRef}>
        {KINGDOMS.map((k) => (
          <div className="kingdom-card" key={k.name} style={{ '--accent': k.color }}>
            <div className="kingdom-sigil">{k.sigil}</div>
            <h3>{k.name}</h3>
            <p>{k.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
