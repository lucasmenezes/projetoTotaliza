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
               +'       IF (c.id IS NOT NULL, c.sigla, p.sigla) AS sigla, ' 
               +'       c.id AS coligacao_id, '
               +'       IF (c.id IS NOT NULL, NULL, pe.id) AS partido_eleicao_id '
               +'FROM partido_eleicao AS pe '
               +'INNER JOIN partido as p ON p.id = pe.partido_id '
               +'LEFT JOIN partido_coligacao AS pc ON pc.partido_id = p.id '
               +'LEFT JOIN coligacao AS c ON pc.coligacao_id = c.id '
               +'WHERE pe.eleicao_id = ? '
               +'GROUP BY pe.eleicao_id, c.id '
               +'ORDER BY sigla'    
            ,
            [idEleicao],
            (err, partidos) => {
                if (err) return reject('Não possível recuperar os partidos participantes da eleição.');
                console.log('partidos dao');
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

    buscaQuantidadeCandidatoVotacaoMinimaPartido(idEleicao, idPartidoEleicao, votacaoMinima) {
        return new Promise((resolve, reject) => {
            this._connection.query(
             'SELECT COUNT(*) AS qtdCandidatoVotacaoMinima FROM candidato AS c '
            +'INNER JOIN votacao AS v ON c.id = v.candidato_id '
            +'INNER JOIN partido_eleicao AS pe ON c.partido_eleicao_id = pe.id '
            +'WHERE pe.eleicao_id = ? AND pe.id = ? AND v.quantidade_votos >= ? ', 
            [idEleicao, idPartidoEleicao, votacaoMinima], 
            (err, resultado) => {
                if (err) reject('Não foi possível recuperar a quantidade de candidatos que ultrapassaram a cláusula de barreira.');
                resolve(resultado[0].qtdCandidatoVotacaoMinima);
            });
        });
    }

    buscaQuantidadeCandidatoVotacaoMinimaColigacao(idEleicao, idColigacao, votacaoMinima) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'SELECT COUNT(*) AS qtdCandidatoVotacaoMinima FROM candidato AS c '
                +'INNER JOIN votacao AS v ON c.id = v.candidato_id '
                +'INNER JOIN partido_eleicao AS pe ON c.partido_eleicao_id = pe.id '
                +'INNER JOIN partido_coligacao AS pc ON pc.partido_id = pe.partido_id '
                +'INNER JOIN coligacao AS co ON pc.coligacao_id = co.id '
                +'WHERE pe.eleicao_id = ? AND co.id = ? AND v.quantidade_votos >= ? ',  
            [idEleicao, idColigacao, votacaoMinima],
            (err, resultado) => {
                if (err) reject('Não foi possível recuperar a quantidade de candidatos que ultrapassaram a cláusula de barreira.');
                resolve(resultado[0].qtdCandidatoVotacaoMinima);
            });
        });
    }
}

module.exports = PartidoDao;