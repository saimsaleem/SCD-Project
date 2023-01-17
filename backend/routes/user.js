const express = require('express');
const user = express.Router();
const bodyParser = require('body-parser')
const controller = require('../Controller/controlTransport')
const cors = require('cors');
const transport = require('../model/modelTransport')

user.use(bodyParser.json());
user.use(cors( { origin: '*' , } ));

user.use(express.urlencoded({extended: false}));

user.get('/', (req, res) => {
  res.send('In Routes')
})

user.post('/addTransport',controller.addTransport);
user.get('/getTransport',controller.getTransport);
user.delete('/deleteTransport/:id',controller.deleteTransport);
user.get('/findTransport/:name',controller.findTransport);
user.put('/updateTransport/:id',controller.updateTransport);

module.exports = user;