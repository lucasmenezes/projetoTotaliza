// Compiled using marko@4.18.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projetototaliza$1.0.0/src/app/views/eleicao/resultado/resultado.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=\"description\" content=\"\"> <title>Projeto Totaliza</title><link rel=\"stylesheet\" type=\"text/css\" href=\"/estatico/css/bootstrap.min.css\"> <link rel=\"stylesheet\" type=\"text/css\" href=\"/estatico/css/estilo.css\"><link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"></head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\"><a class=\"navbar-brand\" href=\"/\">Projeto Totaliza</a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\"><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"/\">Home <span class=\"sr-only\">(current)</span></a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/eleicoes\">Eleições</a></li><li class=\"nav-item\"><a class=\"nav-link disabled\" href=\"\" tabindex=\"-1\" aria-disabled=\"true\">Em breve</a></li><li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" href=\"\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Em breve</a><div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\"><a class=\"dropdown-item\" href=\"\">Em breve</a><a class=\"dropdown-item\" href=\"\">Em breve</a><a class=\"dropdown-item\" href=\"\">Em breve</a></div></li></ul><form class=\"form-inline my-2 my-lg-0\"><input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Em breve...\" aria-label=\"Search\"><button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Buscar</button></form></div></nav><main role=\"main\" class=\"container\"><div class=\"starter-template\"><div id=\"sanfona1\"><div class=\"card\"><div class=\"card-header\" id=\"cabecalho-sanfona1\"><h5 class=\"mb-0\"><button class=\"btn\" data-toggle=\"collapse\" data-target=\"#corpo-sanfona1\" aria-expanded=\"false\" aria-controls=\"corpo-sanfona1\"><h4>Quociente Eleitoral (Q.E)</h4></button></h5></div><div id=\"corpo-sanfona1\" class=\"collapse\" aria-labelledby=\"cabecalho-sanfona1\" data-parent=\"#sanfona1\"><div class=\"card-body\"><div class=\"row\"><div class=\"col\"><strong>Vagas (A):</strong> " +
    marko_escapeXml(data.quocienteEleitoral.quantidade_vagas) +
    "</div></div><div class=\"row\"><div class=\"col\"><strong>Votos (B):</strong> " +
    marko_escapeXml(data.quocienteEleitoral.votos_nominais) +
    "</div></div><div class=\"row\"><div class=\"col\"><strong>Votos de legenda (C):</strong> " +
    marko_escapeXml(data.quocienteEleitoral.votos_legenda) +
    "</div></div><div class=\"row\"><div class=\"col\"><strong>Votos válidos (nominais + legenda) (D):</strong> " +
    marko_escapeXml(data.quocienteEleitoral.votos_validos) +
    "</div></div><div class=\"row\"><div class=\"col\"><strong>Quociente eleitoral (Q.E) = (D) / (A) (E):</strong> " +
    marko_escapeXml(data.quocienteEleitoral.quociente_eleitoral) +
    "</div></div><div class=\"row\"><div class=\"col\"><strong>10% do Quociente eleitoral:</strong> " +
    marko_escapeXml(data.quocienteEleitoral.clausula_barreira) +
    "</div></div><div class=\"row\"><div class=\"col\"><strong>Votos em branco: </strong> " +
    marko_escapeXml(data.quocienteEleitoral.votos_branco) +
    "</div></div><div class=\"row\"><div class=\"col\"><strong>Votos nulos: </strong> " +
    marko_escapeXml(data.quocienteEleitoral.votos_nulos) +
    "</div></div><div class=\"row\"><div class=\"col\"><strong>Votos anulados e apurados em separado: </strong> " +
    marko_escapeXml(data.quocienteEleitoral.votos_anulados) +
    "</div></div></div></div></div></div><br><div id=\"sanfona2\"><div class=\"card\"><div class=\"card-header\" id=\"cabecalho-sanfona2\"><h5 class=\"mb-0\"><button class=\"btn\" data-toggle=\"collapse\" data-target=\"#corpo-sanfona2\" aria-expanded=\"false\" aria-controls=\"corpo-sanfona2\"><h4>Quociente Partidário (Q.P)</h4></button></h5></div><div id=\"corpo-sanfona2\" class=\"collapse\" aria-labelledby=\"cabecalho-sanfona2\" data-parent=\"#sanfona2\"><div class=\"card-body\"><table class=\"table\"><thead class=\"thead-dark\"><tr class=\"text-center\"><th scope=\"col\" colspan=\"7\">Quociente Partidário (Q.P)</th></tr><tr><th scope=\"col\" class=\"align-middle\">Partido/Coligação</th><th scope=\"col\" class=\"text-center align-middle\">Votos nominais (B)</th><th scope=\"col\" class=\"text-center align-middle\">Votos de legenda (C)</th><th scope=\"col\" class=\"text-center align-middle\">Votos válidos (D)</th><th scope=\"col\" class=\"text-center align-middle\">Q.P. (D)/(E)</th><th scope=\"col\" class=\"text-center align-middle\">Candidatos com 10% Q.E.</th><th scope=\"col\" class=\"text-center align-middle\">Vagas preenchidas</th></tr></thead><tbody><tr><td>PRB / PV / PSDB</td><td class=\"text-center\">451</td><td class=\"text-center\">23</td><td class=\"text-center\">474</td><td class=\"text-center\">4</td><td class=\"text-center\">13</td><td class=\"text-center\">4</td></tr><tr><td class=\"text-center\">PSD</td><td class=\"text-center\">101</td><td class=\"text-center\">9</td><td class=\"text-center\">110</td><td class=\"text-center\">0</td><td class=\"text-center\">4</td><td class=\"text-center\">0</td></tr><tr><td class=\"text-center\">PT / PSB</td><td class=\"text-center\">447</td><td class=\"text-center\">2</td><td class=\"text-center\">449</td><td class=\"text-center\">3</td><td class=\"text-center\">11</td><td class=\"text-center\">3</td></tr></tbody></table></div></div></div></div><br><div id=\"sanfona3\"><div class=\"card\"><div class=\"card-header\" id=\"cabecalho-sanfona3\"><h5 class=\"mb-0\"><button class=\"btn\" data-toggle=\"collapse\" data-target=\"#corpo-sanfona3\" aria-expanded=\"false\" aria-controls=\"corpo-sanfona3\"><h4>Resultado da Eleição</h4></button></h5></div><div id=\"corpo-sanfona3\" class=\"collapse\" aria-labelledby=\"cabecalho-sanfona3\" data-parent=\"#sanfona3\"><div class=\"card-body\"></div></div></div></div></div></main><script src=\"/estatico/js/jquery-3.4.1.min.js\"></script><script src=\"/estatico/js/popper.min.js\"></script><script src=\"/estatico/js/bootstrap.min.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "127");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projetototaliza$1.0.0/src/app/views/eleicao/resultado/resultado.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
