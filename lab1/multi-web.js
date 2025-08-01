const express = require('express');

// Create multiple app instances
const app1 = express();
const app2 = express();
const app3 = express();

// Define different ports
const port1 = 3000;
const port2 = 3001;
const port3 = 3002;

// Set up server routes
app1.get('/', (req, res) => {
  res.send('Hello from Server 1!');
});

app2.get('/', (req, res) => {
  res.send('Hello from Server 2!');
});

app3.get('/', (req, res) => {
  res.send('Hello from Server 3!');
});

// Start all servers
app1.listen(port1, () => {
  console.log(`Server 1 listening at http://localhost:${port1}`);
});

app2.listen(port2, () => {
  console.log(`Server 2 listening at http://localhost:${port2}`);
});

app3.listen(port3, () => {
  console.log(`Server 3 listening at http://localhost:${port3}`);
});