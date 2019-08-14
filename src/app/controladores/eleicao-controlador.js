const EleicaoDao = require('../infra/eleicao-dao');
const PartidoColigacaoDao = require('../infra/partido-coligacao-dao');
const CandidatoDao = require('../infra/candidato-dao');
const VotacaoDao = require('../infra/votacao-dao');

class EleicaoControlador {

    static rotas() {
        return {
            eleicao: '/eleicoes',
            detalhe: '/eleicoes/:id',
            resultado: '/eleicoes/:id/resultado',
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
                    const partidoColigacaoDao = new PartidoColigacaoDao(req.connection);
                    partidoColigacaoDao.listaVotosPorIdEleicao(id)
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

   
    /*
    totaliza() {
        return function(req, res) {
            const idEleicao = req.params.id;
            console.log('idEleicao: ' + idEleicao);
            const eleicaoDao = new EleicaoDao(req.connection);
            eleicaoDao.calculaQuocienteEleitoral(idEleicao)
                .then(quocienteEleitoral => {
                    const partidoColigacaoDao = new PartidoColigacaoDao(req.connection);
                    partidoColigacaoDao.listaPorIdEleicao(idEleicao)
                        .then(partidos => {
                            const votacaoDao = new VotacaoDao(req.connection);
                            var qp = partidos.map((partido) => {
                                return new Promise((resolve) => {
                                    if (partido.coligacao_id == null) {
                                        const idPartidoEleicao = partido.partido_eleicao_id;
                                        votacaoDao.buscaVotosLegendaPartido(idEleicao, idPartidoEleicao)
                                        .then(votosLegendaPartido => {
                                            votacaoDao.buscaVotosNominaisPartido(idEleicao, idPartidoEleicao)
                                                .then(votosNominaisPartido => {
                                                    var votosValidos = votosLegendaPartido + votosNominaisPartido;
                                                    var qtdVagasObtidas = Math.trunc(votosValidos / quocienteEleitoral.quociente_eleitoral);    
                                                    partidoColigacaoDao.buscaQuantidadeCandidatoVotacaoMinimaPartido(idEleicao, idPartidoEleicao, quocienteEleitoral.clausula_barreira)
                                                        .then(qtdCandidatosVotacaoMinima => {
                                                            var qtdVagasPreenchidas = (qtdCandidatosVotacaoMinima >= qtdVagasObtidas ?  qtdVagasObtidas : qtdCandidatosVotacaoMinima);
                                                            partido.votosLegenda = votosLegendaPartido;
                                                            partido.votosNominais = votosNominaisPartido;
                                                            partido.votosValidos = votosValidos;
                                                            partido.qtdVagasObtidas = qtdVagasObtidas;
                                                            partido.qtdCandidatosQE = qtdCandidatosVotacaoMinima;
                                                            partido.vagasPreenchidas = qtdVagasPreenchidas;    
                                                            resolve(partido);
                                                        })
                                                        .catch(erro => console.log(erro));
                                                })
                                                .catch(erro => console.log(erro));
                                            })
                                        .catch(erro => console.log(erro));    
                                    } else {
                                        const idColigacao = partido.coligacao_id;
                                        votacaoDao.buscaVotosLegendaColigacao(idEleicao, idColigacao)
                                            .then(votosLegendaColigacao => {
                                                votacaoDao.buscaVotosNominaisColigacao(idEleicao, idColigacao)
                                                    .then(votosNominaisColigacao => {
                                                        var votosValidos = votosLegendaColigacao + votosNominaisColigacao;
                                                        var qtdVagasObtidas = Math.trunc(votosValidos / quocienteEleitoral.quociente_eleitoral);        
                                                        partidoColigacaoDao.buscaQuantidadeCandidatoVotacaoMinimaColigacao(idEleicao, idColigacao, quocienteEleitoral.clausula_barreira)
                                                            .then(qtdCandidatosVotacaoMinima => {
                                                                var qtdVagasPreenchidas = (qtdCandidatosVotacaoMinima >= qtdVagasObtidas ? qtdVagasObtidas : qtdCandidatosVotacaoMinima);
                                                                partido.votosLegenda = votosLegendaColigacao;
                                                                partido.votosNominais = votosNominaisColigacao;
                                                                partido.votosValidos = votosValidos;
                                                                partido.qtdVagasObtidas = qtdVagasObtidas;
                                                                partido.qtdCandidatosQE = qtdCandidatosVotacaoMinima;
                                                                partido.vagasPreenchidas = qtdVagasPreenchidas;
                                                                resolve(partido);    
                                                            })
                                                            .catch(erro => console.log(erro));
                                                    })
                                                    .catch(erro => console.log(erro));    
                                            })
                                            .catch(erro => console.log(erro));
                                    }
                                });        
                           });         
                           Promise.all(qp).then((quocientePartidario) => { 
                                    console.log(quocienteEleitoral);
                                    console.log(quocientePartidario);
                                    res.marko(require('../views/eleicao/resultado/resultado.marko'), {quocienteEleitoral, quocientePartidario});
                           });
                        })
                        .catch(erro => console.log(erro));
                })
                .catch(erro => console.log(erro));
        };
    }
    */
    totaliza() {
        return function(req, res) {
            _calculaQuocienteEleitoral();
            _calculaQuocientePartidario();            
            _proclamaEleitos();
            res.marko(require('../views/eleicao/resultado/resultado.marko'), {quocienteEleitoral: {}, quocientePartidario: []})
        };
    }
}

_calculaQuocienteEleitoral = function () {
    console.log('calculaQuocienteEleitoral');
}

_calculaQuocientePartidario = function() {
    console.log('calculaQuocientePartidario');
}

_proclamaEleitos = function() {
    console.log('proclamaEleitos');
}

module.exports = EleicaoControlador;