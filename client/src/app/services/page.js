'use client';
import Services from '../../components/Services';

export default function ServicesPage() {
  const styles = {
    hero: {
      padding: '150px 0 100px',
      textAlign: 'center',
      background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/images/havan.png")',
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
    contentSection: {
      padding: '100px 0',
      background: 'var(--background)',
    },
    grid: {
       display: 'grid',
       gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
       gap: '40px',
       marginTop: '50px',
    },
    card: {
       padding: '40px',
       textAlign: 'center',
       border: '1px solid rgba(255, 215, 0, 0.1)',
       transition: 'all 0.3s ease',
    },
    cardIcon: {
       fontSize: '3rem',
       marginBottom: '25px',
       display: 'block',
    },
    cardTitle: {
       marginBottom: '15px',
       fontSize: '1.5rem',
       color: 'var(--primary)',
       textTransform: 'uppercase',
    },
    cardText: {
       fontSize: '0.95rem',
       color: 'rgba(255,255,255,0.7)',
       lineHeight: '1.7',
       marginBottom: '25px',
    }
  };

  const detailedServices = [
    {
      title: 'बगलामुखी शत्रुभय नाशक अनुष्ठान',
      desc: 'माँ बगलामुखी शत्रुओं पर विजय और नकारात्मकता से मुक्ति दिलाती हैं। यह अनुष्ठान आपके विरोधियों के हर प्रयास को विफल करने और आपकी सुरक्षा के लिए किया जाता है।',
      icon: '🏛️',
      price: '₹5100 onwards'
    },
    {
      title: 'सिद्ध बगलामुखी हवन (कोर्ट केस मुक्ति)',
      desc: 'यदि आप लम्बे समय से कोर्ट के मुकदमों या विवादों में फंसे हुए हैं, तो यह सप्रमाण हवन आपके पक्ष में शुभ परिणाम लाने में सहायक होता है।',
      icon: '🔥',
      price: '₹11000 onwards'
    },
    {
       title: 'व्यापार वृद्धि एवं लक्ष्मी प्राप्ति',
       desc: 'व्यवसाय में बाधाओं को दूर करने और आर्थिक समृद्धि प्राप्त करने हेतु विशेष मंत्रों और आहुतियों के साथ यह यज्ञ संपन्न किया जाता है।',
       icon: '💰',
       price: '₹7100 onwards'
    },
    {
       title: 'नजर दोष एवं तंत्र बांधा निवारण',
       desc: 'किसी भी प्रकार की नकारात्मक शक्ति, काला जादू या बुरी नजर के प्रभाव को नष्ट कर जीवन में सकारात्मक ऊर्जा का संचार करने वाला अनुष्ठान।',
       icon: '🧿',
       price: '₹5100 onwards'
    },
    {
       title: 'पीताम्बरा विशेष अनुष्ठान',
       desc: 'पीले वस्त्र, पीली हल्दी और विशेष विधानों के साथ माँ पीताम्बरा की कृपा प्राप्त करने हेतु विशेष तांत्रिक पूजा एवं जप का आयोजन।',
       icon: '✨',
       price: '₹21000 onwards'
    },
    {
       title: 'ऑनलाइन संकल्प एवं लाइव दर्शन',
       desc: 'घर बैठे वीडियो कॉल के माध्यम से अपनी पूजा संपन्न कराएं और लाइव हवन के दर्शन कर पुण्य लाभ प्राप्त करें।',
       icon: '📱',
       price: '₹2100 onwards'
    }
  ];

  return (
    <main>
      <section style={styles.hero}>
        <div className="container">
          <div style={styles.breadcrumb}>नलखेड़ा की पावन धरा | सेवाएँ</div>
          <h1 style={styles.title}>सिद्ध सेवाएँ एवं अनुष्ठान</h1>
          <p style={{maxWidth: '800px', margin: '0 auto', color: 'rgba(255,255,255,0.7)'}}>
            बगलार्पणम् के पंडित जी द्वारा वैदिक रीति और सप्रमाण पूर्ण कराए जाने वाले अनुष्ठानों की श्रृंखला। आपके जीवन की हर समस्या का समाधान अब माँ के आशीर्वाद से।
          </p>
        </div>
      </section>

      <section style={styles.contentSection}>
        <div className="container">
           <h2 style={{textAlign: 'center', marginBottom: '60px'}}>सभी अनुष्ठानों की सूची</h2>
           
           <div style={styles.grid}>
              {detailedServices.map((service, i) => (
                <div key={i} className="glass-card" style={styles.card}>
                   <span style={styles.cardIcon}>{service.icon}</span>
                   <h3 style={styles.cardTitle}>{service.title}</h3>
                   <p style={styles.cardText}>{service.desc}</p>
                   <div style={{color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '20px'}}>{service.price}</div>
                   <a href="#booking" className="btn-premium btn-outline" style={{width: '100%'}}>Book Now</a>
                </div>
              ))}
           </div>
        </div>
      </section>

      <Services /> {/* Existing Services Component */}

      <section style={{padding: '100px 0', background: 'var(--dark-accent)'}}>
        <div className="container" style={{textAlign: 'center'}}>
           <h2>अनुष्ठान की प्रक्रिया (Process)</h2>
           <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '60px'}}>
              {[
                {step: '01', title: 'परामर्श', text: 'अपनी समस्या हेतु गुरुजी से फ़ोन पर बात करें।'},
                {step: '02', title: 'शुभ मुहूर्त', text: 'अनुष्ठान हेतु उचित समय और दिन का चयन।'},
                {step: '03', title: 'नाम-गोत्र संकल्प', text: 'पवित्र नदी के जल से आपके नाम का संकल्प।'},
                {step: '04', title: 'हवन एवं आहुति', text: 'मंत्रोच्चार के साथ पूर्ण विधि से हवन समापन।'}
              ].map((item, i) => (
                <div key={i} className="glass-card" style={{padding: '30px'}}>
                   <div style={{fontSize: '3rem', fontWeight: '900', color: 'rgba(255,215,0,0.1)', marginBottom: '-30px'}}>{item.step}</div>
                   <h4 style={{position: 'relative', zIndex: 1}}>{item.title}</h4>
                   <p style={{marginTop: '15px', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem'}}>{item.text}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </main>
  );
}
