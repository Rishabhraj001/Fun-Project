import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'

import shoes from './data/shoes'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [activeId, setActiveId] = useState(shoes[0].id)
  const shoe = shoes.find((s) => s.id === activeId)

  const wrapperRef = useRef(null)
  const heroRef = useRef(null)
  const productRef = useRef(null)
  const shoeWrapRef = useRef(null)
  const shoeSvgRef = useRef(null)
  const bgRef = useRef(null)

  // ---------------- HERO INTRO ANIMATION ----------------
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.hero-title', { x: -60, opacity: 0 })
      gsap.set('.hero-subtitle', { x: -40, opacity: 0 })
      gsap.set('.hero-buttons', { y: 20, opacity: 0 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.to('.hero-title', {
        x: 0,
        opacity: 1,
        duration: 0.8,
      })
        .to(
          '.hero-subtitle',
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
          },
          '-=0.4'
        )
        .to(
          '.hero-buttons',
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          '-=0.3'
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // ---------------- SHOE CHANGE ----------------
  useEffect(() => {
    if (!shoeWrapRef.current || !shoeSvgRef.current) return

    gsap.to(bgRef.current, {
      backgroundImage: shoe.bg,
      duration: 0.8,
      ease: 'power2.out',
    })

    const tl = gsap.timeline()

    tl.to(shoeWrapRef.current, {
      scale: 0.5,
      opacity: 0,
      rotation: 15,
      x: -100,
      duration: 0.3,
      ease: 'power2.in',
    })
      .add(() => {
        shoeSvgRef.current.src = shoe.img
      })
      .fromTo(
        shoeWrapRef.current,
        {
          scale: 1.5,
          opacity: 0,
          rotation: -20,
          x: 120,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: -6,
          x: 0,
          duration: 0.6,
          ease: 'back.out(2)',
        }
      )
  }, [shoe.id])

  // ---------------- SCROLL ANIMATION ----------------
  useLayoutEffect(() => {
    if (!wrapperRef.current || !heroRef.current || !productRef.current) return

    ScrollTrigger.getAll().forEach((t) => t.kill())

    const heroSlot = heroRef.current.querySelector('.hero-shoe-slot')
    const productSlot = productRef.current.querySelector('.product-shoe-slot')

    if (!heroSlot || !productSlot) return

    const compute = () => {
      const heroRect = heroSlot.getBoundingClientRect()
      const prodRect = productSlot.getBoundingClientRect()
      const wrapperRect = wrapperRef.current.getBoundingClientRect()

      const startX =
        heroRect.left - wrapperRect.left + heroRect.width / 2
      const startY =
        heroRect.top - wrapperRect.top + heroRect.height / 2

      const endX =
        prodRect.left - wrapperRect.left + prodRect.width / 2
      const endY =
        prodRect.top - wrapperRect.top + prodRect.height / 2

      return {
        dx: endX - startX,
        dy: endY - startY,
      }
    }

    const { dx, dy } = compute()

    gsap.set(shoeWrapRef.current, {
      x: 0,
      y: 0,
      rotation: -6,
      scale: 1,
    })

    const tween = gsap.to(shoeWrapRef.current, {
      x: dx,
      y: dy,
      rotation: 4,
      scale: 0.62,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    })

    const onResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      tween.scrollTrigger?.kill()
    }
  }, [])

  // ---------------- HANDLER ----------------
  const handleChangeShoe = (id) => setActiveId(id)

  // ---------------- UI ----------------
  return (
    <div
      ref={bgRef}
      className="app-bg"
      style={{
        background: shoe.bg,
        color: shoe.text,
      }}
    >
      <Navbar accent={shoe.primary} />

      <div ref={wrapperRef} className="scroll-wrapper">
        <Hero
          shoe={shoe}
          shoes={shoes}
          onChangeShoe={handleChangeShoe}
          heroRef={heroRef}
        />

        <ProductSection shoe={shoe} productRef={productRef} />

        <div ref={shoeWrapRef} className="shoe-traveler">
          <img
            ref={shoeSvgRef}
            src={shoe.img}
            alt={shoe.name}
            className="shoe-image"
            style={{ willChange: 'transform' }}
          />
        </div>
      </div>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Nika. Move different.</span>
      </footer>
    </div>
  )
}