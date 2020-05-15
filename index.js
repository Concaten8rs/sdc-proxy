const express = require('express');
const path = require('path');
const cors = require('cors');
const router = require('./router.js');

const app = express();

app.use(express.static('dist'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());
app.use(router);

const port = process.env.PORT || 1150;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
