'use client';
import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [bookings, setBookings] = useState([
    { _id: '1', name: 'Ramesh Kumar', phone: '9876543210', problem: 'Court Case', status: 'pending', date: '2024-04-10' },
    { _id: '2', name: 'Suresh Patil', phone: '8877665544', problem: 'Business', status: 'confirmed', date: '2024-04-12' }
  ]);
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect Password');
    }
  };

  const styles = {
    container: {
      padding: '100px 5%',
      minHeight: '100vh',
      background: 'var(--background)'
    },
    title: { textAlign: 'center', marginBottom: '50px' },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '30px',
    },
    th: {
      textAlign: 'left',
      padding: '15px',
      borderBottom: '1px solid var(--primary)',
      color: 'var(--primary)',
      textTransform: 'uppercase',
      fontSize: '0.8rem'
    },
    td: {
      padding: '15px',
      borderBottom: '1px solid var(--border)'
    },
    statusBadge: {
      padding: '5px 12px',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{...styles.container, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className="glass-card" style={{padding: '50px', width: '400px'}}>
           <h2 style={{textAlign: 'center', marginBottom: '30px'}}>Admin Login</h2>
           <form onSubmit={handleLogin}>
              <input 
                type="password" 
                placeholder="Admin Password" 
                style={{width: '100%', padding: '15px', background: '#000', border: '1px solid var(--border)', borderRadius: '8px', color: '#fff', marginBottom: '20px'}}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="btn-premium btn-gold" style={{width: '100%'}}>Login</button>
           </form>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Admin Dashboard</h2>
      
      <div className="glass-card" style={{padding: '40px'}}>
        <h3 style={{marginBottom: '20px'}}>Active Bookings</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Phone</th>
              <th style={styles.th}>Problem</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td style={styles.td}>{booking.name}</td>
                <td style={styles.td}>{booking.phone}</td>
                <td style={styles.td}>{booking.problem}</td>
                <td style={styles.td}>{booking.date}</td>
                <td style={styles.td}>
                   <span style={{
                     ...styles.statusBadge, 
                     background: booking.status === 'confirmed' ? '#2ecc71' : '#f1c40f',
                     color: '#000'
                   }}>
                     {booking.status}
                   </span>
                </td>
                <td style={styles.td}>
                   <button style={{color: 'var(--primary)', marginRight: '10px'}}>✔️ Confirm</button>
                   <button style={{color: '#e74c3c'}}>❌ Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
