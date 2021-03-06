const express = require('express')
const router = express.Router()
const fs = require('fs')

var app = require('../master');
var config = require('./config');

// define the home page route
router.get('/', function (req, res) {
  
  res.setHeader('Content-Type', 'application/json')
  if (!!req.query && !!req.query.ip){
    var ip = req.query.ip;
    var name = req.query.name || 'anon';  

    /* 
    var slaveList = [];
    try {
      slaveList = fs.readFileSync('./master/data/slaves','utf8');
      slaveList = slaveList.split('\n');
    } catch (err) {
    }

        
    if (slaveList.indexOf(ip) === -1){
      slaveList.push(ip);
    }
    */
    
    app.enjambre[ip] = {
      name: name,
      status: 'available'};
    console.log(app.enjambre);    


    //fs.writeFileSync('./master/data/slaves', slaveList.join('\n') , 'utf-8');

    res.send(JSON.stringify({msg:'received IP: ' + ip }))

  } else {    
    res.send(JSON.stringify({msg:'ping service. Usage: ?ping=8.8.8.8'}));

  }	
})

module.exports = router

