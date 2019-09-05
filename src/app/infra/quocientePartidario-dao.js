require('../modelos/quocientePartidario');

class QuocientePartidarioDao {
    constructor(connection) {
        this._connection = connection;
    }

    inclui(quocientePartidario) {
        console.log('inclui quociente partidario');
        console.log(quocientePartidario);
        return new Promise((resolve, reject) => {
            this._connection.query(
                'INSERT INTO `totaliza`.`quociente_partidario` '
                    +'(`quantidade_votos_nominais`, '
                    +'`quantidade_votos_legenda`, '
                    +'`quantidade_votos_validos`, '
                    +'`quantidade_vagas_obtidas_qp`, '
                    +'`quantidade_candidatos_qe`, '
                    +'`quantidade_vagas_preenchidas`, '
                    +'`partido_eleicao_id`, '
                    +'`coligacao_id`, '
                    +'`eleicao_id`) '
                +'VALUES '
                    +'(?, ' //quantidade_votos_nominais
                    +'?, ' //quantidade_votos_legenda
                    +'?, ' //quantidade_votos_validos
                    +'?, ' //quantidade_vagas_obtidas_qp
                    +'?, ' //quantidade_candidatos_qe
                    +'?, ' //quantidade_vagas_preenchidas       
                    +'?, ' //partido_eleicao_id
                    +'?, ' //coligacao_id
                    +'?)',  //eleicao_id: }>
                [
                    quocientePartidario.votosNominais, 
                    quocientePartidario.votosLegenda, 
                    quocientePartidario.votosValidos, 
                    quocientePartidario.vagasObtidasQP, 
                    quocientePartidario.candidatosQE, 
                    quocientePartidario.vagasPreenchidas, 
                    quocientePartidario.idPartidoEleicao, 
                    quocientePartidario.idColigacao, 
                    quocientePartidario.idEleicao
                ], 
                (erro) => {
                    if (erro) reject(erro);
                    return resolve();
            });
        });
    }

    recuperaPeloId(id) {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT * FROM quociente_partidario WHERE id = ?', [id], (erro, quocientePartidario) => {
                if (erro) reject('Não foi possível recuperar o quociente partidário');
                return resolve(quocientePartidario);
            });
        });
    }
}

module.exports = QuocientePartidarioDao;