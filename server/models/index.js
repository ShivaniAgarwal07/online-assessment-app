const sequelize= require('../config/db');

const Test= require('./Test');

//sync the MOdel

sequelize.sync({alter: true})
.then(()=> console.log("Models are synced"))
.catch(err => console.log("Models Not Synced", err));

module.exports = { Test };