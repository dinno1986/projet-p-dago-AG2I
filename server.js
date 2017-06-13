var express = require('express');
var app = express();

app.listen(3000,function(){
	console.log('server ok');
	});


// envoi sans le css
app.get('/', function(req,res){
	res.sendFile(__dirname+'/public/evenement.html');
});

// envoi tout le dossier public
app.use(express.static(__dirname+'/public'));


// route pour envoyer sur la page d'accueil
app.post('/accueil', function(req,res){
	res.render('accueil.html');
});