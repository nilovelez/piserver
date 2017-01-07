var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})


var imagemin = require('./imagemin')
app.use('/imagemin',imagemin);


app.listen(8080, function () {
  console.log('Piserver slave listening on port 8080!')
})
