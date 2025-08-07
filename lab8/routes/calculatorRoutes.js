const express = require('express'); 
const router = express.Router();
const calculatorController = require('../controllers/calculatorController.js');
const { validateCalculatorInput } = require('../validators/calc-validator.js');

// Route for adding two numbers
router.get('/add', validateCalculatorInput, calculatorController.add);

// Route for subtracting two numbers 
router.get('/subtract', validateCalculatorInput, calculatorController.subtract);

// Route for multiplying two numbers 
router.get('/multiply', validateCalculatorInput, calculatorController.multiply);

// Route for dividing two numbers 
router.get('/divide', validateCalculatorInput, calculatorController.divide);

module.exports = router;