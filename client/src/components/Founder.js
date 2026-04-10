import { useState, useEffect } from 'react';

export default function Founder() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    '/images/founder/IMG-20241111-WA0084.jpg',
    '/images/founder/IMG-20241111-WA0092.jpg',
    '/images/founder/IMG-20241111-WA0093.jpg',
    '/images/founder/IMG-20241111-WA0097.jpg',
    '/images/founder/IMG-20241111-WA0101.jpg',
    '/images/founder/IMG-20241111-WA0102.jpg',
    '/images/founder/IMG-20241111-WA0104.jpg',
    '/images/founder/IMG-20241111-WA0105.jpg',
    '/images/founder/IMG-20241111-WA0107.jpg',
    '/images/founder/IMG-20241111-WA0108.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const styles = {
    section: {
      padding: '100px 0',
      background: 'var(--background)',
      position: 'relative',
      overflow: 'hidden',
    },
    imageWrapper: {
      position: 'relative',
      borderRadius: '30px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 20px var(--primary-glow)',
      border: '1px solid var(--border)',
      aspectRatio: '1/1',
      background: '#0a0a0a',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'sepia(20%) contrast(110%)',
      transition: 'opacity 1s ease-in-out',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    overlay: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      padding: '40px',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
      textAlign: 'center',
      zIndex: 2,
    },
    dots: {
      display: 'flex',
      gap: '8px',
      justifyContent: 'center',
      marginTop: '15px',
    },
    dot: (isActive) => ({
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: isActive ? 'var(--primary)' : 'rgba(255,255,255,0.3)',
      transition: 'all 0.3s ease',
    }),
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    badge: {
      color: 'var(--primary)',
      fontSize: '0.9rem',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      fontWeight: '600',
    },
    name: {
      fontSize: '3.5rem',
      margin: '10px 0',
      fontFamily: "'Rozha One', serif",
      lineHeight: '1.1',
    },
    description: {
      fontSize: '1.2rem',
      color: 'rgba(255,255,255,0.9)',
      lineHeight: '1.8',
    },
    subText: {
      fontSize: '1.1rem',
      color: 'rgba(255,255,255,0.7)',
      lineHeight: '1.6',
    },
    stats: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginTop: '30px',
    },
    statItem: {
      padding: '20px',
      background: 'rgba(255,215,0,0.05)',
      border: '1px solid var(--primary-glow)',
      borderRadius: '12px',
    },
    statTitle: {
      color: 'var(--primary)',
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      marginBottom: '5px',
    },
    statValue: {
      fontSize: '1.1rem',
      fontWeight: '600',
    }
  };

  return (
    <section style={styles.section} id="founder">
      <div className="container">
        <div className="grid-founder">
          <div style={styles.imageWrapper} className="fade-in">
            {images.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`Aacharya Yogesh ${idx + 1}`} 
                style={{
                  ...styles.image,
                  opacity: currentImage === idx ? 1 : 0,
                }}
              />
            ))}
            
            <div style={styles.overlay}>
              <h3 style={{color: '#fff', fontSize: '1.5rem', margin: 0}}>आचार्य योगेश</h3>
              <p style={{color: 'var(--primary)', margin: '5px 0 0'}}>संस्थापक - बगलार्पणम् ट्रस्ट</p>
              <div style={styles.dots}>
                {images.map((_, idx) => (
                  <div key={idx} style={styles.dot(currentImage === idx)} />
                ))}
              </div>
            </div>
          </div>

          <div style={styles.content} className="fade-in">
            <div style={styles.badge}>हमारे आध्यात्मिक मार्गदर्शक</div>
            <h2 style={styles.name}>आचार्य योगेश</h2>
            <p style={styles.description}>
              "सेवा दिव्य शक्ति के प्रति प्रेम का शुद्धतम रूप है।"
            </p>
            <p style={styles.subText}>
              आचार्य योगेश भारत के एक प्रख्यात आध्यात्मिक गुरु हैं, जिनका भक्ति के प्रति दृष्टिकोण अत्यंत नवीन और गहरा है। 
              नलखेड़ा और उज्जैन की पावन भूमि में शिक्षा प्राप्त करने के बाद, आचार्य जी ने अपना जीवन सिद्ध तंत्र साधना 
              के माध्यम से सनातन धर्म के शाश्वत ज्ञान को साझा करने के लिए समर्पित कर दिया है।
            </p>
            <p style={styles.subText}>
              बचपन से ही <em>शारदा तिलक तंत्रम</em> और <em>दश महाविद्या रहस्य</em> जैसे प्राचीन शास्त्रों के प्रगाढ़ अध्येता 
              रहे आचार्य जी, 2010 से 'भक्ति योग' पर आध्यात्मिक प्रवचन दे रहे हैं। उनका जीवन एक निरंतर <em>यज्ञ</em> है—एक 
              निस्वार्थ अर्पण जो ज्ञान, भक्ति और कर्म का सुंदर संगम है।
            </p>

            <div style={styles.stats}>
              <div style={styles.statItem}>
                <div style={styles.statTitle}>आध्यात्मिक आधार</div>
                <div style={styles.statValue}>संस्कृत स्नातक, उज्जैन</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statTitle}>विशेषज्ञता</div>
                <div style={styles.statValue}>तंत्र साधना एवं प्राचीन कलाएं</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statTitle}>विरासत</div>
                <div style={styles.statValue}>संस्थापक, बगलार्पणम् ट्रस्ट</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statTitle}>संकल्प</div>
                <div style={styles.statValue}>विश्व शांति एवं आध्यात्मिक जागृति</div>
              </div>
            </div>

            <div style={{marginTop: '30px'}}>
              <h4 style={{color: 'var(--primary)', marginBottom: '15px'}}>ज्ञान का पुंज</h4>
              <p style={styles.subText}>
                अपनी असाधारण विनम्रता और जटिल आध्यात्मिक सत्यों को सरल शब्दों में समझाने की अनूठी क्षमता के लिए 
                पहचाने जाने वाले आचार्य जी का सकारात्मक आभा मंडल उनके संपर्क में आने वालों को शांति प्रदान करता है। 
                उनका गहरा धैर्य और युवा पीढ़ी से जुड़ने की क्षमता उन्हें आधुनिक युग के लिए एक मार्गदर्शक प्रकाश बनाती है।
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 991px) {
            h2 { font-size: 2.8rem !important; }
        }
        @media (max-width: 768px) {
            h2 { font-size: 2.2rem !important; text-align: center; }
            .badge { text-align: center; }
            .fade-in { text-align: center; }
            [style*="gridTemplateColumns: '1fr 1fr'"] {
                grid-template-columns: 1fr !important;
            }
        }
      `}</style>
    </section>
  );
}
