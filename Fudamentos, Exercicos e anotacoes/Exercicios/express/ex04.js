const express = require('express');

const server = express();

server.route('/clientes')
.get((req,res)=>res.send('Lista de Clientes'))
.post((req,res)=>res.send('Novo Cliente adicionado'))
.put((req,res)=>res.send('Cliente atualizado'))
.delete((req,res)=>res.send('Cliente deletado'))

server.listen(3000,() =>{console.log('Executando...')});

