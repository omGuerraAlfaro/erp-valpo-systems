const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'erp-valpo-db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(3000, () => console.log('Server started on port 3000'));