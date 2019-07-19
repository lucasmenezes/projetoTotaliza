// Compiled using marko@4.18.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projetototaliza$1.0.0/src/app/views/eleicao/lista/lista.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"> </head><body>");

  component_globals_tag({}, out);

  out.w("<div><div><h1>Eleições cadastradas </h1><table><thead><tr><th>ID</th><th>Título</th><th>Data</th><th>Editar</th><th>Remover</th></tr></thead><tbody>");

  var $for$0 = 0;

  marko_forEach(data.eleicoes, function(eleicao) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr" +
      marko_attr("id", "eleicao_" + eleicao.id) +
      "><td>" +
      marko_escapeXml(eleicao.id) +
      "</td><td>" +
      marko_escapeXml(eleicao.titulo) +
      "</td><td>" +
      marko_escapeXml(eleicao.data) +
      "</td><td><a href=\"\">Editar</a></td><td><a href=\"\">Remover</a></td></tr>");
  });

  out.w("</tbody></table></div></div> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "24");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projetototaliza$1.0.0/src/app/views/eleicao/lista/lista.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };