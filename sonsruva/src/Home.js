import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const testimonials = [
  {
    name: 'Ravi Kumar',
    role: 'Small Business Owner',
    rating: 5,
    feedback:
      'SonShruVa Advisors completely transformed how I handle my GST filings. Their team is prompt, professional, and genuinely cares about my business. Highly recommended!',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Ravi%20Kumar&backgroundColor=0e7490&textColor=ffffff',
  },
  {
    name: 'Priya Nair',
    role: 'Freelance Consultant',
    rating: 4.5,
    feedback:
      "I was completely lost with ITR filings as a freelancer. They made the entire process seamless and even helped me save on taxes I didn't know I could claim!",
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Priya%20Nair&backgroundColor=0e7490&textColor=ffffff',
  },
  {
    name: 'Suresh Reddy',
    role: 'Retail Entrepreneur',
    rating: 5,
    feedback:
      "Outstanding service! They handled our company's annual compliance and tax audits with zero stress on our end. Transparent pricing and no hidden surprises.",
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Suresh%20Reddy&backgroundColor=0e7490&textColor=ffffff',
  },
  {
    name: 'Meena Sharma',
    role: 'Salaried Professional',
    rating: 4,
    feedback:
      'Filing taxes was always something I dreaded. After consulting SonShruVa, it was done in a day! Their advice on investments for tax saving was a bonus.',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Meena%20Sharma&backgroundColor=0e7490&textColor=ffffff',
  },
  {
    name: 'Arjun Mehta',
    role: 'Startup Founder',
    rating: 4.5,
    feedback:
      'From incorporation to GST registration to monthly bookkeeping — SonShruVa has been our one-stop partner. They feel less like a service and more like a co-founder.',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Arjun%20Mehta&backgroundColor=0e7490&textColor=ffffff',
  },
  {
    name: 'Neha Verma',
    role: 'E-commerce Seller',
    rating: 5,
    feedback:
      'Managing GST across multiple states was becoming a nightmare for my online store. SonShruVa Advisors simplified everything and ensured full compliance without delays. Their support team is always just a call away!',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Neha%20Verma&backgroundColor=0e7490&textColor=ffffff',
  }
];

// Renders up to 5 stars supporting full, half, and empty states
const StarRating = ({ rating }) => {
  return (
    <div className="star-rating" title={`${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const fill = Math.min(Math.max(rating - (star - 1), 0), 1);
        const isHalf = fill > 0 && fill < 1;
        const isFull = fill === 1;
        return (
          <span
            key={star}
            className={`star ${isFull ? 'star-full' : isHalf ? 'star-half' : 'star-empty'}`}
          >
            ★
          </span>
        );
      })}
      <span className="star-label">{rating}</span>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card">
    <div className="testimonial-quote-mark">"</div>
    <p className="testimonial-feedback">{testimonial.feedback}</p>
    <StarRating rating={testimonial.rating} />
    <div className="testimonial-author">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="testimonial-avatar"
      />
      <div className="testimonial-author-info">
        <span className="testimonial-name">{testimonial.name}</span>
        <span className="testimonial-role">{testimonial.role}</span>
      </div>
    </div>
  </div>
);

const Home = () => {
  const navigate = useNavigate();
  const trackRef = useRef(null);

  const handleExploreClick = () => {
    navigate('/services');
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animFrameId;
    let pos = 0;
    const speed = 1;

    // Pause flags — any one being true stops auto-scroll
    let mousePaused = false;
    let touchPaused = false;

    // Touch drag state
    let touchStartX = 0;
    let posAtTouchStart = 0;

    const getHalfWidth = () => track.scrollWidth / 2;

    // Clamp pos into [0, halfWidth) for the infinite loop
    const clamp = (p) => {
      const half = getHalfWidth();
      if (half <= 0) return 0;
      return ((p % half) + half) % half;
    };

    // ── Auto-scroll loop ──────────────────────────────────────────
    const scroll = () => {
      if (!mousePaused && !touchPaused) {
        pos = clamp(pos + speed);
        track.style.transform = `translateX(-${pos}px)`;
      }
      animFrameId = requestAnimationFrame(scroll);
    };

    animFrameId = requestAnimationFrame(scroll);

    // ── Mouse handlers (desktop hover) ────────────────────────────
    const onMouseEnter = () => { mousePaused = true; };
    const onMouseLeave = () => { mousePaused = false; };

    // ── Touch handlers ────────────────────────────────────────────
    const onTouchStart = (e) => {
      touchPaused = true;
      touchStartX = e.touches[0].clientX;
      posAtTouchStart = pos;
      track.style.transition = 'none'; // instant response while dragging
    };

    const onTouchMove = (e) => {
      if (!touchPaused) return;
      const dx = touchStartX - e.touches[0].clientX; // drag left → positive = scroll right
      pos = clamp(posAtTouchStart + dx);
      track.style.transform = `translateX(-${pos}px)`;
    };

    const onTouchEnd = () => {
      touchPaused = false;
      // Small momentum: last drag direction continues briefly via auto-scroll
    };

    track.addEventListener('mouseenter', onMouseEnter);
    track.addEventListener('mouseleave', onMouseLeave);
    track.addEventListener('touchstart', onTouchStart, { passive: true });
    track.addEventListener('touchmove', onTouchMove, { passive: true });
    track.addEventListener('touchend', onTouchEnd);

    return () => {
      cancelAnimationFrame(animFrameId);
      track.removeEventListener('mouseenter', onMouseEnter);
      track.removeEventListener('mouseleave', onMouseLeave);
      track.removeEventListener('touchstart', onTouchStart);
      track.removeEventListener('touchmove', onTouchMove);
      track.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  // Duplicate for seamless infinite loop
  const allCards = [...testimonials, ...testimonials];

  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <div className="hero-section">
        <h1 className="hero-title">SonShruVa Advisors</h1>
        <p className="hero-subtitle">Your trusted partner in tax clarity</p>
        <button className="hero-btn" onClick={handleExploreClick}>
          Explore Services
        </button>
      </div>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <div className="testimonials-header">
          <p className="testimonials-eyebrow">Client Stories</p>
          <h2 className="testimonials-title">Trusted by Hundreds Across India</h2>
          <p className="testimonials-subtitle">
            Real experiences from real clients who found clarity with us.
          </p>
        </div>

        <div className="testimonials-carousel-wrapper">
          <div className="carousel-fade carousel-fade-left" />
          <div className="carousel-fade carousel-fade-right" />
          <div className="testimonials-track" ref={trackRef}>
            {allCards.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;