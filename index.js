var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})


if (!!process.argv && (!!process.argv[2]) && (process.argv[2] == 'master')){
  serverType = 'master';
}else{
  serverType = 'slave';
}


var imagemin = require('./imagemin')
app.use('/imagemin',imagemin);


app.listen(8080, function () {
  console.log('Example ' + serverType + ' server listening on port 8080!')
})
