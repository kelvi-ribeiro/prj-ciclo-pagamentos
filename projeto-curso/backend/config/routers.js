const express = require('express');


module.exports = function(server){
    // APIT Routers
    
    const router = express.Router();
        server.use('/api',router);

    // Rotas da API

    const billingCycleService = require('../billingCycle/billingCycleService');

    billingCycleService.register(router,'/billingCycles')
}