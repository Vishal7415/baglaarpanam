const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = 5001; 
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/baglarpanam';
const JWT_SECRET = process.env.JWT_SECRET || 'admin_secret_key';

app.use(cors());
app.use(express.json());

// Models
const Booking = require('./models/Booking');
const Service = require('./models/Service');
const Inquiry = require('./models/Inquiry');

// Auth Middleware
const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) { res.status(400).json({ error: 'Invalid token' }); }
};

// Login
app.post('/api/admin/login', (req, res) => {
    const { username, password } = req.body;
    if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
        const token = jwt.sign({ user: username }, JWT_SECRET, { expiresIn: '1d' });
        res.json({ token });
    } else { res.status(401).json({ error: 'Invalid credentials' }); }
});

// --- DASHBOARD STATS ---
app.get('/api/admin/stats', authenticate, async (req, res) => {
    try {
        const totalBookings = await Booking.countDocuments();
        const confirmedBookings = await Booking.countDocuments({ status: 'confirmed' });
        const pendingBookings = await Booking.countDocuments({ status: 'pending' });
        
        // Revenue calculation (confirmed payments)
        const revenueData = await Booking.aggregate([
            { $match: { 'payment.status': 'paid' } },
            { $group: { _id: null, total: { $sum: '$payment.amount' } } }
        ]);
        const totalRevenue = revenueData.length > 0 ? revenueData[0].total : 0;

        const newInquiries = await Inquiry.countDocuments({ status: 'new' });

        res.json({
            totalBookings,
            confirmedBookings,
            pendingBookings,
            totalRevenue,
            newInquiries
        });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// --- BOOKINGS ---
app.get('/api/admin/bookings', authenticate, async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ createdAt: -1 });
        res.json(bookings);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.patch('/api/admin/bookings/:id', authenticate, async (req, res) => {
    try {
        const updated = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/admin/bookings/:id', authenticate, async (req, res) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.json({ message: 'Booking deleted' });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// --- SERVICES ---
app.get('/api/admin/services', authenticate, async (req, res) => {
    try {
        const services = await Service.find().sort({ order: 1 });
        res.json(services);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/admin/services', authenticate, async (req, res) => {
    try {
        const newService = new Service(req.body);
        await newService.save();
        res.status(201).json(newService);
    } catch (err) { res.status(400).json({ error: err.message }); }
});

app.put('/api/admin/services/:id', authenticate, async (req, res) => {
    try {
        const updated = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/admin/services/:id', authenticate, async (req, res) => {
    try {
        await Service.findByIdAndDelete(req.params.id);
        res.json({ message: 'Service deleted' });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// --- INQUIRIES ---
// --- INQUIRIES ---
// Public route for contact form
app.post('/api/inquiries', async (req, res) => {
    try {
        const newInquiry = new Inquiry(req.body);
        await newInquiry.save();
        res.status(201).json({ message: 'Inquiry sent successfully' });
    } catch (err) { res.status(400).json({ error: err.message }); }
});

app.get('/api/admin/inquiries', authenticate, async (req, res) => {
    try {
        const inquiries = await Inquiry.find().sort({ createdAt: -1 });
        res.json(inquiries);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.patch('/api/admin/inquiries/:id', authenticate, async (req, res) => {
    try {
        const updated = await Inquiry.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        res.json(updated);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/admin/inquiries/:id', authenticate, async (req, res) => {
    try {
        await Inquiry.findByIdAndDelete(req.params.id);
        res.json({ message: 'Inquiry deleted' });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// DB Connection
mongoose.connect(MONGODB_URI)
.then(() => {
    console.log('Admin DB Connected');
    app.listen(PORT, () => console.log(`Admin Backend running on port ${PORT}`));
})
.catch(err => console.log(err));
