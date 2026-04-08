'use client';
import About from '../../components/About';
import Founder from '../../components/Founder';

export default function AboutPage() {
  const styles = {
    hero: {
      padding: '150px 0 100px',
      textAlign: 'center',
      background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/images/hero.png")',
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
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'center',
      marginTop: '60px',
    }
  };

  return (
    <main>
      <section style={styles.hero}>
        <div className="container">
          <div style={styles.breadcrumb}>नलखेड़ा सिद्ध पीठ | परिचय</div>
          <h1 style={styles.title}>हमारे बारे में</h1>
          <p style={{maxWidth: '800px', margin: '0 auto', color: 'rgba(255,255,255,0.7)'}}>
            बगलार्पणम् पिछले 15 वर्षों से माँ बगलामुखी के चरणों में समर्पित एक सेवा है, जो भक्तों को उनकी समस्याओं से मुक्ति दिलाने हेतु प्राचीन वैदिक पद्धतियों से पूजा-अर्चना संपन्न करती है।
          </p>
        </div>
      </section>

      <About />
      
      <Founder />

      <section style={styles.contentSection}>
        <div className="container">
          <div style={styles.grid}>
            <div>
              <h2 style={{marginBottom: '30px', color: 'var(--primary)'}}>हमारा मिशन (Our Mission)</h2>
              <p style={{marginBottom: '20px', fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)'}}>
                हमारा उद्देश्य है कि संसार का कोई भी व्यक्ति जो माँ बगलामुखी की शरण में आना चाहता है, वह चाहे दुनिया के किसी भी कोने में हो, उसे माँ की कृपा और आशीर्वाद प्राप्त हो सके। 
              </p>
              <p style={{fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)'}}>
                हम नलखेड़ा सिद्ध पीठ की पवित्र ऊर्जा को आपके घर और जीवन तक पहुँचाने के लिए प्रतिबद्ध हैं। हमारे द्वारा की जाने वाली प्रत्येक पूजा पूर्णतः शास्त्रीय विधि और गोत्र-नाम के संकल्प के साथ की जाती है।
              </p>
            </div>
            <div className="glass-card" style={{padding: '40px', border: '1px solid var(--primary-glow)'}}>
              <h3 style={{marginBottom: '20px', textAlign: 'center'}}>क्यों जुड़ें हमसे?</h3>
              <ul style={{listStyle: 'none', padding: 0}}>
                {[
                  '15+ वर्षों का अनुभव और विश्वास',
                  'प्राचीन सिद्ध पीठ नलखेड़ा से सीधी सेवा',
                  'हर पूजा का वीडियो और प्रमाण उपलब्ध',
                  'गोपनीयता और पूर्ण पवित्रता का ध्यान',
                  'विशेषज्ञ पंडितों द्वारा मंत्रोच्चार'
                ].map((item, i) => (
                  <li key={i} style={{marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'center'}}>
                    <span style={{color: 'var(--primary)'}}>✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding: '100px 0', background: 'var(--dark-accent)'}}>
        <div className="container" style={{textAlign: 'center'}}>
           <h2 style={{marginBottom: '50px'}}>माँ बगलामुखी मंदिर, नलखेड़ा</h2>
           <p style={{maxWidth: '900px', margin: '0 auto 40px', lineHeight: '1.8', fontSize: '1.1rem'}}>
             मध्य प्रदेश के आगर मालवा जिले के नलखेड़ा में लखुंदर नदी के किनारे स्थित भगवान श्री बगलामुखी मंदिर एक अत्यंत जागृत सिद्ध पीठ है। यहाँ विराजित माँ बगलामुखी की प्रतिमा स्वयंभू मानी जाती है। पांडव काल से लेकर आज तक यहाँ की महिमा और शक्ति अटूट है। बगलार्पणम् इसी पवित्र भूमि से संचालित होता है।
           </p>
           <div className="glass-card" style={{height: '400px', overflow: 'hidden'}}>
              <img src="/images/hero.png" alt="Temple" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
           </div>
        </div>
      </section>
    </main>
  );
}
