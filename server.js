const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db');
var userController = require('./controllers/userController.js');

const hostname = 'localhost';
const port = 3000;

var app = express();
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server started at http://${hostname}:${port}`));

app.use('/users', userController)