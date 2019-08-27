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

    calculaQuocienteEleitoral(id) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'SELECT e.id as id, '
               +'e.quantidade_vagas as vagas, '
               +'e.votos_nulos as votosNulos, '
               +'e.votos_brancos as votosBrancos, '
               +'e.votos_anulados as votosAnulados, '
               +'(SELECT SUM(quantidade_votos) FROM votacao WHERE candidato_id IS NOT NULL) AS votosNominais, '
               +'(SELECT SUM(quantidade_votos) FROM votacao WHERE candidato_id IS NULL) AS votosLegenda, '
               +'((SELECT SUM(quantidade_votos) FROM votacao WHERE candidato_id IS NOT NULL) + (SELECT SUM(quantidade_votos) FROM votacao WHERE candidato_id IS NULL)) AS votosValidos '
               //+'ceil((((SELECT SUM(quantidade_votos) FROM votacao WHERE candidato_id IS NOT NULL) + (SELECT SUM(quantidade_votos) FROM votacao WHERE candidato_id IS NULL)) / e.quantidade_vagas)) AS quociente_eleitoral, ROUND((ceil((((SELECT SUM(quantidade_votos) FROM votacao WHERE candidato_id IS NOT NULL) + (SELECT SUM(quantidade_votos) FROM votacao WHERE candidato_id IS NULL)) / e.quantidade_vagas)) / 10), 2) AS clausula_barreira '
               +'FROM votacao AS v '
               +'LEFT JOIN candidato AS c ON v.candidato_id = c.id '
               +'LEFT JOIN partido_eleicao AS pe ON pe.id = v.partido_eleicao_id '
               +'INNER JOIN eleicao AS e ON pe.eleicao_id = e.id '
               +'WHERE e.id = ? GROUP BY e.id ',  
            [id], 
            (erro, quocienteEleitoral) => {
                if (erro) return reject(erro/*'Não foi possível recuperar o quociente eleitoral da eleição'*/)
                return resolve(quocienteEleitoral[0]);
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