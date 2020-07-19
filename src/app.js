const express = require('express');
const bodyParser = require('body-parser');
const monngoose = require('mongoose');

const app = express();
const router = express.Router();

//Connection db


//Carrega Rotas
const indexRoute = require('./routes/index');
const productRoute = require('./routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;