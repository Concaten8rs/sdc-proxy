const express = require('express');
const router = require('./router.js');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(router);

const port = process.env.PORT || 1150;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
