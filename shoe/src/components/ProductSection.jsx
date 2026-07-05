import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProductSection({ shoe, productRef }) {
  const sectionRef = useRef(null)
  const priceRef = useRef(null)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    const items = el.querySelectorAll('.detail-reveal')

    const trigger = gsap.fromTo(
      items,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
        },
      }
    )

    return () => trigger.scrollTrigger && trigger.scrollTrigger.kill()
  }, [])

  // animate the price ticking up whenever the shoe (and so the price) changes
  useEffect(() => {
    const obj = { val: 0 }
    gsap.to(obj, {
      val: shoe.price,
      duration: 0.8,
      ease: 'power2.out',
      onUpdate: () => {
        if (priceRef.current) priceRef.current.textContent = `$${Math.round(obj.val)}`
      },
    })
  }, [shoe.price])

  const handleBuy = (e) => {
    setAdded(true)
    gsap.fromTo(
      e.currentTarget,
      { scale: 1 },
      { scale: 0.94, duration: 0.12, yoyo: true, repeat: 1, ease: 'power1.inOut' }
    )
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <section ref={(node) => { sectionRef.current = node; if (productRef) productRef.current = node }} className="product-section">
      <div className="product-shoe-slot" aria-hidden="true" />

      <div className="product-details">
        <p className="detail-reveal eyebrow">{shoe.id.toUpperCase()} SERIES</p>
        <h2 className="detail-reveal product-name">{shoe.name}</h2>
        <p className="detail-reveal product-tag">{shoe.tag}</p>

        <ul className="detail-reveal spec-list">
          <li>Knit mesh upper, recycled yarn</li>
          <li>Responsive foam midsole</li>
          <li>Multi-surface traction outsole</li>
        </ul>

        <div className="detail-reveal price-row">
          <span className="price" ref={priceRef}>${shoe.price}</span>
          <button className="buy-btn" onClick={handleBuy}>
            {added ? 'Added ✓' : 'Add to bag'}
          </button>
        </div>
      </div>
    </section>
  )
}
