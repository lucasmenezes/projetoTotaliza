const EleicaoDao = require('../infra/eleicao-dao');

class EleicaoControlador {

    static rotas() {
        return {
            lista: '/eleicoes'
        };
    }

    lista() {
        return function(req, res) {
            const eleicaoDao = new EleicaoDao(req.connection);
            eleicaoDao.lista()
                .then(eleicoes => res.marko(require('../views/eleicao/lista/lista.marko'), {eleicoes}))
                .catch(erro => console.log(erro));
        };
    }
}

module.exports = EleicaoControlador;