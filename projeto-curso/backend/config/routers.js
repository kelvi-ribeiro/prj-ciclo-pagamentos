const express = require('express');


module.exports = function(server){
    // APIT Routers

    const router = express.Router()
        server.use('/api',router);
    
}