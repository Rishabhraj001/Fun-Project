import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './episodes.css'
import first from './images/1.jpg'
import second from './images/2.jpg'
import third from './images/3.jpg'
import fourth from './images/4.jpg'

gsap.registerPlugin(ScrollTrigger)

const EPISODES = [
  { id: 1, title: 'Roast Royale', tag: 'Ep. 12', desc: 'Three comedians, zero filters, and a panel that does not hold back.', image: first },
  { id: 2, title: 'Mic Drop Mayhem', tag: 'Ep. 11', desc: 'A singer, a sword swallower, and a savage scorecard.', image: second },
  { id: 3, title: 'The Latent Finale', tag: 'Ep. 10', desc: 'Season one wraps with the panel\'s most brutal verdict yet.', image: third },
  { id: 4, title: 'Stand-Up Showdown', tag: 'Ep. 9', desc: 'Fresh faces try their luck against the harshest judges on TV.', image: fourth },
]

function EpisodeCard({ ep, index }) {
  const cardRef = useRef(null)
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 5.0 })
   
    tl.fromTo(
      cardRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        delay: index * 0.08,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 88%',
        },
      }
    )
     .fromTo(
  cardRef.current.querySelector('.ep-card__image'),
  {
    scale: 1.3,
  },
  {
    scale: 1,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: cardRef.current,
      start: 'top 85%',
    },
  }
)
  }, [index])

  const toggleLike = () => {
    setLiked((l) => !l)
    if (!liked) setDisliked(false)
  }
  const toggleDislike = () => {
    setDisliked((d) => !d)
    if (!disliked) setLiked(false)
  }

  return (
    <article className="ep-card" ref={cardRef}>
      <div className="ep-card__thumb">
  <img
    src={ep.image}
    alt={ep.title}
    className="ep-card__image"
  />

  <div className="ep-card__overlay" />

  <span className="ep-card__tag">{ep.tag}</span>

  <button className="ep-card__watch">
    ▶ Watch Now
  </button>
</div>
      <div className="ep-card__body">
        <h3>{ep.title}</h3>
        <p>{ep.desc}</p>

        <div className="ep-card__stars" onMouseLeave={() => setHoverRating(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={`star ${(hoverRating || rating) >= n ? 'is-active' : ''}`}
              onMouseEnter={() => setHoverRating(n)}
              onClick={() => setRating(n)}
              aria-label={`Rate ${n} stars`}
            >
              ★
            </button>
          ))}
          <span className="ep-card__rating-label">{rating ? `${rating}.0` : 'Rate it'}</span>
        </div>

        <div className="ep-card__actions">
          <button className={`pill ${liked ? 'is-active' : ''}`} onClick={toggleLike}>
            👍 Like
          </button>
          <button className={`pill ${disliked ? 'is-active' : ''}`} onClick={toggleDislike}>
            👎 Dislike
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Episodes() {
  const headRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      headRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 85%' } }
    )
  }, [])

  return (
    <section id="episodes" className="episodes">
      <div className="container">
        <div ref={headRef} className="episodes__head">
          <p className="eyebrow">Latest Drops</p>
          <h2>Episodes worth the argument</h2>
        </div>

        <div className="episodes__grid">
          {EPISODES.map((ep, i) => (
            <EpisodeCard ep={ep} key={ep.id} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
