'use client';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import BookingForm from '../components/BookingForm';
import BlogSection from '../components/BlogSection';

export default function Home() {
  const galleryImages = [
    { src: '/images/hero.png', alt: 'Goddess Baglamukhi' },
    { src: '/images/havan.png', alt: 'Sacred Havan' },
    { src: '/images/gallery1.png', alt: 'Temple Interior' },
    { src: '/images/gallery2.png', alt: 'Sacred Yantra' },
    { src: '/images/protection.png', alt: 'Protection Mandala' },
    { src: '/images/havan.png', alt: 'Ritual Ceremony' }
  ];

  return (
    <main>
      <Hero />
      <About />
      <Services />
      
      {/* Why Choose Us Section */}
      <section style={{background: 'var(--background)'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2 style={{fontSize: '2.5rem', marginBottom: '60px'}}>Why Choose Baglarpanam?</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px'}}>
             <div className="glass-card" style={{padding: '30px'}}>
               <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>🏛️</div>
               <h4 style={{marginBottom: '10px'}}>15+ Years</h4>
               <p style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)'}}>Deep experience in Tantra Vidya at Nalkheda.</p>
             </div>
             <div className="glass-card" style={{padding: '30px'}}>
               <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>🔥</div>
               <h4 style={{marginBottom: '10px'}}>5000+ Havan</h4>
               <p style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)'}}>Successfully conducted individual and group rituals.</p>
             </div>
             <div className="glass-card" style={{padding: '30px'}}>
               <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>🔐</div>
               <h4 style={{marginBottom: '10px'}}>Confidential</h4>
               <p style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)'}}>Complete privacy of clients and their rituals.</p>
             </div>
             <div className="glass-card" style={{padding: '30px'}}>
               <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>✨</div>
               <h4 style={{marginBottom: '10px'}}>Real Proof</h4>
               <p style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)'}}>We provide live Sankalp and proof of puja rituals.</p>
             </div>
          </div>
        </div>
      </section>

      <BookingForm />
      
      {/* Testimonials Slider */}
      <section style={{background: 'var(--dark-accent)'}}>
        <div className="container" style={{textAlign: 'center'}}>
           <h2 style={{fontSize: '2.5rem', marginBottom: '60px', fontFamily: 'Cinzel'}}>भक्तों के अनुभव</h2>
           <div className="glass-card" style={{padding: '60px', maxWidth: '800px', margin: '0 auto', border: '1px solid var(--primary-glow)', position: 'relative'}}>
              <span style={{position: 'absolute', top: '20px', left: '30px', fontSize: '4rem', color: 'rgba(255,215,0,0.2)'}}>“</span>
              <p style={{fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '30px', lineHeight: '1.8'}}>
                "माँ बगलामुखी की कृपा और बगलाअर्पणम की सेवा से मेरा सालों पुराना कोर्ट केस निपट गया। गुरुजी ने बहुत ही श्रद्धा से हवन सम्पन्न किया। नलखेड़ा जैसा स्थान और आपकी सेवा धन्य है।"
              </p>
              <div style={{fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary)', letterSpacing: '1px'}}>श्री रमेश कुमार, मुंबई</div>
              <span style={{display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginTop: '10px'}}>Verified Puja Client</span>
           </div>
        </div>
      </section>

      <BlogSection />

      {/* Gallery Section */}
      <section id="gallery" style={{background: 'var(--background)'}}>
         <div className="container">
           <h2 style={{textAlign: 'center', marginBottom: '60px'}}>पुण्य दर्शन (Gallery)</h2>
           <div className="grid-auto-300" style={{gap: '20px'}}>
              {galleryImages.map((img, i) => (
                <div key={i} className="glass-card" style={{height: '300px', overflow: 'hidden', cursor: 'pointer'}}>
                   <img 
                    src={img.src} 
                    alt={img.alt} 
                    style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.5s ease'}} 
                    className="gallery-img"
                   />
                </div>
              ))}
           </div>
         </div>
         <style>{`.gallery-img:hover { transform: scale(1.1); filter: brightness(1.2); }`}</style>
      </section>

      {/* FAQ Section */}
      <section style={{background: 'var(--dark-accent)'}}>
         <div className="container" style={{maxWidth: '800px'}}>
           <h2 style={{textAlign: 'center', marginBottom: '60px'}}>अक्सर पूछे जाने वाले प्रश्न (FAQ)</h2>
           {[
             { q: 'क्या ऑनलाइन पूजा संभव है?', a: 'हाँ, हम ऑनलाइन लाइव संकल्प और हवन की सुविधा प्रदान करते हैं। आप वीडियो कॉल के माध्यम से जुड़ सकते हैं।' },
             { q: 'पूजा का प्रमाण क्या मिलेगा?', a: 'हम आपको पूजा के दौरान का फोटो, वीडियो और आपके नाम का संकल्प रिकॉर्डिंग भेजते हैं।' },
             { q: 'मंदिर पहुँचने की क्या प्रक्रिया है?', a: 'नलखेड़ा मंदिर इंदौर या उज्जैन से सड़क मार्ग द्वारा पहुंचा जा सकता है। आप अग्रिम बुकिंग कर सकते हैं।' }
           ].map((faq, i) => (
             <div key={i} className="glass-card" style={{padding: '20px', marginBottom: '15px'}}>
                <h4 style={{color: 'var(--primary)', marginBottom: '10px'}}>Q: {faq.q}</h4>
                <p style={{fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)'}}>A: {faq.a}</p>
             </div>
           ))}
         </div>
      </section>
    </main>
  );
}
