const router = require('express').Router();
const path = require('path');
const httpProxy = require('http-proxy');

const apiProxy = httpProxy.createProxyServer();
const reviewServer = 'http://localhost:1128';

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

router.all('/rev/*', (req, res) => {
  apiProxy.web(req, res, { target: reviewServer });
});

module.exports = router;
