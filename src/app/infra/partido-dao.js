class PartidoDao {
    constructor(connection) {
        this._connection = connection;
    }

    lista() {

    }

    listaPorIdEleicao(idEleicao) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'SELECT pe.eleicao_id AS eleicao_id, ' 
                +    'pe.id AS eleicao_id, '
                +    'p.id AS id, '
                +    'c.id AS coligacao_id, '
                +    'p.numero AS numero, '
                +    'p.sigla AS sigla, '
                +    'p.nome AS nome, ' 
                +    'c.nome AS nome_coligacao, '
                +    'c.sigla AS sigla_coligacao, '
                +    'v.quantidade_votos ' 
                + 'FROM partido_eleicao AS pe '
                + 'INNER JOIN partido AS p ON pe.partido_id = p.id '
                + 'LEFT JOIN partido_coligacao AS pc ON pc.partido_id = p.id '
                + 'LEFT JOIN coligacao AS c ON pc.coligacao_id = c.id '
                + 'LEFT JOIN votacao AS v ON v.partido_eleicao_id = pe.id '
                + 'WHERE pe.eleicao_id = ?'
                + 'ORDER BY c.nome, p.numero',
                [idEleicao],
            (err, partidos) => {
                if (err) return reject(err);
                resolve(partidos);
            });
            
        });
    }
}

module.exports = PartidoDao;