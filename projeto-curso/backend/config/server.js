const port = 3003;

const bodyParser = require('body-parser'),
express = require('express'),
server = express();

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())

server.listen(port,function(){
    console.log(`BACKEND is running on port ${port}.`);
});

server.use(function(req,res,next){
    res.send('Tudo Certo!!!');
});