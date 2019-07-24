const EleicaoControlador = require('../controladores/eleicao-controlador');
const eleicaoControlador = new EleicaoControlador();

module.exports = (app) => {
    app.get(EleicaoControlador.rotas().lista, eleicaoControlador.lista());
    app.get(EleicaoControlador.rotas().detalhe, eleicaoControlador.detalhe());
}