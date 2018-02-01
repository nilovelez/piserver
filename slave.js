var express = require('express')
var app = module.exports = express()

var config = require('./slave/config')

app.get('/', function (req, res) {
  //res.send('Hello World!')
  res.send('I am a slave. Master server at: ' + config.master.host + ':' + config.master.port)
})

var ddns = require('./slave/ddns')
ddns.start(); 


var twitter = require('./slave/twitter')
app.get('/twitter/', function (req, res) {
  //res.send('Hello World!')
  res.send('I am a pajarito!');
  twitter.twittea();
})



//var imagemin = require('./slave/imagemin')
//app.use('/imagemin',imagemin);


app.listen(8080, function () {
  console.log('Piserver slave listening on port 8080!')
});
