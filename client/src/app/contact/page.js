'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('Message Sent! We will contact you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      setStatus('Error connecting to server.');
    }
  };

  const styles = {
    section: { padding: '160px 0 100px', minHeight: '80vh', background: 'var(--background)' },
    title: { fontSize: '3rem', marginBottom: '40px', textAlign: 'center' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' },
    contactCard: { padding: '40px', textAlign: 'center' },
    icon: { fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '20px' }
  };

  return (
    <main>
      <section style={styles.section}>
        <div className="container">
          <h1 style={styles.title}>हमसे संपर्क करें (Contact Us)</h1>
          <p style={{textAlign: 'center', color: 'rgba(255,255,255,0.6)', marginBottom: '60px', maxWidth: '700px', margin: '0 auto 60px'}}>
            नलखेड़ा सिद्ध पीठ माँ बगलामुखी के दर्शन, पूजा या अनुष्ठान के बारे में अधिक जानकारी के लिए सीधे संपर्क करें।
          </p>
          
          <div style={styles.grid}>
             <div className="glass-card" style={styles.contactCard}>
                <div style={styles.icon}>📍</div>
                <h3>मुख्य केंद्र (Location)</h3>
                <p>Baglamukhi Mandir Road, Nalkheda, Agar Malwa, Madhya Pradesh 465445</p>
             </div>
             <div className="glass-card" style={styles.contactCard}>
                <div style={styles.icon}>📞</div>
                <h3>फ़ोन (Phone)</h3>
                <p>+91-9424072531<br />+91-8770098253</p>
             </div>
             <div className="glass-card" style={styles.contactCard}>
                <div style={styles.icon}>✉️</div>
                <h3>ईमेल (Email)</h3>
                <p>official.baglarpanam@gmail.com</p>
             </div>
          </div>

          <div className="glass-card" style={{padding: '50px', marginTop: '60px', maxWidth: '800px', margin: '60px auto'}}>
             <h3 style={{marginBottom: '30px', textAlign: 'center'}}>Inquiry Message</h3>
             <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <input 
                  placeholder="Name" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  style={{padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', color: '#fff'}} 
                />
                <input 
                  type="email"
                  required
                  placeholder="Email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  style={{padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', color: '#fff'}} 
                />
                <textarea 
                  required
                  placeholder="Message" 
                  rows="5" 
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  style={{padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', color: '#fff'}}
                ></textarea>
                <button className="btn-premium btn-gold" type="submit">Send Inquiry</button>
                {status && <p style={{textAlign: 'center', color: 'var(--primary)'}}>{status}</p>}
             </form>
          </div>
        </div>
      </section>
    </main>
  );
}
