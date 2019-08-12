class PartidoDao {
    constructor(connection) {
        this._connection = connection;
    }

    lista() {

    }

    listaPorIdEleicao(idEleicao) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'SELECT e.id AS eleicao_id, '
               +'       IF (c.id IS NOT NULL, c.sigla, p.sigla) AS sigla, ' 
               +'       c.id AS coligacao_id, '
               +'       IF (c.id IS NOT NULL, NULL, pe.id) AS partido_eleicao_id '
               +'FROM partido_eleicao AS pe '
               +'INNER JOIN eleicao AS e ON e.id = pe.eleicao_id '
               +'INNER JOIN partido as p ON p.id = pe.partido_id '
               +'LEFT JOIN partido_coligacao AS pc ON pc.partido_id = p.id '
               +'LEFT JOIN coligacao AS c ON pc.coligacao_id = c.id '
               +'WHERE e.id = ? '
               +'GROUP BY e.id, c.id '
               +'ORDER BY sigla'    
            ,
            [idEleicao],
            (err, partidos) => {
                if (err) return reject('Não possível recuperar os partidos participantes da eleição.');
                return resolve(partidos);
            });
        });
    }

    listaVotosPorIdEleicao(idEleicao) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'SELECT pe.eleicao_id AS eleicao_id, ' 
                +    'pe.id AS partido_eleicao_id, '
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
                if (err) return reject('Não foi possível recuperar a votação dos partidos.');
                resolve(partidos);
            });
        });
    }

    listaVotosPorIdEleicaoIdPartidoEleicao(idEleicao, idPartidoEleicao) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'SELECT SUM(v.quantidade_votos) AS votos_legenda FROM votacao AS v '
               +'INNER JOIN partido_eleicao AS pe ON v.partido_eleicao_id = pe.id '
               +'INNER JOIN eleicao AS e ON pe.eleicao_id = e.id '
               +'WHERE e.id = ? AND pe.id = ? ',
               [idEleicao, idPartidoEleicao],
               (err, votosLegenda) => {
                    if (err) reject('Não foi possível recuperar a quantidade de votos de legenda do partido solicitado.');
                    resolve(votosLegenda[0].votos_legenda);
               });
        });
    }

    listaVotosPorIdEleicaoIdColigacao(idEleicao, idColigacao) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'SELECT SUM(v.quantidade_votos) AS votos_legenda FROM votacao AS v '
               +'INNER JOIN partido_eleicao AS pe ON v.partido_eleicao_id = pe.id '
               +'INNER JOIN partido AS p ON pe.partido_id = p.id '
               +'INNER JOIN eleicao AS e ON pe.eleicao_id = e.id '
               +'INNER JOIN partido_coligacao AS pc ON p.id = pc.partido_id '
               +'INNER JOIN coligacao AS c ON pc.coligacao_id = c.id '
               +'WHERE e.id = ? AND c.id = ? ',
                [idEleicao, idColigacao],
                (err, votosLegenda) => {
                    if (err) reject('Não foi possível recuperar a quantidade de votos de legenda da coligação solicitada.');
                    resolve(votosLegenda[0].votos_legenda);
                });
        });
    }
}

module.exports = PartidoDao;