'use client';
import Link from 'next/link';

export default function About() {
  const styles = {
    section: {
      padding: '100px 0',
      background: 'var(--dark-accent)',
      position: 'relative',
      overflow: 'hidden',
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '60px',
      alignItems: 'center',
    },
    imageContainer: {
      position: 'relative',
      borderRadius: '20px',
      overflow: 'hidden',
      border: '1px solid var(--primary)',
      aspectRatio: '1/1',
      boxShadow: '0 0 30px var(--primary-glow)',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '30px',
      lineHeight: '1.2',
    },
    text: {
      color: 'rgba(255, 255, 255, 0.7)',
      marginBottom: '20px',
      fontSize: '1.1rem',
    },
    featureList: {
      marginTop: '40px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
    },
    feature: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '0.9rem',
      fontWeight: '600',
    }
  };

  return (
    <section id="about" style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.imageContainer}>
          <img src="/images/hero.png" alt="Baglamukhi Mandir Nalkheda" style={styles.image} />
        </div>
        
        <div className="fade-in">
          <h2 style={styles.title}>माँ बगलामुखी की सिद्ध शक्ति और हमारा 15+ वर्षों का अनुभव</h2>
          <p style={styles.text}>
            नलखेड़ा (मध्य प्रदेश) स्थित प्राचीन श्री बगलामुखी मंदिर विश्व के सबसे प्रसिद्ध सिद्ध पीठों में से एक है। यहाँ की गई पूजा सीधे माँ बगलामुखी तक पहुँचती है।
          </p>
          <p style={styles.text}>
            <strong>बगलार्पणम्</strong> एक समर्पित तंत्र एवं पूजा विशेषज्ञ ब्रांड है जिसे <strong>आचार्य योगेश</strong> द्वारा स्थापित किया गया है। पिछले 15 वर्षों से हम शत्रुओं पर विजय, कोर्ट केस, व्यापारिक बाधाओं और नकारात्मक शक्तियों से मुक्ति के लिए सिद्ध अनुष्ठान आयोजित कर रहे हैं।
          </p>
          
          <Link href="/about" className="btn-premium btn-outline" style={{marginTop: '20px', fontSize: '0.8rem'}}>हमारे बारे में और जानें →</Link>
          
          <div style={styles.featureList}>
            <div style={styles.feature}>
              <span style={{color: 'var(--primary)', fontSize: '1.5rem'}}>✓</span>
              प्रमाणित वैदिक रीति
            </div>
            <div style={styles.feature}>
              <span style={{color: 'var(--primary)', fontSize: '1.5rem'}}>✓</span>
              हवन एवं मंत्र जाप
            </div>
            <div style={styles.feature}>
              <span style={{color: 'var(--primary)', fontSize: '1.5rem'}}>✓</span>
              गोपनीय अनुष्ठान
            </div>
            <div style={styles.feature}>
              <span style={{color: 'var(--primary)', fontSize: '1.5rem'}}>✓</span>
              ऑनलाइन पूजा सुविधा
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
