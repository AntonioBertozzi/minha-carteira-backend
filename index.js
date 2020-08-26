const express = require('express');
const server = express();

server.get('/boasvindas',function(request, response){
    response.send('<h1>BEM VINDO A NOSSA API!</H1>');
});

server.listen(3333, function(){
    console.log('O PAI TÁ ON!');
});

