const express= require('express');
const mongoose= require('mongoose');
// const cors= require('cors');
// const testRoutes= require('./routes/testRoutes');
require('dotenv').config();

const app= express();

// app.use(cors());

app.use(express.json());

// app.use('/api/tests', testRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.log(err));