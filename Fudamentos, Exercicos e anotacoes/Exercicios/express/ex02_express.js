const express = require('express');

const server = express();

server.get('/',function(req,res,next){
    console.log('Início...');
    next();
    console.log('Fim...');
});

server.get('/',function(req,res,next){
    console.log('Respsota...');
    res.send('<h1>Olá Express</h1>')
});

server.listen(3000,() =>{console.log('Executando...')});

