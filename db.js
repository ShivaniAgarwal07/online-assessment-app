const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgresql://postgres:[Abhi!1100]@db.jxyijgbthlnozxnnovqs.supabase.co:5432/abhisinghprojects',
    ssl: {
        rejectUnauthorized: false, // Supabase requires SSL
    },
});

module.exports = pool;