// Compiled using marko@4.18.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projetototaliza$1.0.0/src/app/views/eleicao/detalhe/detalhe.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=\"description\" content=\"\"> <title>Projeto Totaliza</title><link rel=\"stylesheet\" type=\"text/css\" href=\"/estatico/css/bootstrap.min.css\"> <link rel=\"stylesheet\" type=\"text/css\" href=\"/estatico/css/estilo.css\"><link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"></head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\"><a class=\"navbar-brand\" href=\"\">Projeto Totaliza</a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\"><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"/\">Home <span class=\"sr-only\">(current)</span></a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/eleicoes\">Eleições</a></li><li class=\"nav-item\"><a class=\"nav-link disabled\" href=\"\" tabindex=\"-1\" aria-disabled=\"true\">Em breve</a></li><li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" href=\"\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Em breve</a><div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\"><a class=\"dropdown-item\" href=\"\">Em breve</a><a class=\"dropdown-item\" href=\"\">Em breve</a><a class=\"dropdown-item\" href=\"\">Em breve</a></div></li></ul><form class=\"form-inline my-2 my-lg-0\"><input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Em breve...\" aria-label=\"Search\"><button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Buscar</button></form></div></nav><main role=\"main\" class=\"container\"><div class=\"starter-template\"><div id=\"sanfona1\"><div class=\"card\"><div class=\"card-header\" id=\"cabecalho-sanfona1\"><h5 class=\"mb-0\"><button class=\"btn\" data-toggle=\"collapse\" data-target=\"#corpo-sanfona1\" aria-expanded=\"false\" aria-controls=\"corpo-sanfona1\"><h4>eleição</h4></button></h5></div><div id=\"corpo-sanfona1\" class=\"collapse\" aria-labelledby=\"cabecalho-sanfona1\" data-parent=\"#sanfona1\"><div class=\"card-body\"><div class=\"row\"><div class=\"col-8\"><strong>Eleição: </strong><span class=\"text-capitalize\">" +
    marko_escapeXml(data.eleicao.nome) +
    "</span> - <span class=\"text-capitalize\">" +
    marko_escapeXml(data.eleicao.uf) +
    "</span></div><div class=\"col-4\"><strong>Cargo: </strong><span class=\"text-capitalize\">" +
    marko_escapeXml(data.eleicao.cargo_nome) +
    "</span></div></div><div class=\"row\"> <div class=\"col-4\"><strong>Data: </strong><span class=\"text-capitalize\">" +
    marko_escapeXml(data.eleicao.data) +
    "</span></div><div class=\"col-4\"><strong>Vagas: </strong> " +
    marko_escapeXml(data.eleicao.quantidade_vagas) +
    " <i class=\"material-icons align-middle\">edit</i></div><div class=\"col-4\"><strong>Tipo: </strong><span class=\"text-capitalize\">" +
    marko_escapeXml(data.eleicao.tipo) +
    "</span></div></div> <div class=\"row\"><div class=\"col-4\"><strong>Votos nulos: </strong> " +
    marko_escapeXml(data.eleicao.votos_nulos) +
    " <i class=\"material-icons align-middle\">edit</i></div><div class=\"col-4\"><strong>Votos brancos: </strong> " +
    marko_escapeXml(data.eleicao.votos_brancos) +
    " <i class=\"material-icons align-middle\">edit</i></div><div class=\"col-4\"><strong>Status:</strong> " +
    marko_escapeXml(data.eleicao.status) +
    "</div></div></div></div></div></div><br><div id=\"sanfona2\"><div class=\"card\"><div class=\"card-header\" id=\"cabecalho-sanfona2\"><h5 class=\"mb-0\"><button class=\"btn\" data-toggle=\"collapse\" data-target=\"#corpo-sanfona2\" aria-expanded=\"false\" aria-controls=\"corpo-sanfona2\"><h4>partidos & coligações</h4></button></h5></div><div id=\"corpo-sanfona2\" class=\"collapse\" aria-labelledby=\"cabecalho-sanfona2\" data-parent=\"#sanfona2\"><div class=\"card-body\">");

  if (data.partidos && (data.partidos.length > 0)) {
    out.w("<table class=\"table\"><thead class=\"thead-dark\"><tr><th scope=\"col\">n°</th><th scope=\"col\">sigla</th><th scope=\"col\">nome</th><th scope=\"col\">coligação</th><th scope=\"col\">votos (legenda)</th><th scope=\"col\">ações</th></tr></thead><tbody>");

    var $for$0 = 0;

    marko_forEach(data.partidos, function(partido) {
      out.w(" ");

      var $keyScope$0 = "[" + (($for$0++) + "]");

      out.w("<tr><td>" +
        marko_escapeXml(partido.numero) +
        "</td><td class=\"text-center\">" +
        marko_escapeXml(partido.sigla) +
        "</td><td>" +
        marko_escapeXml(partido.nome) +
        "</td><td>" +
        marko_escapeXml(partido.nome_coligacao ? partido.nome_coligacao : "-") +
        "</td><td class=\"text-center\">" +
        marko_escapeXml(partido.quantidade_votos) +
        "</td><td class=\"text-center\"><i class=\"material-icons\">how_to_vote</i></td></tr>");
    });

    out.w("</tbody></table> ");
  } else {
    out.w("<h4><span class=\"badge badge-danger\">Em breve</span></h4>");
  }

  out.w("</div></div></div></div><br><div id=\"sanfona3\"><div class=\"card\"><div class=\"card-header\" id=\"cabecalho-sanfona2\"><h5 class=\"mb-0\"><button class=\"btn\" data-toggle=\"collapse\" data-target=\"#corpo-sanfona3\" aria-expanded=\"false\" aria-controls=\"corpo-sanfona3\"><h4>candidatos</h4></button></h5></div><div id=\"corpo-sanfona3\" class=\"collapse false\" aria-labelledby=\"cabecalho-sanfona3\" data-parent=\"#sanfona3\"><div class=\"card-body\">");

  if (data.candidatos && (data.candidatos.length > 0)) {
    out.w("<table class=\"table\"><thead class=\"thead-dark\"><tr><th scope=\"col\">n°</th><th scope=\"col\">sigla</th><th scope=\"col\">nome de urna</th><th scope=\"col\">data de nascimento</th><th scope=\"col\">votos</th><th scope=\"col\">ações</th></tr></thead><tbody>");

    var $for$1 = 0;

    marko_forEach(data.candidatos, function(candidato) {
      out.w(" ");

      var $keyScope$1 = "[" + (($for$1++) + "]");

      out.w("<tr><td>" +
        marko_escapeXml(candidato.numero) +
        "</td><td>" +
        marko_escapeXml(candidato.sigla) +
        "</td><td" +
        marko_attr("title", "" + candidato.nome) +
        ">" +
        marko_escapeXml(candidato.nome_urna) +
        "</td><td>" +
        marko_escapeXml(candidato.data_nascimento) +
        "</td><td class=\"text-center\">" +
        marko_escapeXml(candidato.quantidade_votos) +
        "</td><td class=\"text-center\"><i class=\"material-icons\">how_to_vote</i><i class=\"material-icons\">delete</i></td></tr>");
    });

    out.w("</tbody></table>");
  } else {
    out.w("<h4><span class=\"badge badge-danger\">Em breve</span></h4>");
  }

  out.w(" </div></div></div></div><br><form" +
    marko_attr("action", ("/eleicoes/" + data.eleicao.id) + "/resultado") +
    " method=\"post\"><div class=\"text-right\"><button type=\"submit\" class=\"btn btn-danger btn-lg\"><i class=\"material-icons align-middle\">warning</i> Totalizar</button></div></form></div></main><script src=\"/estatico/js/jquery-3.4.1.min.js\"></script><script src=\"/estatico/js/popper.min.js\"></script><script src=\"/estatico/js/bootstrap.min.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "136");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projetototaliza$1.0.0/src/app/views/eleicao/detalhe/detalhe.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
