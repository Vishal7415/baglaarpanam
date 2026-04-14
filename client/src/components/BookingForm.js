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

  const handlePayment = async () => {
    // This function would call your backend to create an order
    // For now, we simulate the Razorpay popup
    const options = {
      key: "YOUR_RAZORPAY_KEY", 
      amount: 510000, // 5100 in paise
      currency: "INR",
      name: "Baglarpanam",
      description: "Puja Advance Payment",
      handler: function (response) {
        alert("Payment Successful! Transaction ID: " + response.razorpay_payment_id);
        setSuccess(true);
      },
      prefill: {
        name: formData.name,
        contact: formData.phone
      },
      theme: {
        color: "#ffd700"
      }
    };
    
    if (window.Razorpay) {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      alert("Razorpay SDK not loaded. Proceeding with manual entry.");
      setSuccess(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating API call to save booking
    setTimeout(() => {
      setLoading(false);
      // Removed handlePayment() - bypassing Razorpay for free inquiry model
      setSuccess(true);
    }, 1000);
  };

  const styles = {
    section: {
      background: 'var(--dark-accent)',
      position: 'relative',
    },
    title: {
      textAlign: 'center',
      marginBottom: '50px',
      fontSize: '2.5rem',
    },
    formContainer: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '50px',
      borderRadius: '20px',
      border: '1px solid var(--border)',
      background: 'rgba(13, 13, 13, 0.8)',
      backdropFilter: 'blur(10px)',
    },
    formGroup: {
      marginBottom: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    label: {
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      color: 'var(--primary)',
      fontWeight: '600',
    },
    input: {
      padding: '15px',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      color: '#fff',
      outline: 'none',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
    },
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
                  type="text" 
                  placeholder="अपना पूरा नाम लिखें" 
                  style={styles.input} 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="अपना सक्रिय फ़ोन नंबर लिखें" 
                  style={styles.input} 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Select Problem</label>
                <select 
                  style={styles.input} 
                  required 
                  value={formData.problem}
                  onChange={(e) => setFormData({...formData, problem: e.target.value})}
                >
                  <option disabled>Select Problem</option>
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
                  type="date" 
                  style={styles.input} 
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Mode of Puja</label>
                <div style={{display: 'flex', gap: '20px', marginTop: '10px'}}>
                  <label style={{display: 'flex', gap: '8px', cursor: 'pointer'}}>
                    <input 
                      type="radio" 
                      name="mode" 
                      value="online" 
                      checked={formData.mode === 'online'} 
                      onChange={() => setFormData({...formData, mode: 'online'})}
                    /> Online
                  </label>
                  <label style={{display: 'flex', gap: '8px', cursor: 'pointer'}}>
                    <input 
                      type="radio" 
                      name="mode" 
                      value="offline" 
                      checked={formData.mode === 'offline'} 
                      onChange={() => setFormData({...formData, mode: 'offline'})}
                    /> Offline (At Temple)
                  </label>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="btn-premium btn-gold" 
                style={{width: '100%', marginTop: '30px'}}
                disabled={loading}
              >
                {loading ? 'Submitting Your Request...' : 'Book Now'}
              </button>
              <p style={{textAlign: 'center', fontSize: '0.7rem', marginTop: '15px', color: 'rgba(255,255,255,0.4)'}}>
                Your data is secure. 100% Confirmation.
              </p>
            </form>
          ) : (
            <div style={{textAlign: 'center', padding: '40px 0'}}>
              <h3 style={{color: 'var(--primary)', marginBottom: '20px'}}>Booking Request Successful!</h3>
              <p>Your details have been recorded. Our team will contact you shortly.</p>
              <button 
                className="btn-premium btn-outline" 
                style={{marginTop: '30px'}}
                onClick={() => setSuccess(false)}
              >
                Book Another Puja
              </button>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
            [style*="padding: '50px'"],
            [style*="padding: 50px"] {
                padding: 25px !important;
            }
            [style*="maxWidth: '600px'"] {
                padding: 20px !important;
            }
        }
      `}</style>
    </section>
  );
}
