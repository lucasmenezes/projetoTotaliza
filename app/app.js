const http = require('http');
const servidor = http.createServer(function(req, res){
    res.end(console.log('funcionou'));
});

servidor.listen(3000, function(){
    console.log('Servidor inicializado!');
});