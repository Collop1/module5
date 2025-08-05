const express = require('express'); 
const router = express.Router();
const calculatorController = require('../controllers/calculatorController.js');

// Route for adding two numbers
router.get('/add', calculatorController.add);

// Route for subtracting two numbers 
router.get('/subtract', calculatorController.subtract);

// Route for multiplying two numbers 
router.get('/multiply', calculatorController.multiply);

// Route for dividing two numbers 
router.get('/divide', calculatorController.divide);

module.exports = router;