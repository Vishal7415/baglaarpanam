'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import LanguageTranslator from './LanguageTranslator';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled || isMenuOpen ? 'scrolled' : ''}`}>
        <div className="nav-container container">
          <Link href="/">
            <div className="logo">
              बगलार्पणम्
              <span className="logo-sub">नलखेड़ा सिद्ध पीठ</span>
            </div>
          </Link>
          
          {/* Desktop Links */}
          <div className="nav-links hidden-mobile">
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/booking" className="nav-link">Booking</Link>
            <LanguageTranslator />
            <a href="https://wa.me/919424072531" className="btn-premium btn-gold">WhatsApp Now</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`}>
        <Link href="/about" className="mobile-link" onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link href="/services" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
        <Link href="/contact" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        <Link href="/booking" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Booking</Link>
        <div style={{margin: '20px 0'}}><LanguageTranslator /></div>
        <a href="https://wa.me/919424072531" className="btn-premium btn-gold" onClick={() => setIsMenuOpen(false)}>WhatsApp Now</a>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          padding: 25px 0;
          transition: all 0.4s ease;
          background: transparent;
        }
        .navbar.scrolled {
          background: rgba(13, 13, 13, 0.95);
          backdrop-filter: blur(10px);
          padding: 15px 0;
          border-bottom: 1px solid var(--border);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          font-family: 'Rozha One', serif;
          color: var(--primary);
        }
        .logo-sub {
          font-size: 0.75rem;
          color: #fff;
          display: block;
          letter-spacing: 2px;
          margin-top: -5px;
          font-family: 'Inter', sans-serif;
        }
        .nav-links {
          display: flex;
          gap: 30px;
          align-items: center;
        }
        .nav-link {
          font-size: 0.85rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #fff;
        }
        .mobile-menu-btn {
          display: none;
          font-size: 1.8rem;
          color: var(--primary);
          cursor: pointer;
        }
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #0d0d0d;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 25px;
          transform: translateY(-100%);
          transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
        }
        .mobile-overlay.active {
          transform: translateY(0);
        }
        .mobile-link {
          font-size: 1.5rem;
          color: #fff;
          font-family: 'Cinzel', serif;
        }

        @media (max-width: 1024px) {
          .nav-links { gap: 15px; }
          .logo { font-size: 1.5rem; }
          .nav-link { font-size: 0.8rem; }
        }

        @media (max-width: 991px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block; }
          .navbar { padding: 15px 0; }
        }
      `}</style>
    </>
  );
}
