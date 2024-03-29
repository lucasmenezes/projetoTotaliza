/*
Script para carga de partidos e coligações da 
eleição de Borá 2016 (Vereador)
*/

USE totaliza;

INSERT INTO `totaliza`.`partido_eleicao` (`eleicao_id`, `partido_id`) VALUES
((SELECT id from eleicao where nome = 'Eleição Municipal de Borá'), (SELECT id from partido where sigla = 'PSD'));

INSERT INTO `totaliza`.`coligacao` (`nome`, `sigla`)  VALUES ('PSB/PT', 'PSB/PT');

INSERT INTO `totaliza`.`partido_coligacao` (`partido_id`, `coligacao_id`) VALUES ((SELECT id from partido where sigla = 'PSB'), (SELECT id FROM coligacao WHERE nome = 'PSB/PT'));
INSERT INTO `totaliza`.`partido_coligacao` (`partido_id`, `coligacao_id`) VALUES ((SELECT id from partido where sigla = 'PT'), (SELECT id FROM coligacao WHERE nome = 'PSB/PT'));

INSERT INTO `totaliza`.`partido_eleicao` (`eleicao_id`, `partido_id`) VALUES ((SELECT id from eleicao where nome = 'Eleição Municipal de Borá'), (SELECT id from partido where sigla = 'PT'));
INSERT INTO `totaliza`.`partido_eleicao` (`eleicao_id`, `partido_id`) VALUES ((SELECT id from eleicao where nome = 'Eleição Municipal de Borá'), (SELECT id from partido where sigla = 'PSB'));

INSERT INTO `totaliza`.`coligacao` (`nome`, `sigla`)  VALUES ('RUMO NOVO COM A FORÇA DO POVO', 'PRB/PV/PSDB'); 
INSERT INTO `totaliza`.`partido_coligacao` (`partido_id`, `coligacao_id`) VALUES ((SELECT id from partido where sigla = 'PRB'), (SELECT id FROM coligacao WHERE nome = 'RUMO NOVO COM A FORÇA DO POVO'));
INSERT INTO `totaliza`.`partido_coligacao` (`partido_id`, `coligacao_id`) VALUES ((SELECT id from partido where sigla = 'PV'), (SELECT id FROM coligacao WHERE nome = 'RUMO NOVO COM A FORÇA DO POVO'));
INSERT INTO `totaliza`.`partido_coligacao` (`partido_id`, `coligacao_id`) VALUES ((SELECT id from partido where sigla = 'PSDB'), (SELECT id FROM coligacao WHERE nome = 'RUMO NOVO COM A FORÇA DO POVO'));

INSERT INTO `totaliza`.`partido_eleicao` (`eleicao_id`, `partido_id`) VALUES ((SELECT id from eleicao where nome = 'Eleição Municipal de Borá'), (SELECT id from partido where sigla = 'PRB'));
INSERT INTO `totaliza`.`partido_eleicao` (`eleicao_id`, `partido_id`) VALUES ((SELECT id from eleicao where nome = 'Eleição Municipal de Borá'), (SELECT id from partido where sigla = 'PV'));
INSERT INTO `totaliza`.`partido_eleicao` (`eleicao_id`, `partido_id`) VALUES ((SELECT id from eleicao where nome = 'Eleição Municipal de Borá'), (SELECT id from partido where sigla = 'PSDB'));