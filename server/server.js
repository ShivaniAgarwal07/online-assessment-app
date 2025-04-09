const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(require('./routes/routes')); // Adjust path as needed

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// const cors= require('cors');
// const testRoutes= require('./routes/testRoutes');
require('dotenv').config();


// app.use(cors());


// app.use('/api/tests', testRoutes);

