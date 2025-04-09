const express= require('express');
const sequelize = require('./config/db');
require('./models'); //to sync the modelsn
// const cors= require('cors');
const testRoutes= require('./routes/testRoutes');
require('dotenv').config();


// app.use(cors());

app.use(express.json());
//get API http://localhost:5000/api/tests
//post API http://localhost:5000/api/tests/createTest
app.use('/api/tests', testRoutes);


sequelize.authenticate().then(()=> console.log("Connected to neon"))
.catch(err=> console.log("error connecting with neon", err));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});