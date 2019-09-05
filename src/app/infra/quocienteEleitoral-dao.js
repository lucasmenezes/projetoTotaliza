require('../modelos/quocienteEleitoral');

class QuocienteEleitoralDao {
    constructor(connection) {
        this._connection = connection;
    }

    inclui(quocienteEleitoral) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'INSERT INTO `totaliza`.`quociente_eleitoral` '
                +'('
                    +'`quantidade_votos`, '
                    +'`quantidade_votos_legenda`, '
                    +'`quantidade_votos_validos`, '
                    +'`quociente_eleitoral`, '
                    +'`clausulaBarreira`, '
                    +'`eleicao_id`) '
                +'VALUES '
                    +'(?, '   //quantidade_votos
                    +'?, '   //quantidade_votos_legenda
                    +'?, '   //quantidade_votos_validos
                    +'?, '   //quociente_eleitoral
                    +'?, '   //clausula_barreira
                    +'?) ',  //eleicao_id
                [quocienteEleitoral.votosNominais, quocienteEleitoral.votosLegenda, quocienteEleitoral.votosValidos, quocienteEleitoral.quocienteEleitoral, quocienteEleitoral.clausulaBarreira, quocienteEleitoral.idEleicao], 
                (erro) => {
                    if (erro) reject(erro/*'Não foi possível incluir o quociente eleitoral'*/);
                    return resolve();
            });       
        });
    }

    recuperaPeloId(id) {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT * FROM quociente_partidario WHERE id = ?', [id], (erro) => {
                if (erro) reject('Não foi possível recuperar o quociente eleitoral');
                return resolve(quocienteEleitoral);
            });
        });
    }

    recuperaPeloIdEleicao(idEleicao) {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT * FROM quociente_partidario WHERE eleicao_id = ?', [idEleicao], (erro, quocienteEleitoral) => {
                if (erro) reject('Não foi possível recuperar o quociente eleitoral');
                return resolve(quocienteEleitoral);
            });
        });
    }
}



module.exports = QuocienteEleitoralDao;