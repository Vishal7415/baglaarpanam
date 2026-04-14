'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Services() {
  const [services] = useState([
    {
      _id: '1',
      title: 'Baglamukhi Havan',
      description: 'सिद्ध हवन जो शत्रु बाधा और नकारात्मक ऊर्जा को पूरी तरह से समाप्त करता है।',
      price: '₹5,100',
      image: '/images/havan.png',
      icon: '🔥'
    },
    {
      _id: '2',
      title: 'Court Case Victory',
      description: 'लंबे समय से चल रहे कोर्ट केस और कानूनी पेजों में विजय और सफलता के लिए विशेष पूजा।',
      price: '₹7,500',
      image: '/images/hero.png',
      icon: '⚖️'
    },
    {
      _id: '3',
      title: 'Business Growth',
      description: 'व्यापार में घाटे और रुकावटों को दूर कर समृद्धि और लक्ष्मी का आगमन सुनिश्चित करने वाला अनुष्ठान।',
      price: '₹3,500',
      image: '/images/hero.png',
      icon: '📈'
    },
    {
      _id: '4',
      title: 'Protection Ritual',
      description: 'परिवार और स्वयं के लिए शक्तिशाली सुरक्षा कवच (Protection) जो हर तरह की तंत्र शक्ति को विफल करता है।',
      price: '₹4,200',
      image: '/images/protection.png',
      icon: '🛡️'
    }
  ]);

  const styles = {
    section: { background: 'var(--background)' },
    header: { textAlign: 'center', marginBottom: '60px' },
    title: { fontSize: '2.5rem', marginBottom: '20px' },
    subtitle: { color: 'var(--primary)', letterSpacing: '2px' },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
    },
    card: {
      position: 'relative',
      borderRadius: '20px',
      overflow: 'hidden',
      border: '1px solid var(--border)',
      background: 'rgba(26, 26, 26, 0.5)',
      height: '450px',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    imgContainer: {
      height: '180px',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.6s ease',
    },
    content: {
      padding: '30px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    icon: {
      position: 'absolute',
      top: '160px',
      right: '30px',
      background: 'var(--primary)',
      color: '#000',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
      zIndex: 10,
    }
  };

  return (
    <section id="services" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h2 style={styles.title}>हमारी सिद्ध सेवाएं</h2>
          <p style={styles.subtitle}>Siddha Puja & Anushthan Services</p>
        </div>
        
        <div style={styles.grid}>
          {services.map((service, idx) => (
            <div key={idx} className="glass-card" style={styles.card}>
              <div style={styles.imgContainer}>
                <img src={service.image} alt={service.title} style={styles.img} className="service-img" />
              </div>
              <div style={styles.icon}>{service.icon}</div>
              <div style={styles.content}>
                <div>
                  <h3 style={{fontSize: '1.4rem', marginBottom: '15px'}}>{service.title}</h3>
                  <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem'}}>{service.description}</p>
                </div>
                <div style={{marginTop: '20px'}}>
                  {/* <div style={{fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '15px'}}>{service.price}</div> */}
                  <Link href={`/services/${service._id}`} className="btn-premium btn-gold" style={{width: '100%', display: 'block', fontSize: '0.8rem'}}>View Details & Book →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`.service-img:hover { transform: scale(1.1); }`}</style>
    </section>
  );
}
