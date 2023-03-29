const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('API works!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
