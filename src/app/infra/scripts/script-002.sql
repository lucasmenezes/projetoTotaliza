USE totaliza;

INSERT INTO `totaliza`.`eleicao`
(
`nome`,
`descricao`,
`tipo`,
`data`,
`status`,
`votos_nulos`,
`votos_brancos`,
`ano_base`,
`uf`,
`quantidade_vagas`,
`ano_base_id`,
`cargo_ano_base_id`)
VALUES
(
'Eleição de Santos',
'Descrição da Eleição',
2,
'2016-10-02',
1,
1299,
347,
2016,
'SP',
10,
(select id from ano_base where ano = 2016),
(select id from cargo where nome = 'Vereador' and ano_base_id = (select id from ano_base where ano = 2016)));
