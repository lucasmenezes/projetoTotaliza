class QuocienteEleitoral {
    constructor(idEleicao, vagas, votosNominais, votosLegenda, votosBrancos, votosNulos, votosAnulados) {
        this._idEleicao = idEleicao;
        this._vagas = vagas;
        this._votosNominais = votosNominais;
        this._votosLegenda = votosLegenda;
        this._votosBrancos = votosBrancos;
        this._votosNulos = votosNulos;
        this._votosAnulados = votosAnulados;
    }

    get idEleicao() {
        return parseInt(this._idEleicao);
    }

    get vagas() {
        return this._vagas;
    }

    get votosNominais() {
        return this._votosNominais;
    }

    get votosLegenda() {
        return this._votosLegenda;
    }

    get votosBrancos() {
        return this._votosBrancos;
    }

    get votosNulos() {
        return this._votosNulos;
    }

    get votosAnulados() {
        return this._votosAnulados;
    }

    get votosValidos() {
        return this._votosLegenda + this._votosNominais;
    }

    get quocienteEleitoral() {
        if (this.vagas && this.vagas > 0) {
            return Math.round(this.votosValidos / this.vagas);
        }         
        else {
            return 0;
        }
    }

    get clausulaBarreira() {
        return this.quocienteEleitoral / 10;
    }
}

module.exports = QuocienteEleitoral;