const express = require('express')
const router = express.Router()

const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Imagemin Home')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About Imagemin')
})

module.exports = router
