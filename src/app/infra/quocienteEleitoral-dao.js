require('../modelos/quocienteEleitoral');

class QuocienteEleitoralDao {
    constructor(connection) {
        this._connection = connection;
    }

    inclui(quocienteEleitoral) {
        return new Promise((resolve, reject) => {
            this._connection.query('', [], (erro, resolve) => {
                if (erro) reject('Não foi possível incluir o quociente eleitoral');
                resolve();
            });       
        });
    }

    lista() {
        console.log('lista');
    }

    recuperaPeloId(id) {
        return new Promise((resolve, reject) => {

        });
    }

    recuperaPeloIdEleicao(idEleicao) {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT * FROM quociente_partidario WHERE eleicao_id = ?', [idEleicao], (erro, quocienteEleitoral) => {
                if (erro) reject('Não foi possível recuperar o quociente eleitoral');
                resolve(quocienteEleitoral);
            });
        });
    }
}



module.exports = QuocienteEleitoralDao;