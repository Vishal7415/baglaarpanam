'use client';

export default function Hero() {
  return (
    <section className="hero-section parallax-bg">
      <img src="/images/hero.png" alt="Baglamukhi Mandir Hero" className="hero-bg" />
      <div className="hero-overlay"></div>
      
      <div className="hero-content container">
        <h1 className="hero-title">
          <span className="gradient-text">शत्रु विनाश एवं विजय प्राप्ति </span><br/>
          सिद्ध हवन एवं पूजा अनुष्ठान
        </h1>
        <p className="hero-subtitle">
          🔱 15+ Years Experience | 5000+ Successful Siddhi 🔱
        </p>
        
        <div className="hero-badges">
          <div className="hero-badge float-img">
            <span className="badge-label">Success Rate</span>
            99% Client Satisfaction
          </div>
          <div className="hero-badge float-img" style={{animationDelay: '0.5s'}}>
            <span className="badge-label">Siddh Peeth</span>
            Nalkheda Mandir (MP)
          </div>
          <div className="hero-badge float-img" style={{animationDelay: '1s'}}>
            <span className="badge-label">Protection</span>
            100% Confidentiality
          </div>
        </div>
        
        <div className="hero-btns">
          <a href="/booking" className="btn-premium btn-gold hero-btn">Book Puja Now</a>
          <a href="https://wa.me/91XXXXXXXXXX" className="btn-premium btn-outline hero-btn">Direct Consultation →</a>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          object-fit: cover;
          filter: brightness(0.3) contrast(1.2);
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, transparent 30%, rgba(13, 13, 13, 0.9) 100%);
          z-index: -1;
        }
        .hero-content {
          max-width: 1000px;
          animation: fadeIn 1.2s ease-out;
          position: relative;
          z-index: 10;
        }
        .hero-title {
          font-size: clamp(2.2rem, 6vw, 4.5rem);
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.2;
          text-shadow: 0 5px 30px rgba(0,0,0,0.8);
        }
        .hero-subtitle {
          font-size: clamp(0.9rem, 2vw, 1.4rem);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          marginBottom: 50px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 40px;
        }
        .hero-badges {
          display: flex;
          gap: 30px;
          justify-content: center;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }
        .hero-badge {
          font-size: 0.9rem;
          font-weight: 600;
          border-left: 3px solid var(--primary);
          padding: 10px 20px;
          text-align: left;
          background: rgba(255,215,0,0.05);
          min-width: 200px;
        }
        .badge-label {
          color: var(--primary);
          display: block;
          font-size: 0.7rem;
          textTransform: uppercase;
          letter-spacing: 1px;
        }
        .hero-btns {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hero-btn {
          min-width: 220px;
        }

        @media (max-width: 768px) {
          .hero-section {
            height: auto;
            padding: 120px 0 60px;
            min-height: 100vh;
          }
          .hero-title { font-size: 2.2rem; }
          .hero-badges { flex-direction: column; align-items: center; gap: 15px; }
          .hero-badge { width: 100%; max-width: 300px; }
          .hero-btns { flex-direction: column; width: 100%; padding: 0 20px; }
          .hero-btn { width: 100%; min-width: unset; }
        }
      `}</style>
    </section>
  );
}
