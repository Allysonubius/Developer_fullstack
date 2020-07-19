const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Connection db
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://allyson:12457812@developerfullstack.cgr62.gcp.mongodb.net/allyson?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

//Carrega os Models
const Product = require('./models/product');

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
module.exports = app;