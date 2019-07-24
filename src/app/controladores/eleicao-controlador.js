const EleicaoDao = require('../infra/eleicao-dao');

class EleicaoControlador {

    static rotas() {
        return {
            lista: '/eleicoes',
            detalhe: '/eleicoes/:id'
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

    detalhe() {
        return function(req, res) {
            const id = req.params.id;
            const eleicaoDao = new EleicaoDao(req.connection);
            
            eleicaoDao.buscaPorId(id)
                .then(eleicao => res.marko(require('../views/eleicao/detalhe/detalhe.marko'), {eleicao}))
                .catch(erro => console.log(erro));
            
        };
    }
}

module.exports = EleicaoControlador;