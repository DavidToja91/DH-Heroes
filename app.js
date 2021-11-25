const express = require('express');
const app = express();
const path = require('path');


app.listen (3030, ()=> console.log("Página en orden."))
app.get('/', function(req,res){
    res.send('Bienvenido al Mundo de los SuperHeroes')
});

app.get('/home', function(req,res){
    res.sendFile(path.join(__dirname,'/DH-Heroes/views/index.html'))
});

app.get ('/lovelace', function (req,res){
    res.sendFile(path.join(__dirname,'/DH-Heroes/public/img/AdaLovelace.jpg'))
} );

app.get ('/turing', function(req,res){
    res.sendFile(path.join(__dirname,'/DH-Heroes/public/img/AlanTuring.jpg'))
});

app.get('/clark', function(req,res){
    res.sendFile(path.join(__dirname,'/DH-Heroes/public/img/JoanClarke.jpg'))
});

app.get('/berners-lee', function(req,res){
    res.sendFile(path.join(__dirname,'/DH-Heroes/public/img/BernersLee.jpg'))
});

app.get('/babbage', function(req,res){
    res.sendFile(path.join(__dirname,'/DH-Heroes/public/img/CharlesBabbage.jpg'))
});

app.get('/hopper', function(req,res){
    res.sendFile(path.join(__dirname,'/DH-Heroes/public/img/GraceHopper.jpg'))
});

app.get('/hamilton', function(req,res){
    res.sendFile(path.join(__dirname,'/DH-Heroes/public/img/MargaretHamilton.jpg'))
})
app.use(express.static('public'));