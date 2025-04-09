const express= require('express');
const sequelize = require('./config/db');
const { Test, Submission } = require('./models'); //to sync the modelsn
// const cors= require('cors');
const app= express();
const testRoutes= require('./routes/testRoutes');
require('dotenv').config();


// app.use(cors());

app.use(express.json());
//get API http://localhost:5000/api/tests
//post API http://localhost:5000/api/tests/createTest
app.use('/api/tests', testRoutes);


sequelize.authenticate().then(()=> console.log("Connected to neon"))
.catch(err=> console.log("error connecting with neon", err));

sequelize.sync().then(() => {
  console.log('Models synced');
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});