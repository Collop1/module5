// app.js - new file at top level 
const express = require('express') 
const app = express() 

// map all routes to the express app 
const calculatorRoutes = require('./routes/calculatorRoutes'); 
app.use('/calculator', calculatorRoutes); 

// export the app 
module.exports = app;