const express = require('express');

const router = express.Router();

const connMongoDB = require('./ex05_configBanco');

// router.use((req,res,next) =>{    
//     const init = Date.now();
//     next();
//     var ping = Date.now() - init;
//     logPing = {
//         ping:ping,
//         requisition:req.protocol + '://' + req.get('host') + req.originalUrl
//     }
//     var dados = {
//         operacao: "inserir",
//         entity: logPing,
//         collection: "log_ping",        
// };
//     connMongoDB(dados)
//     console.log(ping + ' ms');
// });

router.get('/produtos/:id',(req,res) =>{
    const init = Date.now();
    var ping = Date.now() - init;
    logPing = {
        ping:ping,
        requisition:req.protocol + '://' + req.get('host') + req.originalUrl
    }
    var dados = {
        operacao: "inserir",
        entity: logPing,
        collection: "log_ping",        
    };
    connMongoDB(dados)
    res.json({id:req.params.id,name:'Caneta'});
});

router.get('/clientes/:id/:name',(req,res) =>{
    const init = Date.now();
    var ping = Date.now() - init;
    logPing = {
        ping:ping,
        requisition:req.protocol + '://' + req.get('host') + req.originalUrl
    }
    var dados = {
        operacao: "inserir",
        entity: logPing,
        collection: "log_ping",        
};
    connMongoDB(dados)
    res.json({id:req.params.id,name:req.params.name});
});

module.exports = router


