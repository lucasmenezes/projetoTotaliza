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

    //https://itnext.io/https-medium-com-popov4ik4-what-about-promises-in-loops-e94c97ad39c0

    /*
    async function someFunction() {
        const myArray = [1, 2, 3];
        const connection = mysql.createPool({ options });
        let finalArray = [];
        myArray.forEach((value) => { // standard forEach
            finalArray.push(asyncFunction(connection, value).then((result) => {
                finalValue.asyncFunctionValue = result.asyncFunctionValue; // giving instructions
                return finalValue; // important to return the value
            }));
        });
        const resolvedFinalArray = await Promise.all(finalArray); // resolving all promises
        return functionThatUsesResolvedValues(resolvedFinalArray);
    };
    */

    totaliza() {
        return function(req, res) {
            const idEleicao = req.params.id;
            const eleicaoDao = new EleicaoDao(req.connection);
            eleicaoDao.calculaQuocienteEleitoral(idEleicao)
                .then(quocienteEleitoral => {
                    const partidoColigacaoDao = new PartidoColigacaoDao(req.connection);
                    partidoColigacaoDao.listaPorIdEleicao(idEleicao)
                        .then(partidos => {
                            const votacaoDao = new VotacaoDao(req.connection);
                            var quocientePartidario = [];
                            partidos.forEach((partido) => {
                                if (partido.coligacao_id == null) {
                                    const idPartidoEleicao = partido.partido_eleicao_id;
                                    quocientePartidario.push(
                                        votacaoDao.buscaVotosLegendaPartido(idEleicao, idPartidoEleicao)
                                            .then(votosLegendaPartido => {
                                                console.log('votosLegendaPartido ' + votosLegendaPartido);
                                                votacaoDao.buscaVotosNominaisPartido(idEleicao, idPartidoEleicao)
                                                    .then(votosNominaisPartido => {
                                                        console.log('votosNominaisPartido ' + votosNominaisPartido);
                                                        var votosValidos = votosLegendaPartido + votosNominaisPartido;
                                                        var qtdVagasObtidas = Math.trunc(votosValidos / quocienteEleitoral.quociente_eleitoral);    
                                                        partidoColigacaoDao.buscaQuantidadeCandidatoVotacaoMinimaPartido(idEleicao, idPartidoEleicao, quocienteEleitoral.clausula_barreira)
                                                            .then(qtdCandidatosVotacaoMinima => {
                                                                console.log('qtdCandidatosVotacaoMinima ' + qtdCandidatosVotacaoMinima);
                                                                var qtdVagasPreenchidas = (qtdCandidatosVotacaoMinima >= qtdVagasObtidas ?  qtdVagasObtidas : qtdCandidatosVotacaoMinima);
                                                                partido.votosLegenda = votosLegendaPartido;
                                                                partido.votosLegenda = votosNominaisPartido;
                                                                partido.votosValidos = votosValidos;
                                                                partido.qtdVagasObtidas = qtdVagasObtidas;
                                                                partido.qtdCandidatosQE = qtdCandidatosVotacaoMinima;
                                                                partido.vagasPreenchidas = qtdVagasPreenchidas;    

                                                                return partido;
                                                            })
                                                            .catch(erro => console.log(erro));
                                                    })
                                                    .catch(erro => console.log(erro));
                                            })
                                            .catch(erro => console.log(erro)));    
                                } else {
                                    const idColigacao = partido.coligacao_id;
                                    quocientePartidario.push(
                                        votacaoDao.buscaVotosLegendaColigacao(idEleicao, idColigacao)
                                            .then(votosLegendaColigacao => {
                                                console.log('votosLegendaColigacao ' + votosLegendaColigacao);
                                                votacaoDao.buscaVotosNominaisColigacao(idEleicao, idColigacao)
                                                    .then(votosNominaisColigacao => {
                                                        console.log('votosNominaisColigacao ' + votosNominaisColigacao);
                                                        var votosValidos = votosLegendaColigacao + votosNominaisColigacao;
                                                        var qtdVagasObtidas = Math.trunc(votosValidos / quocienteEleitoral.quociente_eleitoral);        
                                                        partidoColigacaoDao.buscaQuantidadeCandidatoVotacaoMinimaColigacao(idEleicao, idColigacao, quocienteEleitoral.clausula_barreira)
                                                            .then(qtdCandidatosVotacaoMinima => {
                                                                console.log('qtdCandidatosVotacaoMinima ' + qtdCandidatosVotacaoMinima);
                                                                var qtdVagasPreenchidas = (qtdCandidatosVotacaoMinima >= qtdVagasObtidas ? qtdVagasObtidas : qtdCandidatosVotacaoMinima);
                                                                partido.votosLegenda = votosLegendaColigacao;
                                                                partido.votosLegenda = votosNominaisColigacao;
                                                                partido.votosValidos = votosValidos;
                                                                partido.qtdVagasObtidas = qtdVagasObtidas;
                                                                partido.qtdCandidatosQE = qtdCandidatosVotacaoMinima;
                                                                partido.vagasPreenchidas = qtdVagasPreenchidas;
                                                                console.log(partido);
                                                                return partido;    
                                                            })
                                                            .catch(erro => console.log(erro));
                                                    })
                                                    .catch(erro => console.log(erro));    
                                            })
                                            .catch(erro => console.log(erro)));
                                }
                            });
                            
                            /*
                            for (var partido of partidos) {
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
                                                            partido.votosLegenda = votosNominaisPartido;
                                                            partido.votosValidos = votosValidos;
                                                            partido.qtdVagasObtidas = qtdVagasObtidas;
                                                            partido.qtdCandidatosQE = qtdCandidatosVotacaoMinima;
                                                            partido.vagasPreenchidas = qtdVagasPreenchidas;
                                                            quocientePartidario.push(partido);
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
                                                            partido.votosLegenda = votosNominaisColigacao;
                                                            partido.votosValidos = votosValidos;
                                                            partido.qtdVagasObtidas = qtdVagasObtidas;
                                                            partido.qtdCandidatosQE = qtdCandidatosVotacaoMinima;
                                                            partido.vagasPreenchidas = qtdVagasPreenchidas;
                                                            quocientePartidario.push(partido);
                                                        })
                                                        .catch(erro => console.log(erro));
                                            })
                                            .catch(erro => console.log(erro));
                                        })
                                        .catch(erro => console.log(erro));
                                }  
                            } 
                            */           
                           const quocientePartidarioFinal = Promise.all(quocientePartidario);
                           res.marko(require('../views/eleicao/resultado/resultado.marko'), {quocienteEleitoral, quocientePartidarioFinal})
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
            const eleicaoDao = new EleicaoDao(req.connection);
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