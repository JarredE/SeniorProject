const express = require('express');
const index = express();
var port = process.env.PORT || 3000;
index.get('/', (req, res) => res.send('Hello World'));
index.listen (port, () => console.log('Server is running on port' + port));