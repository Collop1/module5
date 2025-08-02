const calculator = require('../routes/calculatorRoutes');

// Route for adding two numbers 
const add = (req, res) => { 
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(sum);
  res.status(200);
  res.json({result: sum});
};

// Route for subtracting two numbers 
const subtract = (req, res) => { 
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let difference = number1 - number2;
  console.log(difference);
  res.status(200);
  res.json({result: difference});
};

// Route for multiplying two numbers 
const multiply = (req, res) => { 
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let product = number1 * number2;
  console.log(product);
  res.status(200);
  res.json({result: product});
};

// Route for dividing two numbers 
const divide = (req, res) => { 
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let quotient = number1 / number2;
  console.log(quotient);
  res.status(200);
  res.json({result: quotient});
};

module.exports = {
  add,
  subtract,
  multiply,
  divide
};