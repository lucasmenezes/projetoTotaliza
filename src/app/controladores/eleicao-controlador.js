const EleicaoDao = require('../infra/eleicao-dao');
const PartidoDao = require('../infra/partido-dao');
const CandidatoDao = require('../infra/candidato-dao');

class EleicaoControlador {

    static rotas() {
        return {
            eleicao: '/eleicoes',
            detalhe: '/eleicoes/:id',
            form: '',
            partidos: '/eleicoes/:id/partidos',
            candidatos: '/eleicoes/:id/candidatos'
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

    detalha() {
        return function(req, res) {
            const id = req.params.id;
            const eleicaoDao = new EleicaoDao(req.connection);
            
            eleicaoDao.buscaPorId(id)
                .then(eleicao => {
                    const partidoDao = new PartidoDao(req.connection);
                    partidoDao.listaPorIdEleicao(id)
                        .then(partidos => {
                            const candidatoDao = new CandidatoDao(req.connection);
                            candidatoDao.listaPorIdEleicao(id)
                                .then(candidatos => res.marko(require('../views/eleicao/detalhe/detalhe.marko'), {eleicao, partidos, candidatos}))
                                .catch(erro => console.log(erro));
                        })
                        .catch(erro => console.log(erro));
                })
                .catch(erro => console.log(erro));
         
        };
    }

    //testar
    inclui() {
        return function(req, res) {
            const eleicao = req.params.eleicao;
            const eleicaoDao = new EleicaoControlador(req.connection);
            eleicaoDao.inclui(eleicao)
                .then(res.redirect(rotas().eleicao))
                .catch(erro => console.log(erro));
        };
    }

    //testar
    atualiza() {
        return function(req, res) {
            const eleicao = req.params.eleicao;
            const eleicaoDao = new EleicaoDao(connection);
            eleicaoDao.atualiza(eleicao)
                .then(res.redirect(rotas().eleicao))
                .catch(erro => console.log(erro));
        };
    }

    //testar
    deleta() {
        return function(req, res) {
            const id = req.params.id;
            const eleicaoDao = new EleicaoDao(req.connection);

            eleicaoDao.deleta(id)
                .then()
                .catch(erro => console.log(erro));
        };
    }

    incluiCandidatos() {

    }

    excluiCandidatos() {

    }
}

module.exports = EleicaoControlador;