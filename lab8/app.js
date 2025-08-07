const express = require('express') 
const app = express() 

// map all routes to the express app 
const calculatorRoutes = require('./routes/calculatorRoutes'); 
app.use('/calculator', calculatorRoutes); 

module.exports = app;