import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { HiStar } from 'react-icons/hi2';
import reviews from '../../data/reviews.js';
import 'swiper/css';
import 'swiper/css/navigation';
import './Reviews.css';

const Reviews = () => {
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <span className="eyebrow">In Their Words</span>
        <h2 className="section-title reviews__title">What Riders Say</h2>

        <Swiper
          modules={[Autoplay, Navigation]}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={1}
          spaceBetween={28}
          breakpoints={{
            800: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="reviews__swiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <article className="review-card glass-panel">
                <div className="review-card__stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <HiStar key={i} className={i < review.rating ? 'is-filled' : ''} />
                  ))}
                </div>
                <p className="review-card__text">&ldquo;{review.review}&rdquo;</p>
                <div className="review-card__author">
                  <img src={review.avatar} alt={review.name} className="review-card__avatar" />
                  <div>
                    <p className="review-card__name">{review.name}</p>
                    <p className="review-card__bike">{review.bike}</p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
