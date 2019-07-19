const BaseControlador = require('../controladores/base-controlador');
const baseControlador = new BaseControlador();

module.exports = (app) => {
    console.log('base rotas');

    app.get(BaseControlador.rotas().home, baseControlador.home());

}