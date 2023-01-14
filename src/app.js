'use strict';

const bodyParser = require('body-parser'); //converter o corpo da requisição com json
const express = require('express');

const app = express();
const router = express.Router();

app.use(bodyParser.json()); //falando pra aplicação que estou usando body-parser 
app.use(bodyParser.urlencoded({ extended: false }));

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.2"
    });
});

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body); //Pegar o corpo da requisição
});

const put = router.put('/:id', (req, res, next) => { //recuperar paramentros que irão vir pela URL
    const id = req.params.id;
    res.status(200).send({
         id: id, 
         item: req.body 
    });
});

const del = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body); //Pegar o corpo da requisição
});

app.use('/', route);
app.use('/products', create);
app.use('/products', put);
app.use('/products', del);

module.exports = app;