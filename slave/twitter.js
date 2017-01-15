var app = require('../slave');
var config = require('./config')
var Twit = require('twit');
var path = require('path');

// nilo node /var/www/elefanbot/index.js

var number = null;
var counter_path = path.join(__dirname, 'data', 'counter.txt');

var T = new Twit({
    consumer_key:         'gBCCbByNR0NFSgcDk78iRPXht' // Your Consumer Key
  , consumer_secret:      '0i9qoHGb2SZxUiXCYDsGOQnjxjQsTSREzYaEHHII91ga8jvW5L' // Your Consumer Secret
  , access_token:         '2586359357-3j5kOsBtXw7vvaVDw2ToirJlQSx9DN2llXs7THP' // Your Access Token
  , access_token_secret:  'JGlKUxL2KORr4gxWV1zGoEhWqXjzdNiI3nSq3cFV7tTMX' // Your Access Token Secret
});

var dec2bin = function(dec){
    return (dec >>> 0).toString(2);
}

var twittea = function(){



	fs.readFile(counter_path, 'utf8', (err, data) => {
		if (err){
			number = 1;
			console.log('empiezo de cero!');
			//throw err;
		}else{
			number = parseInt(data) + 1;
			console.log('vamos a por el '+ number);
		}

		if (number == 1){
			msg = 'Un elefante se balanceba sobre la tela de una araña, como veía que no se caía fue a buscar a otro elefante';
		}else{
			msg = dec2bin(number) + ' elefantes se balanceban sobre la tela de una araña, como veían que no se caían fueron a buscar a otro elefante';
		}
		console.log(number + ' > ' + msg);




		// testing
		/*
		fs.writeFile(counter_path, number ,'utf8', (err) => {
			if (err) throw err;
			console.log('Todo Ok, estado guardado!');
		});
		return true;
		*/
		// fin testing


		T.post('statuses/update', { status: msg }, function(err, data, response) {
			if(err) {
		    	console.log("There was a problem tweeting the message.", err);
			}else{
				fs.writeFile(counter_path, number ,'utf8', (err) => {
					if (err) throw err;
					console.log('Todo Ok, estado guardado!');
				});
			}
		});
	  
	});
}

//twittea();


