class VotacaoDao {
    constructor(connection) {
        this._connection = connection;
    }

    buscaVotosLegendaPartido(idEleicao, idPartidoEleicao) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'SELECT SUM(v.quantidade_votos) AS votos_legenda FROM votacao AS v '
               +'INNER JOIN partido_eleicao AS pe ON v.partido_eleicao_id = pe.id '
               +'WHERE pe.eleicao_id = ? AND pe.id = ? ',
               [idEleicao, idPartidoEleicao],
               (err, votosLegenda) => {
                    if (err) reject('Não foi possível recuperar a quantidade de votos de legenda do partido solicitado.');
                    resolve(votosLegenda[0].votos_legenda);
               });
        });
    }

    buscaVotosLegendaColigacao(idEleicao, idColigacao) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'SELECT SUM(v.quantidade_votos) AS votos_legenda FROM votacao AS v '
               +'INNER JOIN partido_eleicao AS pe ON v.partido_eleicao_id = pe.id '
               +'INNER JOIN partido AS p ON pe.partido_id = p.id '
               +'INNER JOIN partido_coligacao AS pc ON p.id = pc.partido_id '
               +'INNER JOIN coligacao AS c ON pc.coligacao_id = c.id '
               +'WHERE pe.eleicao_id = ? AND c.id = ? ',
                [idEleicao, idColigacao],
                (err, votosLegenda) => {
                    if (err) reject('Não foi possível recuperar a quantidade de votos de legenda da coligação solicitada.');
                    resolve(votosLegenda[0].votos_legenda);
                });
        });
    }

    buscaVotosNominaisPartido(idEleicao, idPartidoEleicao) {
        return new Promise((resolve, reject) => {
            this._connection.query(
            'SELECT SUM(quantidade_votos) AS votos_nominais '
            +'FROM votacao AS v '
            +'INNER JOIN candidato AS c ON v.candidato_id = c.id '
            +'INNER JOIN partido_eleicao AS pe ON c.partido_eleicao_id = pe.id '
            +'WHERE pe.eleicao_id = ? AND pe.id = ? ', 
            [idEleicao, idPartidoEleicao], (err, votosNominais) => {
                if (err) reject('Não foi possível recuperar votos nominais do partido.')
                resolve(votosNominais[0].votos_nominais)
            });
        });
    }

    buscaVotosNominaisColigacao(idEleicao, idColigacao) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                 'SELECT SUM(quantidade_votos) AS votos_nominais FROM votacao AS v '
               + 'INNER JOIN candidato AS c ON v.candidato_id = c.id '
               + 'INNER JOIN partido_eleicao AS pe ON c.partido_eleicao_id = pe.id '
               + 'INNER JOIN partido_coligacao AS pc ON pe.partido_id = pc.partido_id '
               + 'INNER JOIN coligacao AS co ON co.id = pc.coligacao_id '
               + 'WHERE pe.eleicao_id = ? AND co.id = ? ',
            [idEleicao, idColigacao], (err, votosNominais) => {
                if (err) reject('Não foi possível recuperar votos nominais da coligação.')
                resolve(votosNominais[0].votos_nominais)
            });
        });
    }

    buscaVotos(idEleicao, idCandidato) {

    }
}

module.exports = VotacaoDao;