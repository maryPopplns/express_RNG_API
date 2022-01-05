const express = require('express');

const app = express();

const port = 3000;

app.get('/:min/:max', (req, res) => {
  const min = parseInt(req.params.min);
  const max = parseInt(req.params.max);

  if (isNaN(min) || isNaN(max)) {
    res.status(400);
    res.json({ error: 'Bad request.' });
    return;
  }

  const random = (Math.random() * (max - min) + min).toFixed(0);
  res.json({ random });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
