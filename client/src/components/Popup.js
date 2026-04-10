'use client';
import { useState, useEffect } from 'react';

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000); // Show popup after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenPopup', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('आपका विवरण सुरक्षित है। गुरुजी जल्द ही आपसे संपर्क करेंगे।');
    handleClose();
  };

  if (!isOpen) return null;

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(8px)',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    },
    popup: {
      background: '#0d0d0d',
      border: '2px solid var(--primary)',
      borderRadius: '20px',
      maxWidth: '500px',
      width: '100%',
      padding: '40px',
      position: 'relative',
      boxShadow: '0 0 50px rgba(255, 215, 0, 0.3)',
      animation: 'popupFadeIn 0.5s ease-out',
    },
    closeBtn: {
      position: 'absolute',
      top: '15px',
      right: '20px',
      fontSize: '1.5rem',
      color: 'var(--primary)',
      cursor: 'pointer',
      fontWeight: 'bold',
      background: 'none',
      border: 'none',
    },
    title: {
      textAlign: 'center',
      color: 'var(--primary)',
      fontSize: '1.8rem',
      marginBottom: '10px',
      fontFamily: "'Rozha One', serif",
    },
    subTitle: {
      textAlign: 'center',
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '0.9rem',
      marginBottom: '30px',
    },
    input: {
      width: '100%',
      padding: '15px',
      marginBottom: '15px',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid #333',
      borderRadius: '8px',
      color: '#fff',
      outline: 'none',
    },
    btn: {
      width: '100%',
      marginTop: '10px',
    },
    badge: {
      display: 'block',
      textAlign: 'center',
      background: 'var(--primary)',
      color: '#000',
      width: 'fit-content',
      margin: '0 auto 20px',
      padding: '5px 15px',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <button style={styles.closeBtn} onClick={handleClose}>×</button>
        
        <span style={styles.badge}>Special Service</span>
        <h2 style={styles.title}>ब्रह्म पूजा हेतु संपर्क करें</h2>
        <p style={styles.subTitle}>माँ बगलामुखी के चरणों में पूर्ण विधि-विधान से ब्रह्म अनुष्ठान एवं हवन।</p>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="अपना नाम लिखें" 
            required 
            style={styles.input} 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="tel" 
            placeholder="फ़ोन नंबर" 
            required 
            style={styles.input}
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <textarea 
            placeholder="अपनी समस्या या पूजा का प्रकार लिखें" 
            required 
            style={{...styles.input, height: '100px', resize: 'none'}}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
          
          <button type="submit" className="btn-premium btn-gold" style={styles.btn}>हमें सूचित करें (Notify Us)</button>
        </form>
        
        <p style={{textAlign: 'center', marginTop: '20px', color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.75rem'}}>
          100% गोपनीय एवं शास्त्रोक्त अनुष्ठान।
        </p>
      </div>
      
      <style>{`
        @keyframes popupFadeIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
