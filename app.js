const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  const max = 1500;
  const min = 0;
  const RANDOM = Math.random() * (max - min) + min;
  res.send(RANDOM);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
