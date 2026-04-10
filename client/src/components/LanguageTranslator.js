'use client';
import { useState } from 'react';

export default function LanguageTranslator() {
  const [showWidget, setShowWidget] = useState(false);

  const styles = {
    wrapper: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: 'rgba(255, 215, 0, 0.1)',
        padding: '5px 12px',
        borderRadius: '20px',
        border: '1px solid var(--primary-glow)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        userSelect: 'none',
    },
    icon: {
        fontSize: '1rem',
    },
    text: {
        fontSize: '0.8rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: 'var(--primary)',
    },
    widgetWrapper: {
        position: 'absolute',
        top: '45px',
        right: '0',
        zIndex: 10000,
        display: showWidget ? 'block' : 'none',
        background: '#0d0d0d',
        padding: '10px',
        borderRadius: '10px',
        border: '1px solid var(--primary)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* Custom Trigger */}
      <div 
        style={styles.container}
        onClick={() => setShowWidget(!showWidget)}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)'}
      >
        <span style={styles.icon}>🌐</span>
        <span style={styles.text}>{showWidget ? 'Close' : 'Translate'}</span>
      </div>

      {/* Container for Google Translate Widget */}
      <div style={styles.widgetWrapper}>
        <div id="google_translate_element"></div>
      </div>

      <style>{`
        /* Style the actual Google Translate Widget */
        .goog-te-banner-frame.skiptranslate { display: none !important; }
        body { top: 0px !important; }
        
        .goog-te-gadget-simple {
            background: #1a1a1a !important;
            border: 1px solid #333 !important;
            padding: 8px !important;
            border-radius: 6px !important;
            color: #fff !important;
            cursor: pointer !important;
            width: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
        }
        .goog-te-gadget-simple img { display: none !important; }
        .goog-te-menu-value {
            display: flex !important;
            align-items: center !important;
            width: 100% !important;
            justify-content: space-between !important;
            margin: 0 !important;
        }
        .goog-te-menu-value span { 
            color: var(--primary) !important; 
            font-size: 0.9rem !important; 
            font-family: inherit !important;
        }
        .goog-te-menu-value span:nth-child(3) { display: none !important; } /* hide the divider */
        .goog-te-menu-value span:nth-child(5) { display: none !important; } /* hide the arrow icon */
        
        /* Hide Google attribution */
        .goog-te-gadget span { display: none !important; }
        .goog-te-gadget { color: transparent !important; font-size: 0 !important; }
      `}</style>
    </div>
  );
}
