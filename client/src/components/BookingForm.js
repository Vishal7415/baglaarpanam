'use client';
import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    problem: 'Select Problem',
    date: '',
    mode: 'offline'
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', phone: '', problem: 'Select Problem', date: '', mode: 'offline' });
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to submit booking.');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    section: { background: 'var(--dark-accent)', position: 'relative' },
    title: { textAlign: 'center', marginBottom: '50px', fontSize: '2.5rem' },
    formContainer: {
      maxWidth: '600px', margin: '0 auto', padding: '50px', borderRadius: '20px',
      border: '1px solid var(--border)', background: 'rgba(13, 13, 13, 0.8)', backdropFilter: 'blur(10px)'
    },
    formGroup: { marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' },
    label: { fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: '600' },
    input: {
      padding: '15px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border)',
      borderRadius: '8px', color: '#fff', outline: 'none', fontSize: '1rem'
    }
  };

  return (
    <section id="booking" style={styles.section}>
      <div className="container">
        <h2 style={styles.title}>बुक करें अपना अनुष्ठान</h2>
        
        <div style={styles.formContainer}>
          {!success ? (
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name</label>
                <input 
                  type="text" placeholder="अपना पूरा नाम लिखें" style={styles.input} required 
                  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Phone Number</label>
                <input 
                  type="tel" placeholder="अपना सक्रिय फ़ोन नंबर लिखें" style={styles.input} required 
                  value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Select Problem</label>
                <select 
                  style={styles.input} required value={formData.problem}
                  onChange={(e) => setFormData({...formData, problem: e.target.value})}
                >
                  <option disabled value="Select Problem">Select Problem</option>
                  <option>Court Case / कानूनी बाधा</option>
                  <option>Business / व्यापारिक घाटा</option>
                  <option>Protection / सुरक्षा अनुष्ठान</option>
                  <option>Debt Relief / कर्ज मुक्ति</option>
                  <option>Black Magic Removal / नजर दोष</option>
                </select>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Preferred Date</label>
                <input 
                  type="date" style={styles.input} required
                  value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Mode of Puja</label>
                <div style={{display: 'flex', gap: '20px', marginTop: '10px'}}>
                  <label style={{display: 'flex', gap: '8px', cursor: 'pointer'}}>
                    <input 
                      type="radio" name="mode" value="online" checked={formData.mode === 'online'} 
                      onChange={() => setFormData({...formData, mode: 'online'})}
                    /> Online
                  </label>
                  <label style={{display: 'flex', gap: '8px', cursor: 'pointer'}}>
                    <input 
                      type="radio" name="mode" value="offline" checked={formData.mode === 'offline'} 
                      onChange={() => setFormData({...formData, mode: 'offline'})}
                    /> Offline
                  </label>
                </div>
              </div>
              
              <button 
                type="submit" className="btn-premium btn-gold" style={{width: '100%', marginTop: '30px'}}
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Book Now'}
              </button>
              {error && <p style={{color: '#e74c3c', textAlign: 'center', marginTop: '10px'}}>{error}</p>}
            </form>
          ) : (
            <div style={{textAlign: 'center', padding: '40px 0'}}>
              <h3 style={{color: 'var(--primary)', marginBottom: '20px'}}>Booking Successful!</h3>
              <p>Our team will contact you shortly.</p>
              <button 
                className="btn-premium btn-outline" style={{marginTop: '30px'}}
                onClick={() => setSuccess(false)}
              >Book Another Puja</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
