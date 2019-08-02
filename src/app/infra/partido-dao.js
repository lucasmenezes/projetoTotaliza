class PartidoDao {
    constructor(connection) {
        this._connection = connection;
    }

    lista() {

    }

    listaPorIdEleicao() {
        return new Promise((resolve, reject) => 
            this._connection.query('', (err, partidos) => {
                if (err) return reject(err);
                resolve(partidos);
            })
        );
    }
}

module.exports = PartidoDao;