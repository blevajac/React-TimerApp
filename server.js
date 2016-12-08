//pristup cijeloj express pi
var express =  require('express');

//izrađuje app
var app = express();
//HEROKU
const PORT = process.env.PORT || 3000;
//const nedopušta izmjene u port varijabli, preporućljivo sve const varijable piati velikim slovom

//preusmjerava sve https promet u http promet, jer openweathermap samo podržava http
app.use(function (req, res, next){
    if(req.headers['x-forwarded-proto'] === 'https'){
      res.redirect('http://' + req.hostname + req.url);
    }else{
      next();
    }
});

//dodava funkcionalnost expres aplikaciji
// static specificira ime foldera koji će biti pristupan web serveru
app.use(express.static('public'));

//HEROKU
//ako bi pokrenuli server sada sa heroku javit će grešku jer port:3000 se samo koristi
app.listen(PORT, function(){
    console.log('Express je instaliran na portu ' + PORT +'!!!');
});
