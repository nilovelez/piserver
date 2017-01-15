var express = require('express')
var app = module.exports = express()

var config = require('./slave/config')

app.get('/', function (req, res) {
  //res.send('Hello World!')
  res.send('I am slave. Master server at: ' + config.master)
})

var ddns = require('./slave/ddns')
ddns.start(); 

//var twitter = require('./slave/twitter')

//var imagemin = require('./slave/imagemin')
//app.use('/imagemin',imagemin);


app.listen(8080, function () {
  console.log('Piserver slave listening on port 8080!')
});
