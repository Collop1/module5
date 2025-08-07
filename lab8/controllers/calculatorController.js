const Calculator = require('../libraries/Calculator');
const Logger = require('../libraries/logger');

// Initialize logger
const logger = new Logger({
  serviceName: 'CalculatorService'
});

// Route for adding two numbers
const add = (req, res) => {
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
  const callerId = Logger.generateCallerId(req);
  let myCalc = new Calculator();
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let difference = myCalc.sub(number1, number2);
  
  Logger.logOperation(
    callerId,
    'subtract',
    difference,
    { num1: number1, num2: number2 }
  );

  res.status(200);
  res.json({ result: difference });
};

// Route for multiplying two numbers 
const multiply = (req, res) => {
  const callerId = Logger.generateCallerId(req);
  let myCalc = new Calculator();
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let product = myCalc.mul(number1, number2);
  
  Logger.logOperation(
    callerId,
    'multiply',
    product,
    { num1: number1, num2: number2 }
  );

  res.status(200);
  res.json({ result: product });
};

// Route for dividing two numbers 
const divide = (req, res) => {
  const callerId = Logger.generateCallerId(req);
  let myCalc = new Calculator();
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let quotient = myCalc.div(number1, number2);
  
  Logger.logOperation(
    callerId,
    'divide',
    quotient,
    { num1: number1, num2: number2 }
  );

  res.status(200);
  res.json({ result: quotient });
};

module.exports = {
  add,
  subtract,
  multiply,
  divide
};