const eleicaoRotas = require('./eleicao-rotas');
const baseRotas = require('./base-rotas');

module.exports = (app) => {
    eleicaoRotas(app);
    baseRotas(app);
}