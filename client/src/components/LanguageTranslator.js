'use client';
import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';

export default function LanguageTranslator() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('hi');
  const menuRef = useRef(null);

  const languages = [
    { name: 'हिंदी (Hindi)', code: 'hi', icon: '🇮🇳' },
    { name: 'English', code: 'en', icon: '🇺🇸' },
    { name: 'मराठी (Marathi)', code: 'mr', icon: '🚩' },
    { name: 'ગુજરાતી (Gujarati)', code: 'gu', icon: '💎' },
    { name: 'தமிழ் (Tamil)', code: 'ta', icon: '🛕' },
    { name: 'తెలుగు (Telugu)', code: 'te', icon: '🏯' },
    { name: 'ಕನ್ನಡ (Kannada)', code: 'kn', icon: '🌿' }
  ];

  useEffect(() => {
    // Check if a language is already set in cookies
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const transCookie = getCookie('googtrans');
    if (transCookie) {
      const lang = transCookie.split('/').pop();
      if (lang) setCurrentLang(lang);
    }

    // Click outside logic
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (langCode) => {
    setIsOpen(false);
    
    // Set Google Translate Cookie
    // Format: /auto/[lang] or /hi/[lang]
    const cookieValue = `/hi/${langCode}`;
    
    // Set for current path and root
    document.cookie = `googtrans=${cookieValue}; path=/`;
    
    // Also set for mobile/subdomains if any
    const domain = window.location.hostname;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=${domain}`;
    
    // Final force reload to apply translation
    window.location.reload();
  };

  const styles = {
    wrapper: { position: 'relative', display: 'flex', alignItems: 'center' },
    trigger: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(255, 215, 0, 0.1)',
        padding: '8px 16px',
        borderRadius: '30px',
        border: '1px solid var(--primary-glow)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        userSelect: 'none',
        boxShadow: isOpen ? '0 0 15px rgba(255, 215, 0, 0.3)' : 'none',
    },
    triggerText: {
        fontSize: '0.85rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: 'var(--primary)',
    },
    dropdown: {
        position: 'absolute',
        top: '50px',
        right: '0',
        width: '220px',
        background: '#0d0d0d',
        border: '1px solid rgba(255, 215, 0, 0.3)',
        borderRadius: '15px',
        overflow: 'hidden',
        zIndex: 10000,
        boxShadow: '0 15px 40px rgba(0,0,0,0.8)',
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
        pointerEvents: isOpen ? 'all' : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    langItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 20px',
        color: '#fff',
        fontSize: '0.9rem',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    },
    hiddenWidget: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '0',
        height: '0',
        overflow: 'hidden',
        visibility: 'hidden',
        opacity: '0',
        pointerEvents: 'none',
    }
  };

  return (
    <div style={styles.wrapper} ref={menuRef}>
      <div 
        style={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={(e) => { if(!isOpen) e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)'; }}
        onMouseLeave={(e) => { if(!isOpen) e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)'; }}
      >
        <span style={{fontSize: '1.1rem'}}>🌐</span>
        <span style={styles.triggerText}>भाषा / Language</span>
      </div>

      <div style={styles.dropdown}>
        <div style={{padding: '10px 20px', fontSize: '0.7rem', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', background: 'rgba(255, 215, 0, 0.05)'}}>
            Select Language
        </div>
        {languages.map((lang) => (
          <div 
            key={lang.code}
            style={{
                ...styles.langItem,
                background: currentLang === lang.code ? 'rgba(255, 215, 0, 0.15)' : 'transparent',
                color: currentLang === lang.code ? 'var(--primary)' : '#fff',
            }}
            onClick={() => changeLanguage(lang.code)}
          >
            <span>{lang.icon}</span>
            <span style={{flex: 1}}>{lang.name}</span>
            {currentLang === lang.code && <span style={{fontSize: '0.8rem'}}>✓</span>}
          </div>
        ))}
      </div>

      <style>{`
        .goog-te-banner-frame.skiptranslate { display: none !important; }
        body { top: 0px !important; }
        @media (max-width: 768px) {
            [style*="width: '220px'"] { right: -50px !important; width: 200px !important; }
        }
      `}</style>
    </div>
  );
}


