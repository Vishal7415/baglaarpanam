'use client';
import { useState, useEffect } from 'react';

const ADMIN_API = 'http://localhost:5001/api/admin';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [stats, setStats] = useState({ totalBookings: 0, confirmedBookings: 0, totalRevenue: 0, newInquiries: 0 });
  const [bookings, setBookings] = useState([]);
  const [services, setServices] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');

  // Service Form
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [serviceForm, setServiceForm] = useState({ title: '', description: '', price: '', order: 0 });

  useEffect(() => {
    const savedToken = localStorage.getItem('adminToken');
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
      fetchAll(savedToken);
    }
  }, []);

  const fetchAll = async (authToken) => {
    setLoading(true);
    try {
      const headers = { 'Authorization': authToken };
      
      const [sRes, bRes, serRes, inqRes] = await Promise.all([
        fetch(`${ADMIN_API}/stats`, { headers }),
        fetch(`${ADMIN_API}/bookings`, { headers }),
        fetch(`${ADMIN_API}/services`, { headers }),
        fetch(`${ADMIN_API}/inquiries`, { headers })
      ]);

      if (sRes.ok) setStats(await sRes.json());
      if (bRes.ok) setBookings(await bRes.json());
      if (serRes.ok) setServices(await serRes.json());
      if (inqRes.ok) setInquiries(await inqRes.json());
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${ADMIN_API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('adminToken', data.token);
        setToken(data.token);
        setIsAuthenticated(true);
        fetchAll(data.token);
      } else alert(data.error);
    } catch (err) { alert('Admin server not reachable.'); }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
  };

  // Actions
  const patchBooking = async (id, data) => {
    await fetch(`${ADMIN_API}/bookings/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'Authorization': token },
      body: JSON.stringify(data)
    });
    fetchAll(token);
  };

  const deleteItem = async (type, id) => {
    if (!confirm('Are you sure?')) return;
    await fetch(`${ADMIN_API}/${type}/${id}`, { method: 'DELETE', headers: { 'Authorization': token } });
    fetchAll(token);
  };

  const submitService = async (e) => {
    e.preventDefault();
    const method = editingService ? 'PUT' : 'POST';
    const url = editingService ? `${ADMIN_API}/services/${editingService._id}` : `${ADMIN_API}/services`;
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', 'Authorization': token },
      body: JSON.stringify(serviceForm)
    });
    setShowServiceForm(false);
    fetchAll(token);
  };

  const markInquiryRead = async (id) => {
    await fetch(`${ADMIN_API}/inquiries/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'Authorization': token },
      body: JSON.stringify({ status: 'read' })
    });
    fetchAll(token);
  };

  const styles = {
    container: { padding: '40px 5%', minHeight: '100vh', background: '#050505', color: '#fff', fontFamily: 'Inter, sans-serif' },
    topBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' },
    statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' },
    statCard: { background: 'rgba(184, 134, 11, 0.05)', border: '1px solid rgba(184, 134, 11, 0.2)', padding: '25px', borderRadius: '15px', textAlign: 'center' },
    statVal: { fontSize: '2rem', fontWeight: 'bold', color: '#b8860b', margin: '10px 0' },
    nav: { display: 'flex', gap: '10px', marginBottom: '30px', borderBottom: '1px solid #222', paddingBottom: '15px' },
    navItem: (active) => ({
      padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', background: active ? '#b8860b' : 'transparent', color: active ? '#000' : '#888', fontWeight: '600', transition: '0.3s'
    }),
    card: { background: 'rgba(255,255,255,0.03)', border: '1px solid #111', padding: '30px', borderRadius: '20px' },
    table: { width: '100%', borderCollapse: 'collapse' },
    th: { textAlign: 'left', padding: '15px', color: '#b8860b', borderBottom: '1px solid #222', fontSize: '0.85rem' },
    td: { padding: '15px', borderBottom: '1px solid #111', fontSize: '0.9rem' },
    badge: (c) => ({ padding: '4px 10px', borderRadius: '15px', fontSize: '0.7rem', fontWeight: 'bold', background: `${c}22`, color: c, border: `1px solid ${c}` }),
    btn: (bg) => ({ padding: '6px 12px', borderRadius: '6px', border: 'none', background: bg, color: bg === '#b8860b' ? '#000' : '#fff', cursor: 'pointer', fontWeight: '600', fontSize: '0.75rem', marginRight: '5px' })
  };

  if (!isAuthenticated) return (
    <div style={{...styles.container, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{...styles.card, width: '100%', maxWidth: '380px', textAlign: 'center'}}>
        <h2 style={{color: '#b8860b', marginBottom: '10px'}}>Admin Panel</h2>
        <p style={{color: '#666', fontSize: '0.9rem', marginBottom: '30px'}}>Baglarpanam Spiritual Management</p>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" style={{width: '100%', padding: '12px', background: '#000', border: '1px solid #222', borderRadius: '8px', color: '#fff', marginBottom: '15px'}} value={username} onChange={e=>setUsername(e.target.value)} />
          <input type="password" placeholder="Password" style={{width: '100%', padding: '12px', background: '#000', border: '1px solid #222', borderRadius: '8px', color: '#fff', marginBottom: '25px'}} value={password} onChange={e=>setPassword(e.target.value)} />
          <button type="submit" style={{width: '100%', padding: '12px', background: '#b8860b', color: '#000', border: 'none', borderRadius: '8px', fontWeight: 'bold'}}>LOGIN</button>
        </form>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.topBar}>
        <h1>Dashboard <span style={{fontSize: '1rem', color: '#555', fontWeight: 'normal'}}>v2.0</span></h1>
        <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
           {loading && <span style={{color: '#b8860b', fontSize: '0.8rem'}}>Syncing...</span>}
           <button onClick={logout} style={{background: 'none', border: '1px solid #e74c3c', color: '#e74c3c', padding: '5px 15px', borderRadius: '6px', cursor: 'pointer'}}>Exit</button>
        </div>
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={{fontSize: '0.8rem', color: '#888'}}>TOTAL REVENUE</div>
          <div style={styles.statVal}>₹{stats.totalRevenue.toLocaleString()}</div>
        </div>
        <div style={styles.statCard}>
          <div style={{fontSize: '0.8rem', color: '#888'}}>BOOKINGS</div>
          <div style={styles.statVal}>{stats.totalBookings}</div>
        </div>
        <div style={styles.statCard}>
          <div style={{fontSize: '0.8rem', color: '#888'}}>SERVICES</div>
          <div style={styles.statVal}>{services.length}</div>
        </div>
        <div style={styles.statCard}>
          <div style={{fontSize: '0.8rem', color: '#888'}}>NEW INQUIRIES</div>
          <div style={styles.statVal}>{stats.newInquiries}</div>
        </div>
      </div>

      <div style={styles.nav}>
        {['overview', 'bookings', 'services', 'inquiries'].map(t => (
          <div key={t} style={styles.navItem(activeTab === t)} onClick={() => setActiveTab(t)}>{t.toUpperCase()}</div>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px'}}>
           <div style={styles.card}>
              <h3 style={{marginBottom: '20px'}}>Latest Bookings</h3>
              <table style={styles.table}>
                <tbody>
                  {bookings.slice(0, 5).map(b => (
                    <tr key={b._id}>
                      <td style={styles.td}>{b.name}</td>
                      <td style={styles.td}>{b.problem}</td>
                      <td style={styles.td}><span style={styles.badge(b.status === 'confirmed' ? '#2ecc71' : '#f1c40f')}>{b.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
           </div>
           <div style={styles.card}>
              <h3 style={{marginBottom: '20px'}}>Recent Inquiries</h3>
              {inquiries.slice(0, 3).map(i => (
                <div key={i._id} style={{padding: '10px 0', borderBottom: '1px solid #111'}}>
                   <div style={{fontSize: '0.9rem', color: '#b8860b'}}>{i.name}</div>
                   <div style={{fontSize: '0.75rem', color: '#666'}}>{i.message.substring(0, 40)}...</div>
                </div>
              ))}
           </div>
        </div>
      )}

      {activeTab === 'bookings' && (
        <div style={styles.card}>
           <h3>All Bookings</h3>
           <table style={styles.table}>
              <thead>
                <tr><th>User</th><th>Contact</th><th>Problem</th><th>Date</th><th>Payment</th><th>Status</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {bookings.map(b => (
                  <tr key={b._id}>
                    <td style={styles.td}>{b.name}</td>
                    <td style={styles.td}>{b.phone}</td>
                    <td style={styles.td}>{b.problem}</td>
                    <td style={styles.td}>{new Date(b.date).toLocaleDateString()}</td>
                    <td style={styles.td}><span style={styles.badge(b.payment?.status === 'paid' ? '#2ecc71' : '#e74c3c')}>{b.payment?.status || 'unpaid'}</span></td>
                    <td style={styles.td}><span style={styles.badge(b.status === 'confirmed' ? '#2ecc71' : '#f1c40f')}>{b.status}</span></td>
                    <td style={styles.td}>
                      <button onClick={()=>patchBooking(b._id, {status:'confirmed'})} style={styles.btn('#b8860b')}>Confirm</button>
                      <button onClick={()=>deleteItem('bookings', b._id)} style={styles.btn('#e74c3c')}>Del</button>
                    </td>
                  </tr>
                ))}
              </tbody>
           </table>
        </div>
      )}

      {activeTab === 'services' && (
        <div style={styles.card}>
           <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
             <h3>Spiritual Services</h3>
             <button onClick={() => { setEditingService(null); setServiceForm({title:'', description:'', price:0, order:0}); setShowServiceForm(true); }} style={styles.btn('#b8860b')}>+ Add New</button>
           </div>
           
           {showServiceForm && (
             <div style={{...styles.card, background: '#111', marginBottom: '30px'}}>
                <form onSubmit={submitService}>
                   <input style={{width:'100%', padding:'10px', marginBottom:'10px', background:'#000', border:'1px solid #333', color:'#fff'}} placeholder="Title" value={serviceForm.title} onChange={e=>setServiceForm({...serviceForm, title:e.target.value})} />
                   <textarea style={{width:'100%', padding:'10px', marginBottom:'10px', background:'#000', border:'1px solid #333', color:'#fff'}} placeholder="Description" value={serviceForm.description} onChange={e=>setServiceForm({...serviceForm, description:e.target.value})} />
                   <input style={{width:'100%', padding:'10px', marginBottom:'10px', background:'#000', border:'1px solid #333', color:'#fff'}} type="number" placeholder="Price" value={serviceForm.price} onChange={e=>setServiceForm({...serviceForm, price:e.target.value})} />
                   <button type="submit" style={styles.btn('#b8860b')}>Save Service</button>
                   <button type="button" onClick={()=>setShowServiceForm(false)} style={styles.btn('#444')}>Cancel</button>
                </form>
             </div>
           )}

           <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:'20px'}}>
              {services.map(s => (
                <div key={s._id} style={{padding:'20px', background:'#111', borderRadius:'10px'}}>
                   <h4 style={{color:'#b8860b'}}>{s.title}</h4>
                   <p>₹{s.price}</p>
                   <div style={{marginTop:'10px'}}>
                      <button onClick={()=>{setEditingService(s); setServiceForm(s); setShowServiceForm(true);}} style={{color:'#b8860b', background:'none', border:'none', cursor:'pointer', marginRight:'10px'}}>Edit</button>
                      <button onClick={()=>deleteItem('services', s._id)} style={{color:'#e74c3c', background:'none', border:'none', cursor:'pointer'}}>Delete</button>
                   </div>
                </div>
              ))}
           </div>
        </div>
      )}

      {activeTab === 'inquiries' && (
        <div style={styles.card}>
           <h3>Customer Inquiries</h3>
           <table style={styles.table}>
              <thead>
                <tr><th>From</th><th>Message</th><th>Date</th><th>Status</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {inquiries.map(i => (
                  <tr key={i._id}>
                    <td style={styles.td}>{i.name}<br/><span style={{fontSize:'0.7rem', color:'#666'}}>{i.email}</span></td>
                    <td style={styles.td} title={i.message}>{i.message.substring(0, 50)}...</td>
                    <td style={styles.td}>{new Date(i.createdAt).toLocaleDateString()}</td>
                    <td style={styles.td}><span style={styles.badge(i.status === 'new' ? '#f1c40f' : '#2ecc71')}>{i.status}</span></td>
                    <td style={styles.td}>
                      {i.status === 'new' && <button onClick={()=>markInquiryRead(i._id)} style={styles.btn('#b8860b')}>Read</button>}
                      <button onClick={()=>deleteItem('inquiries', i._id)} style={styles.btn('#e74c3c')}>Del</button>
                    </td>
                  </tr>
                ))}
              </tbody>
           </table>
        </div>
      )}
    </div>
  );
}
