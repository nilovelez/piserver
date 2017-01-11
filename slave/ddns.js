var config = require('./config');
var http = require('http');

var myTimer = null;
var update = function(){
  if (!config.master) return false;
  require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    console.log(add + ' >> ' + config.master.host + config.master.port)

    var options = {
      host: config.master.host,
      port: config.master.port,
      path: '/ping/?ip=' + add 
    };

    http.get(options, (res) => {
      const statusCode = res.statusCode;
      const contentType = res.headers['content-type'];

      let error;
      if (statusCode !== 200) {
        error = new Error(`Request Failed.\n` +
                          `Status Code: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error(`Invalid content-type.\n` +
                          `Expected application/json but received ${contentType}`);
      }
      if (error) {
        console.log(error.message);
        // consume response data to free up memory
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => rawData += chunk);
      res.on('end', () => {
        try {
          let parsedData = JSON.parse(rawData);
          console.log(parsedData);
        } catch (e) {
          console.log(e.message);
        }
      });
    }).on('error', (e) => {
      console.log(`Got error: ${e.message}`);
    });



  });

}
var start = function(){
  update(); 
  myTimer = setInterval(function(){
    update();
  },60000)
}
  
//exports.update = update;
exports.start = start;
