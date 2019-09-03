class Eleicao {
    constructor(nome, descricao, tipo, data, status, votosNulos, votosBrancos, votosAnulados, uf, quantidadeVagas) {
        this._nome = nome;
        this._descricao = descricao;
        this._tipo = tipo;
        this._data = data;
        this._status = status;
        this._votosNulos = votosNulos;
        this._votosBrancos = votosBrancos;
        this._votosAnulados = votosAnulados;
        this._uf = uf;
        this._quantidadeVagas = quantidadeVagas;
    }   

    get id() {
        return this.id;
    }

    get nome(){
        return this._nome;
    }

    get descricao() {
        return this._descricao;
    }

    get tipo() {
        return this._tipo;
    }

    get data() {
        var date = Date.parse(this._data);
        var dataFormatada = date.toLocaleDateString();
        return dataFormatada;
    }

    get status() {
        return this._status;
    }

    get votosNulos() {
        return this._votosNulos;
    }

    get votosBrancos() {
        return this._votosBrancos;
    }

    get votosAnulados() {
        return this._votosAnulados;
    }

    get uf() {
        return this._uf;
    }

    get quantidadeVagas() {
        return this._quantidadeVagas;
    }
}

module.exports = Eleicao;