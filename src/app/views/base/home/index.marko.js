// Compiled using marko@4.18.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projetototaliza$1.0.0/src/app/views/base/home/index.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=\"description\" content=\"\"> <title>Projeto Totaliza</title><link rel=\"stylesheet\" type=\"text/css\" href=\"/estatico/css/bootstrap.min.css\"> <link rel=\"stylesheet\" type=\"text/css\" href=\"/estatico/css/estilo.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\"><a class=\"navbar-brand\" href=\"\">Projeto Totaliza</a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\"><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"/\">Home <span class=\"sr-only\">(current)</span></a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/eleicoes\">Eleições</a></li><li class=\"nav-item\"><a class=\"nav-link disabled\" href=\"\" tabindex=\"-1\" aria-disabled=\"true\">Em breve</a></li><li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" href=\"\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Em breve</a><div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\"><a class=\"dropdown-item\" href=\"\">Em breve</a><a class=\"dropdown-item\" href=\"\">Em breve</a><a class=\"dropdown-item\" href=\"\">Em breve</a></div></li></ul><form class=\"form-inline my-2 my-lg-0\"><input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Em breve...\" aria-label=\"Search\"><button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Buscar</button></form></div></nav><main role=\"main\" class=\"container\"><div class=\"starter-template\"><h3><small class=\"text-muted\">Bem vindo ao </small>Projeto Totaliza</h3><br><p>O projeto totaliza é uma ferramenta que permite realizar simulações de resultados de eleições, baseando-se no conjunto normativo eleitoral brasileiro.</p><p>A iniciativa não tem fins lucrativos, tampouco o objetivo de colocar em dúvida os cálculos e procedimentos realizados pelos sistemas oficiais da Justiça Eleitoral. O objetivo da ferramenta é proporcionar a oportunidade de entender melhor como são eleitos nossos representantes e como é feita a distribuição das vagas em eleições proporcionais.</p> </div></main><script src=\"/estatico/js/jquery-3.4.1.min.js\"></script><script src=\"/estatico/js/popper.min.js\"></script><script src=\"/estatico/js/bootstrap.min.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "41");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projetototaliza$1.0.0/src/app/views/base/home/index.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
