class CandidatoDao {

    constructor(connection) {
        this._connection = connection;
    }

    listaPorIdEleicao(idEleicao) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                 'SELECT  c.id as id, '
                +       'c.numero as numero, ' 
                +       'p.sigla, ' 
                +       'c.nome as nome, '
                +       'c.nome_urna as nome_urna, '
                +       'c.data_nascimento as data_nascimento, ' 
                +       'c.partido_eleicao_id as partido_eleicao_id, '
                +       'v.id AS id_votacao, '
                +       'v.quantidade_votos AS quantidade_votos '
                + 'FROM candidato AS c '
                + 'INNER JOIN partido_eleicao AS pe ON c.partido_eleicao_id = pe.id '
                + 'INNER JOIN partido AS p ON pe.partido_id = p.id '
                + 'LEFT JOIN votacao AS v ON c.id = v.candidato_id '
                + 'WHERE pe.eleicao_id = ? '
                + 'ORDER BY v.quantidade_votos DESC, c.data_nascimento ASC', 
                [idEleicao],
            (erro, candidatos) => {
                if (erro) return reject(erro);
                resolve(candidatos);
            });
        });
    }
}

module.exports = CandidatoDao;