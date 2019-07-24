class EleicaoDao {

    constructor(connection) {
        this._connection = connection;
    }

    lista() {
        return new Promise((resolve, reject) => 
            this._connection.query('select * from eleicao', (err, eleicoes) => {
                if(err) return reject(err);
                resolve(eleicoes);
            })
        );    
    }

    buscaPorId(id) {
        return new Promise((resolve, reject) => {
            this._connection.query('select * from eleicao where id = ?',
            [id],
            (erro, eleicao) => {
                if (erro) return reject('Não foi possível recuperar a eleição desejada.');
                console.log(eleicao[0]);
                return resolve(eleicao[0]);             
            });
        });
    }

    inclui(eleicao) {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    atualiza(eleicao) {
        return new Promise((resolve, reject) => {
            resolve();
        })
    }

    deleta(id) {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}

module.exports = EleicaoDao;