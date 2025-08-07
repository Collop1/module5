const express = require('express');
const calculatorRoutes = require('./routes/calculatorRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = require('./app');
const port = 3000;

// Set up server route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Set up Swagger UI for API documentation
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

// map the calculator routes to the app
app.use('/calculator', calculatorRoutes);

// map the public HTML file
app.use('/public', express.static('public'));

app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(port, () => {
  console.log(`App listening at 
    http://localhost:${port}`);
});