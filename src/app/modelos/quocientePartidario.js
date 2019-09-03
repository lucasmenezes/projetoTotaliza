class QuocientePartidario {
    constructor(idEleicao, idPartidoEleicao, idColigacao, sigla, votosNominais, votosLegenda, votosValidos, vagasObtidasQP, candidatosQE, vagasPreenchidas) {
        this._idEleicao = idEleicao;
        this._idPartidoEleicao = idPartidoEleicao;
        this._idColigacao = idColigacao;
        this._sigla = sigla;
        this._votosNominais = votosNominais;
        this._votosLegenda = votosLegenda;
        this._votosValidos = votosValidos;
        this._vagasObtidasQP = vagasObtidasQP;
        this._candidatosQE = candidatosQE;
        this._vagasPreenchidas = vagasPreenchidas; 
    }

    get id() {
        return this._id;
    }

    get idEleicao() {
        return this._idEleicao;
    }

    get idPartidoEleicao() {
        return this._idPartidoEleicao;
    }

    get idColigacao() {
        return this._idColigacao;
    }

    get sigla() {
        return this._sigla;
    }

    get votosNominais() {
        return this._votosNominais;
    }

    get votosLegenda() {
        return this._votosLegenda;
    }

    get votosValidos() {
        return this.votosLegenda + this.votosNominais;
    }

    get vagasObtidasQP() {
        return this._vagasObtidasQP;
    }
    
    get candidatosQE() {
        return this._candidatosQE;
    }

    get vagasPreenchidas() {
        return this._vagasPreenchidas;
    }
}

module.exports = QuocientePartidario;