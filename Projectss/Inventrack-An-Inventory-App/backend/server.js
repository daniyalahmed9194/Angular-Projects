const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { LowSync, JSONFileSync } = require('lowdb');

const app = express();
const port = 3000;

// Setup DB
const adapter = new JSONFileSync('db.json');
const db = new LowSync(adapter);
db.read();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/products', require('./routes/products'));
app.use('/suppliers', require('./routes/suppliers'));
app.use('/orders', require('./routes/orders'));

app.listen(port, () => {
  console.log(`Inventrack backend running at http://localhost:${port}`);
});
