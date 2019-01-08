const express = require('express');

const server = express();

server.use('/api',function(req,res,next){
    console.log('Início...');
    next();
    console.log('Fim...');
});

server.use('/api',function(req,res,next){
    console.log('Respsota...');
    res.send('<h1>API</h1>')
});

server.listen(3000,() =>{console.log('Executando...')});

