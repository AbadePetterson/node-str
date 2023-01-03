// força você a escrever código correto
'use strict'

//sempre que for importar bibliotecas no node precisa usar o require
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express'); //tudo que colocar entre aspas  simples sem um caminho ele vai buscar na pasta nodemodules

const app = express();
const port = 3000;
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req,res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});
app.use('/', route);

server.listen(port);
console.log('API rodando na porta ' + port);