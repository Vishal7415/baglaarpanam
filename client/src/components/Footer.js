'use client';

export default function Footer() {
  const styles = {
    footer: {
      padding: '80px 0 40px',
      background: '#050505',
      borderTop: '1px solid var(--border)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      marginBottom: '60px',
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: '700',
      fontFamily: 'Cinzel',
      color: 'var(--primary)',
      marginBottom: '20px',
    },
    text: {
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: '0.9rem',
      marginBottom: '20px',
      lineHeight: '1.8',
    },
    h4: {
      fontSize: '1.1rem',
      marginBottom: '25px',
      color: '#fff',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    ul: {
      listStyle: 'none',
      padding: 0,
    },
    li: {
      marginBottom: '15px',
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '0.9rem',
    },
    link: {
      transition: 'color 0.3s ease',
      cursor: 'pointer',
    },
    contactInfo: {
      display: 'flex',
      gap: '15px',
      alignItems: 'center',
      marginBottom: '15px',
    },
    copyright: {
      textAlign: 'center',
      paddingTop: '40px',
      borderTop: '1px solid #1a1a1a',
      color: 'rgba(255, 255, 255, 0.4)',
      fontSize: '0.8rem',
    }
  };

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div style={styles.grid}>
          <div style={styles.col}>
            <div style={styles.logo}>BAGLARPANAM</div>
            <p style={styles.text}>
              नलखेड़ा सिद्ध पीठ की पावन धरा से माँ बगलामुखी के चरणों में समर्पित एक सेवा। हम यहाँ पूरी श्रद्धा और वैदिक पद्धति से आपके सभी दुखों के निवारण के लिए पूजा और हवन का आयोजन करते हैं।
            </p>
          </div>
          
          <div style={styles.col}>
            <h4 style={styles.h4}>Quick Links</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><a href="#about" style={styles.link}>About Us</a></li>
              <li style={styles.li}><a href="#services" style={styles.link}>Our Services</a></li>
              <li style={styles.li}><a href="#booking" style={styles.link}>Book Puja</a></li>
              <li style={styles.li}><a href="#gallery" style={styles.link}>Gallery</a></li>
            </ul>
          </div>
          
          <div style={styles.col}>
            <h4 style={styles.h4}>Contact Us</h4>
            <div style={styles.contactInfo}>
              <span style={{color: 'var(--primary)'}}>📍</span>
              <span style={styles.li}>Baglamukhi Mandir Road, Nalkheda, Agar Malwa (MP)</span>
            </div>
            <div style={styles.contactInfo}>
              <span style={{color: 'var(--primary)'}}>📞</span>
              <span style={styles.li}>+91-9424072531, +91-8770098253</span>
            </div>
            <div style={styles.contactInfo}>
              <span style={{color: 'var(--primary)'}}>✉️</span>
              <span style={styles.li}>support@baglarpanam.com</span>
            </div>
          </div>
          
          <div style={styles.col}>
            <h4 style={styles.h4}>Mode of Payment</h4>
            <p style={styles.text}>100% Secure Payment via Razorpay. We accept all UPI, Cards and Netbanking.</p>
            <div style={{display: 'flex', gap: '10px'}}>
              <div style={{padding: '5px 15px', border: '1px solid #333', borderRadius: '4px'}}>UPI</div>
              <div style={{padding: '5px 15px', border: '1px solid #333', borderRadius: '4px'}}>VISA</div>
              <div style={{padding: '5px 15px', border: '1px solid #333', borderRadius: '4px'}}>MASTER</div>
            </div>
          </div>
        </div>
        
        <div style={styles.copyright}>
          © 2024 Baglarpanam. All Rights Reserved. Managed by Nalkheda Sidh Peeth Pujari.
        </div>
      </div>
    </footer>
  );
}
