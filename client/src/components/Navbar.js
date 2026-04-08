'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: isScrolled ? '15px 5%' : '25px 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: isScrolled ? 'rgba(13, 13, 13, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.4s ease',
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: '700',
      fontFamily: "'Rozha One', serif",
      color: 'var(--primary)',
      cursor: 'pointer',
    },
    logoSub: {
      fontSize: '0.8rem',
      color: '#fff',
      display: 'block',
      letterSpacing: '3px',
      marginTop: '-5px',
    },
    links: {
      display: 'flex',
      gap: '30px',
      alignItems: 'center',
    },
    link: {
      fontSize: '0.9rem',
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      transition: 'color 0.3s ease',
    },
    bookingBtn: {
      marginLeft: '20px',
    }
  };

  return (
    <nav style={styles.nav}>
      <Link href="/">
        <div style={styles.logo}>
          बगलार्पणम्
          <span style={styles.logoSub}>नलखेड़ा सिद्ध पीठ</span>
        </div>
      </Link>
      
      <div style={styles.links} className="hidden-mobile">
        <Link href="/about" style={styles.link}>About</Link>
        <Link href="/services" style={styles.link}>Services</Link>
        <Link href="/contact" style={styles.link}>Contact</Link>
        <Link href="/booking" style={styles.link}>Booking</Link>
        <Link href="/admin" style={styles.link}>Dashboard</Link>
        <a href="https://wa.me/91XXXXXXXXXX" className="btn-premium btn-gold" style={styles.bookingBtn}>WhatsApp Now</a>
      </div>
    </nav>
  );
}
