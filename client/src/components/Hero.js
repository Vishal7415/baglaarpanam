'use client';

export default function Hero() {
  const styles = {
    hero: {
      position: 'relative',
      height: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 20px',
      overflow: 'hidden',
    },
    bg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      objectFit: 'cover',
      filter: 'brightness(0.3) contrast(1.2)',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle, transparent 30%, rgba(13, 13, 13, 0.9) 100%)',
      zIndex: -1,
    },
    content: {
      maxWidth: '1000px',
      animation: 'fadeIn 1.2s ease-out',
    },
    title: {
      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
      fontWeight: '800',
      marginBottom: '20px',
      lineHeight: '1.2',
      textShadow: '0 5px 30px rgba(0,0,0,0.8)',
    },
    subTitle: {
      fontSize: 'clamp(1rem, 2vw, 1.4rem)',
      fontWeight: '400',
      color: 'rgba(255, 255, 255, 0.8)',
      marginBottom: '50px',
      letterSpacing: '3px',
      textTransform: 'uppercase',
    },
    badges: {
      display: 'flex',
      gap: '40px',
      justifyContent: 'center',
      marginBottom: '60px',
      flexWrap: 'wrap',
    },
    badge: {
      fontSize: '0.9rem',
      fontWeight: '600',
      borderLeft: '3px solid var(--primary)',
      paddingLeft: '20px',
      textAlign: 'left',
      background: 'rgba(255,215,0,0.05)',
      padding: '10px 20px',
    },
    badgeLabel: {
      color: 'var(--primary)',
      display: 'block',
      fontSize: '0.7rem',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    btnContainer: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap',
    }
  };

  return (
    <section style={styles.hero} className="parallax-bg">
      <img src="/images/hero.png" alt="Baglamukhi Mandir Hero" style={styles.bg} />
      <div style={styles.overlay}></div>
      
      <div style={styles.content}>
        <h1 style={styles.title}>
          <span className="gradient-text">शत्रु विनाश एवं विजय प्राप्ति </span><br/>
          सिद्ध हवन एवं पूजा अनुष्ठान
        </h1>
        <p style={styles.subTitle}>
          🔱 15+ Years Experience | 5000+ Successful Siddhi 🔱
        </p>
        
        <div style={styles.badges}>
          <div style={styles.badge} className="float-img">
            <span style={styles.badgeLabel}>Success Rate</span>
            99% Client Satisfaction
          </div>
          <div className="float-img" style={{...styles.badge, animationDelay: '0.5s'}}>
            <span style={styles.badgeLabel}>Siddh Peeth</span>
            Nalkheda Mandir (MP)
          </div>
          <div className="float-img" style={{...styles.badge, animationDelay: '1s'}}>
            <span style={styles.badgeLabel}>Protection</span>
            100% Confidentiality
          </div>
        </div>
        
        <div style={styles.btnContainer}>
          <a href="/booking" className="btn-premium btn-gold" style={{minWidth: '220px'}}>Book Puja Now</a>
          <a href="https://wa.me/91XXXXXXXXXX" className="btn-premium btn-outline" style={{minWidth: '220px', fontSize: '0.8rem'}}>Direct Consultation →</a>
        </div>
      </div>
    </section>
  );
}
