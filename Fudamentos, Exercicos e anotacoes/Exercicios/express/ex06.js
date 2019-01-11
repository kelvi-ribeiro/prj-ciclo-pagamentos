const express1 = require('express');
const express2 = require('express');
console.log('require do express',express1 === express2)


const server1 = express1()
const server2 = express1()
console.log('instancia liberada na funcao do express',server1 === server2)


const router1 = express1.Router()
const router2 = express1.Router()
console.log('Instancia do express().Router()',router1 === router2);
