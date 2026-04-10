'use client';
import { useParams } from 'next/navigation';

import BookingForm from '../../../components/BookingForm';

export default function ServiceDetail() {
  const { id } = useParams();

  const services = {
    '1': {
      title: 'Baglamukhi Maha Havan',
      description: 'The ultimate ritual for complete protection and enemy destruction.',
      history: 'बगलामुखी माता को दस महाविद्याओं में से एक माना गया है। नलखेड़ा में उनकी पूजा का हजारों सालों का इतिहास है। यह हवन विशेष रूप से उन लोगों के लिए है जो बड़ी शत्रुओं और कानूनी उलझनों से घिरे हुए हैं।',
      process: [
        'संकल्प (Sankalp) by Pujari via Video Call',
        '1.25 Lakh Mantra Jaap (Over 7 days)',
        'Maha Havan with special ingredients at Nalkheda Peeth',
        'Blessing of Bhojpatra Yantra'
      ],
      price: '₹21,000',
      image: '/images/havan.png'
    },
    '2': {
       title: 'Court Case Vijay Puja',
       description: 'Specific ritual designed for winning legal battles.',
       history: 'यदि आप वर्षों से कानूनी मामलों में फंसे हुए हैं और कोई रास्ता नहीं दिख रहा, तो यह पूजा आपके लिए मार्ग प्रशस्त करती है। माँ बगलामुखी न्याय और विजय की देवी हैं।',
       process: [
         'Weekly Sankalp during hearing months',
         'Prasad from Nalkheda Temple',
         'Distance Puja via online mode if required'
       ],
       price: '₹11,500',
       image: '/images/hero.png'
    }
  };

  const service = services[id] || services['1'];

  const styles = {
    section: { padding: '160px 0 100px', background: 'var(--background)' },
    imgContainer: {
      width: '100%',
      height: '400px',
      borderRadius: '20px',
      overflow: 'hidden',
      marginBottom: '40px',
      border: '1px solid var(--primary-glow)'
    },
    img: { width: '100%', height: '100%', objectFit: 'cover' },
    title: { fontSize: '3rem', marginBottom: '20px' },
    header: { marginBottom: '60px' },
    content: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' },
    timeline: { borderLeft: '2px solid var(--primary)', paddingLeft: '30px', margin: '40px 0' },
    step: { marginBottom: '30px', position: 'relative' },
    dot: {
      position: 'absolute',
      left: '-37px',
      top: '5px',
      width: '12px',
      height: '12px',
      background: 'var(--primary)',
      borderRadius: '50%',
      boxShadow: '0 0 10px var(--primary)'
    }
  };

  return (
    <main>
      <section style={styles.section}>
        <div className="container">
          <div style={styles.header}>
             <div style={styles.imgContainer}>
                <img src={service.image} alt={service.title} style={styles.img} />
             </div>
             <h1 style={styles.title}>{service.title}</h1>
             <p style={{fontSize: '1.2rem', color: 'var(--primary)', letterSpacing: '1px'}}>{service.description}</p>
          </div>
          
          <div style={styles.content}>
            <div>
              <h3 style={{marginBottom: '20px'}}>About this Ritual</h3>
              <p style={{color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '30px'}}>{service.history}</p>
              
              <h3 style={{marginBottom: '20px'}}>The Process (चरण)</h3>
              <div style={styles.timeline}>
                {service.process.map((step, idx) => (
                  <div key={idx} style={styles.step}>
                    <div style={styles.dot}></div>
                    <p style={{fontSize: '1rem'}}>{step}</p>
                  </div>
                ))}
              </div>

              <div className="glass-card" style={{padding: '30px', marginTop: '40px', textAlign: 'center'}}>
                 <h4 style={{marginBottom: '10px'}}>Ritual Charges</h4>
                 <div style={{fontSize: '2rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '20px'}}>{service.price}</div>
                 <p style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)'}}>Pricing includes Samagri, Braham Dakshina and Temple Donation.</p>
              </div>
            </div>
            
            <div>
               <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
