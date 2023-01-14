'use strict';

const bodyParser = require('body-parser'); //converter o corpo da requisição com json
const express = require('express');

const app = express();
const router = express.Router();

//carregar as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json()); //falando pra aplicação que estou usando body-parser 
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;