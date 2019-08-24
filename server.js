const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send("display something here");
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});