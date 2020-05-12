const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const apiProxy = httpProxy.createProxyServer();
const reviewServer = 'http://localhost:1128';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.all('/rev/*', (req, res) => {
  apiProxy.web(req, res, { target: reviewServer });
});

const port = process.env.PORT || 1150;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
