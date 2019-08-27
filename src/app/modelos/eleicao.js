class Eleicao {
    constructor() {
        this.id;
        this.nome;
        this.descricao;
        this.tipo;
        this.data;
        this.status;
        this.votosNulos;
        this.votosBrancos;
        this.votosAnulados;
        this.uf;
        this.quantidadeVagas;
    }   

    get id() {
        return this.id;
    }
}

module.exports = Eleicao;