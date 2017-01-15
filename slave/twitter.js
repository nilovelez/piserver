var app = require('../slave');
var config = require('./config');
var path = require('path');
var Twit = require('twit');

// nilo node /var/www/elefanbot/index.js

var number = null;
var counter_path = path.join(__dirname, 'data', 'counter.txt');

var T = new Twit(config.twitter);

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

exports.twittea = twittea;

//twittea();