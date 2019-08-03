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
            this._connection.query(
                 'SELECT e.*, c.nome as cargo_nome FROM `totaliza`.`eleicao` AS e ' 
            +    'INNER JOIN `totaliza`.`cargo_ano_base` AS cab ON e.cargo_ano_base_id = cab.id '
            +    'INNER JOIN `totaliza`.`cargo` AS c ON cab.cargo_id = c.id '
            +    'WHERE e.id = ?',
            [id],
            (erro, eleicao) => {
                if (erro) return reject('Não foi possível recuperar a eleição desejada.');
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