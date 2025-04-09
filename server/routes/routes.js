// routes/users.js
const express = require('express');
const router = express.Router();
const db = require('../../db');

router.get('/users', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error('DB error:', err);
        res.status(500).send('Server error');
    }
});

module.exports = router;
