require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const methodOverride = require('method-override');

app.use('/estatico', express.static('src/app/public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

const rotas = require('../app/rotas/rotas');
rotas(app);

app.use(function(req, resp, next){
    return resp.status(404).marko(require('../app/views/base/erros/404.marko'));
});

app.use(function(erro, req, resp, next){
    console.log(erro);
    return resp.status(500).marko(require('../app/views/base/erros/500.marko'));
})

module.exports = app;