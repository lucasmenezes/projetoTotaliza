class QuocienteEleitoral {
    constructor(id, idEleicao, quantidadeVagas, quantidadeVotosNominais, quantidadeVotosLegenda) {
        this.id = id;
        this.idEleicao = idEleicao;
        this.quantidadeVagas = quantidadeVagas;
        this.quantidadeVotosNominais = quantidadeVotosNominais;
        this.quantidadeVotosLegenda = quantidadeVotosLegenda;
    }

    get id() {
        return this.id;
    }

    get idEleicao() {
        return this.idEleicao;
    }

    get quantidadeVagas() {
        return this.quantidadeVagas;
    }

    get quantidadeVotosNominais() {
        return this.quantidadeNominais;
    }

    get quantidadeVotosLegenda() {
        return this.quantidadeVotosLegenda;
    }

    get quantidadeVotosValidos() {
        return this.quantidadeVotosLegenda + this.quantidadeVotosNominais;
    }

    get quocienteEleitoral() {
        return Math.round(this.quantidadeVotosValidos / this.quantidadeVagas);
    }

    get clausula_barreira() {
        return this.quocienteEleitoral / 10;
    }
}

module.exports = QuocienteEleitoral;