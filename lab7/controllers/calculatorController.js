const Calculator = require('../libraries/Calculator');
const Logger = require('../libraries/logger');
const { v4: uuidv4 } = require('uuid');

// Initialize logger
const logger = new Logger({
  serviceName: 'CalculatorService'
});

// Route for adding two numbers
const add = (req, res) => {
  const requestId = uuidv4();
  const callerId = Logger.generateCallerId(req);
  let myCalc = new Calculator();
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = myCalc.add(number1, number2);

  Logger.logOperation(
    callerId,
    'add',
    sum,
    { num1: number1, num2: number2 }
  );

  res.status(200);
  res.json({ result: sum });
}

// Route for subtracting two numbers 
const subtract = (req, res) => {
  let myCalc = new Calculator();
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let difference = myCalc.sub(number1, number2);
  console.log(difference);
  res.status(200);
  res.json({ result: difference });
};

// Route for multiplying two numbers 
const multiply = (req, res) => {
  let myCalc = new Calculator();
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let product = myCalc.mul(number1, number2);
  console.log(product);
  res.status(200);
  res.json({ result: product });
};

// Route for dividing two numbers 
const divide = (req, res) => {
  let myCalc = new Calculator();
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let quotient = myCalc.div(number1, number2);
  console.log(quotient);
  res.status(200);
  res.json({ result: quotient });
};

module.exports = {
  add,
  subtract,
  multiply,
  divide
};