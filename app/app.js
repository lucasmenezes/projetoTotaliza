const http = require('http');
const servidor = http.createServer();

servidor.listen(3000, function(){
    console.log('Servidor inicializado!');
});