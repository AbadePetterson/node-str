'use strict';

const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    res.status(201).send(req.body); //Pegar o corpo da requisição
});

router.put('/:id', (req, res, next) => { //recuperar paramentros que irão vir pela URL
    const id = req.params.id;
    res.status(200).send({
         id: id, 
         item: req.body 
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).send(req.body); //Pegar o corpo da requisição
});

module.exports = router;