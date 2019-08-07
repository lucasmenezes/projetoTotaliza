const EleicaoControlador = require('../controladores/eleicao-controlador');
const eleicaoControlador = new EleicaoControlador();

module.exports = (app) => {
    app.get(EleicaoControlador.rotas().eleicao, eleicaoControlador.lista());
    app.get(EleicaoControlador.rotas().detalhe, eleicaoControlador.detalha());
    app.post(EleicaoControlador.rotas().resultado, eleicaoControlador.totaliza());
}