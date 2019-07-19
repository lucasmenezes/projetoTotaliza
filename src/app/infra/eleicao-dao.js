class EleicaoDao {

    /*constructor(db) {
        this._db = db;
    }*/

    lista() {
        console.log('lista eleições dao');
        return new Promise(function(resolve, reject){
            const eleicoes = [
                {id: '1', titulo: 'Eleição Municipal de Santos - 2022', data: '07/10/2022', tipo: 'Proporcional', uf: 'SP', quantCandidatos: '345'},
                {id: '2', titulo: 'Eleição Municipal de Borá - 2022', data: '07/10/2022', tipo: 'Proporcional', uf: 'SP', quantCandidatos: '221'},
                {id: '3', titulo: 'Eleição Municipal de Aguaí - 2022', data: '07/10/2022', tipo: 'Proporcional', uf: 'SP', quantCandidatos: '154'},
                {id: '4', titulo: 'Eleição Municipal de Bom Jardim - 2022', data: '07/10/2022', tipo: 'Proporcional', uf: 'RJ', quantCandidatos: '300'}
            ];
            console.log(eleicoes);                
            return resolve(eleicoes);
        });
        
    }
}

module.exports = EleicaoDao;