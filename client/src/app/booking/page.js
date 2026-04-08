'use client';
import BookingForm from '../../components/BookingForm';

export default function BookingPage() {
  const styles = {
    hero: {
      padding: '150px 0 100px',
      textAlign: 'center',
      background: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("/images/havan.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderBottom: '1px solid var(--border)',
    },
    title: {
      fontSize: '4rem',
      marginBottom: '20px',
      fontFamily: "'Rozha One', serif",
    },
    breadcrumb: {
      fontSize: '0.9rem',
      color: 'var(--primary)',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    grid: {
       display: 'grid',
       gridTemplateColumns: '1fr 1fr',
       gap: '60px',
       alignItems: 'start',
       padding: '100px 0',
    }
  };

  return (
    <main>
      <section style={styles.hero}>
        <div className="container">
          <div style={styles.breadcrumb}>नलखेड़ा | बुकिंग</div>
          <h1 style={styles.title}>अनुष्ठान पंजीकरण</h1>
          <p style={{maxWidth: '800px', margin: '0 auto', color: 'rgba(255,255,255,0.7)'}}>
             अपना संकल्प और पूजा अभी बुक करें। 100% सुरक्षित भुगतान और पुष्ट अनुष्ठान की गारंटी।
          </p>
        </div>
      </section>

      <section style={{background: 'var(--background)'}}>
         <div className="container" style={styles.grid}>
            <div>
               <h2 style={{marginBottom: '30px', color: 'var(--primary)'}}>ऑनलाइन बुकिंग प्रक्रिया</h2>
               <p style={{marginBottom: '30px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8'}}>
                  बगलार्पणम् के माध्यम से अपना अनुष्ठान बुक करना अत्यंत सरल है। जैसे ही आप फॉर्म भरते हैं और भुगतान करते हैं, हमारी टीम आपसे तुरंत संपर्क करती है।
               </p>
               
               <div style={{display: 'flex', gap: '20px', marginBottom: '25px'}}>
                  <div style={{width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.5rem'}}>1</div>
                  <div>
                    <h4>विवरण भरें</h4>
                    <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem'}}>अपना नाम, फ़ोन नंबर और अपनी समस्या का प्रकार चुनें।</p>
                  </div>
               </div>
               
               <div style={{display: 'flex', gap: '20px', marginBottom: '25px'}}>
                  <div style={{width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.5rem'}}>2</div>
                  <div>
                    <h4>तिथि का चयन</h4>
                    <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem'}}>अपनी सुविधानुसार दिन चुनें या गुरुजी से बात करें।</p>
                  </div>
               </div>
               
               <div style={{display: 'flex', gap: '20px'}}>
                  <div style={{width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.5rem'}}>3</div>
                  <div>
                    <h4>सुरक्षित भुगतान</h4>
                    <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem'}}>रेजरपे (Razorpay) के माध्यम से सुरक्षित पेमेंट करें।</p>
                  </div>
               </div>

               <div className="glass-card" style={{marginTop: '60px', padding: '40px', border: '1px solid var(--primary-glow)'}}>
                  <h3 style={{marginBottom: '20px'}}>Contact Support</h3>
                  <p>किसी भी सहायता के लिए हमें कॉल करें:</p>
                  <p style={{fontSize: '1.5rem', color: 'var(--primary)', marginTop: '10px'}}>+91-XXXXXXXXXX</p>
               </div>
            </div>
            
            <div>
               <BookingForm />
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section style={{padding: '100px 0', background: 'var(--dark-accent)'}}>
         <div className="container" style={{maxWidth: '800px'}}>
            <h2 style={{textAlign: 'center', marginBottom: '60px'}}>बुकिंग से संबंधित सवाल (FAQs)</h2>
            {[
              { q: 'क्या मैं बुकिंग के बाद तिथि बदल सकता हूँ?', a: 'हाँ, कम से कम 24 घंटे पहले सूचित करने पर हम आपसी परामर्श से नई तिथि तय कर सकते हैं।' },
              { q: 'भुगतान के बाद क्या होता है?', a: 'आपको तुरंत पुष्टि ईमेल/मैसेज मिलेगा और अगले 1 घंटे में गुरुजी का फोन आएगा।' },
              { q: 'क्या मेरी जानकारी गोपनीय रहेगी?', a: 'निश्चित रूप से। आपकी समस्या और अनुष्ठान का विवरण पूर्णतः गोपनीय रखा जाता है।' },
              { q: 'ऑनलाइन पूजा का लिंक कब मिलेगा?', a: 'पूजा शुरू होने से 15 मिनट पहले आपको व्हाट्सएप (Whatsapp) पर वीडियो कॉल का लिंक मिल जाएगा।' }
            ].map((faq, i) => (
              <div key={i} className="glass-card" style={{padding: '25px', marginBottom: '20px'}}>
                 <h4 style={{color: 'var(--primary)', marginBottom: '10px'}}>Q: {faq.q}</h4>
                 <p style={{fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8'}}>A: {faq.a}</p>
              </div>
            ))}
         </div>
      </section>
    </main>
  );
}
