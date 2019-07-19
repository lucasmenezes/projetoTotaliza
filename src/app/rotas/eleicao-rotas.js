const EleicaoControlador = require('../controladores/eleicao-controlador');
const eleicaoControlador = new EleicaoControlador();

module.exports = (app) => {
    app.get(EleicaoControlador.rotas().lista, eleicaoControlador.lista());
}