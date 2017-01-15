var express = require('express')
var app = module.exports = express()

app.enjambre = {}


app.get('/', function (req, res) {
  res.send('Hello World!')
})

var ping = require('./master/ping')
app.use('/ping',ping)

app.listen(8880, function () {
  console.log('Piserver master listening on port 8880!')
})
