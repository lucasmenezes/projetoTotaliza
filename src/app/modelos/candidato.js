class Candidato {

    get id() {
        return this._id;
    }

    get numero() {
        return this._numero;
    }

    get nomeUrna() {
        return this._nomeUrna;
    }

    get dataNascimento() {
        return this._dataNascimento;
    }

    get partidoEleicaoId() {
        return this._partidoEleicaoId;
    }
}

module.exports = Candidato;