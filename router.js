const router = require('express').Router();
const path = require('path');
const httpProxy = require('http-proxy');

const apiProxy = httpProxy.createProxyServer();
const reviewServer = 'http://localhost:1128';
const shippingServer = 'http://localhost:9000';
const carouselServer = 'http://localhost:3000';

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

router.all('/rev/*', (req, res) => {
  apiProxy.web(req, res, { target: reviewServer });
});

router.all('/ship/*', (req, res) => {
  apiProxy.web(req, res, { target: shippingServer });
});

router.all('/caro/*', (req, res) => {
  apiProxy.web(req, res, { target: carouselServer });
});

module.exports = router;
