const validateCalculatorInput = (req, res, next) => {
  const { num1, num2 } = req.query;
  
  // Check if parameters exist
  if (num1 === undefined || num2 === undefined) {
    return res.status(400).json({
      error: 'Missing parameters. Both num1 and num2 are required.'
    });
  }
  
  // Check if parameters are valid numbers
  const parsedNum1 = parseFloat(num1);
  const parsedNum2 = parseFloat(num2);
  
  if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
    return res.status(400).json({
      error: 'Invalid parameters. Both num1 and num2 must be valid numbers.'
    });
  }
  
  // For division, check if divisor is zero
  if (req.path === '/divide' && parsedNum2 === 0) {
    return res.status(400).json({
      error: 'Division by zero is not allowed.'
    });
  }
  
  // Add parsed numbers to request for controller use
  req.parsedNum1 = parsedNum1;
  req.parsedNum2 = parsedNum2;
  
  next();
};

module.exports = {
  validateCalculatorInput
};