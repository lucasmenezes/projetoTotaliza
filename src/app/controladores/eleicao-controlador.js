const EleicaoDao = require('../infra/eleicao-dao');

class EleicaoControlador {

    static rotas() {
        return {
            lista: '/eleicoes'
        };
    }

    lista() {
        console.log("Controlador de eleições");
        return function(req, res) {
            const eleicaoDao = new EleicaoDao();
            eleicaoDao.lista()
                .then(eleicoes => res.marko(require('../views/eleicao/lista/lista.marko'), {eleicoes}))
                .catch(erro => console.log(erro));
        };
    }
}

module.exports = EleicaoControlador;