'use client';

export default function WhatsappButton() {
  const styles = {
    whatsapp: {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      background: '#25D366',
      color: '#fff',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '2.5rem',
      cursor: 'pointer',
      boxShadow: '0 5px 20px rgba(0,0,0,0.5)',
      zIndex: 1000,
      transition: 'transform 0.3s ease',
    },
    pulse: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: '#25D366',
      borderRadius: '50%',
      animation: 'pulse 2s infinite',
      zIndex: -1,
    }
  };

  return (
    <>
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
      <a 
        href="https://wa.me/919424072531?text=नमस्ते, मुझे बगलामुखी पूजा के बारे में जानकारी चाहिए।" 
        style={styles.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <span style={styles.pulse}></span>
        📲
      </a>
    </>
  );
}
