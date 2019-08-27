const EleicaoDao = require('../infra/eleicao-dao');
const PartidoColigacaoDao = require('../infra/partido-coligacao-dao');
const CandidatoDao = require('../infra/candidato-dao');
const VotacaoDao = require('../infra/votacao-dao');
const QuocienteEleitoral = require('../modelos/quocienteEleitoral');

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
   
    totaliza() {
        return function(req, res) {
            _calculaQuocienteEleitoral(req.connection, req.params.id)
                .then((quocienteEleitoral) => {
                    _calculaQuocientePartidario(req.connection, req.params.id, quocienteEleitoral)
                        .then((quocientePartidario) => {
                            _proclamaEleitos()
                                .then(res.marko(require('../views/eleicao/resultado/resultado.marko'), {quocienteEleitoral, quocientePartidario}))
                                .catch(erro => console.log('Erro ao proclamar os eleitos.'));   
                        })
                        .catch(erro => console.log('Erro ao calcular o quociente partidário.'));
                })
                .catch(erro => console.log('Erro ao calcular o quociente eleitoral.'));
        };
    }
}

function _calculaQuocienteEleitoral(connection, idEleicao){
        return new Promise(function(resolve, reject) {
        const eleicaoDao = new EleicaoDao(connection);
        eleicaoDao.calculaQuocienteEleitoral(idEleicao)
            .then(qe => {
                const quocienteEleitoral = new QuocienteEleitoral(idEleicao, qe.vagas, qe.votosNominais, qe.votosLegenda, qe.votosBrancos, qe.votosNulos, qe.votosAnulados);
                resolve(quocienteEleitoral);
            }).catch(erro => console.log('Erro ao tentar calcular o quociente eleitoral'));
    });
}

function _calculaQuocientePartidario(connection, idEleicao, quocienteEleitoral) {
    return new Promise(function(resolve, reject){
        const partidoColigacaoDao = new PartidoColigacaoDao(connection);
        partidoColigacaoDao.listaPorIdEleicao(idEleicao)
            .then(partidos => {
                const votacaoDao = new VotacaoDao(connection);
                var qp = partidos.map((partido) => {
                    return new Promise((resolve) => {
                        if (partido.coligacao_id == null) {
                            const idPartidoEleicao = partido.partido_eleicao_id;
                            votacaoDao.buscaVotosLegendaPartido(idEleicao, idPartidoEleicao)
                            .then(votosLegendaPartido => {
                                votacaoDao.buscaVotosNominaisPartido(idEleicao, idPartidoEleicao)
                                    .then(votosNominaisPartido => {
                                        var votosValidos = votosLegendaPartido + votosNominaisPartido;
                                        var qtdVagasObtidas = Math.trunc(votosValidos / quocienteEleitoral.quocienteEleitoral);    
                                        partidoColigacaoDao.buscaQuantidadeCandidatoVotacaoMinimaPartido(idEleicao, idPartidoEleicao, quocienteEleitoral.clausulaBarreira)
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
                                            var qtdVagasObtidas = Math.trunc(votosValidos / quocienteEleitoral.quocienteEleitoral);        
                                            partidoColigacaoDao.buscaQuantidadeCandidatoVotacaoMinimaColigacao(idEleicao, idColigacao, quocienteEleitoral.clausulaBarreira)
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
                        resolve(quocientePartidario);
                });
            })
            .catch(erro => console.log(erro));
    });
}

function _proclamaEleitos() {
    return new Promise(function(resolve, reject){
        console.log('proclamaEleitos');
        
        //recuperar os dados de Quociente partidário
        //recuperar os dados de Quociente eleitoral
        //eleger os eleitos por Q.P
        //eleger os eleitos por Média
        
        
        resolve();
    });
}

module.exports = EleicaoControlador;