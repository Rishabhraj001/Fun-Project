import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ShoeSwitcher from './ShoeSwitcher'

export default function Hero({ shoe, shoes, onChangeShoe, heroRef }) {
  const copyRef = useRef(null)
  const tagRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(
      copyRef.current.querySelectorAll('.reveal'),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 }
    )
    return () => tl.kill()
  }, [])
  useEffect(() => {
  if (!tagRef.current) return

  const el = tagRef.current

  gsap.to(el, {
    y: -10,
    opacity: 0,
    duration: 0.25,
    ease: 'power2.in',
    onComplete: () => {
      el.textContent = shoe.tag

      gsap.fromTo(
        el,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          ease: 'power3.out',
        }
      )
    },
  })
}, [shoe.tag])

  return (
    <section ref={heroRef} className="hero">
      <div className="hero-copy" ref={copyRef}>
        <p className="reveal eyebrow">New drop / 04 colorways</p>
        <h1 className="reveal hero-title">
          MOVE
          <br />
          DIFFERENT
        </h1>
       <p className="reveal hero-tagline" ref={tagRef}>
  {shoe.tag}
</p>

        <div className="reveal">
          <ShoeSwitcher shoes={shoes} activeId={shoe.id} onChange={onChangeShoe} />
        </div>

        <div className="reveal scroll-cue">
          <span className="scroll-cue-line" />
          scroll to explore
        </div>
      </div>

      <div className="hero-shoe-slot" aria-hidden="true" />
      
    </section>
  )
}
