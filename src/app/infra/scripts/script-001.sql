/*
Script para criação dos cargos e 
associação com as respectivas eleições
*/

USE `totaliza`;

INSERT INTO `totaliza`.`ano_base` (`ano`) VALUES (2016);
INSERT INTO `totaliza`.`ano_base` (`ano`) VALUES (2018);
INSERT INTO `totaliza`.`ano_base` (`ano`) VALUES (2020);
INSERT INTO `totaliza`.`ano_base` (`ano`) VALUES (2022);
INSERT INTO `totaliza`.`ano_base` (`ano`) VALUES (2024);

INSERT INTO `totaliza`.`cargo` (`nome`, `tipo`) VALUES ('Presidente', 1);
INSERT INTO `totaliza`.`cargo` (`nome`, `tipo`) VALUES ('Governador', 1);
INSERT INTO `totaliza`.`cargo` (`nome`, `tipo`) VALUES ('Senador', 1);
INSERT INTO `totaliza`.`cargo` (`nome`, `tipo`) VALUES ('Prefeito', 1);
INSERT INTO `totaliza`.`cargo` (`nome`, `tipo`) VALUES ('Deputado Estadual', 2);
INSERT INTO `totaliza`.`cargo` (`nome`, `tipo`) VALUES ('Deputado Federal', 2);
INSERT INTO `totaliza`.`cargo` (`nome`, `tipo`) VALUES ('Vereador', 2);

INSERT INTO `totaliza`.`cargo_ano_base` (`ano_base_id`, `cargo_id`) VALUES ((Select id from ano_base where ano = 2016), (Select id from cargo where nome = 'Prefeito'));
INSERT INTO `totaliza`.`cargo_ano_base` (`ano_base_id`, `cargo_id`) VALUES ((Select id from ano_base where ano = 2016), (Select id from cargo where nome = 'Vereador'));

INSERT INTO `totaliza`.`cargo_ano_base` (`ano_base_id`, `cargo_id`) VALUES ((Select id from ano_base where ano = 2018), (Select id from cargo where nome = 'Presidente'));
INSERT INTO `totaliza`.`cargo_ano_base` (`ano_base_id`, `cargo_id`) VALUES ((Select id from ano_base where ano = 2018), (Select id from cargo where nome = 'Governador'));
INSERT INTO `totaliza`.`cargo_ano_base` (`ano_base_id`, `cargo_id`) VALUES ((Select id from ano_base where ano = 2018), (Select id from cargo where nome = 'Senador'));
INSERT INTO `totaliza`.`cargo_ano_base` (`ano_base_id`, `cargo_id`) VALUES ((Select id from ano_base where ano = 2018), (Select id from cargo where nome = 'Deputado Federal'));
INSERT INTO `totaliza`.`cargo_ano_base` (`ano_base_id`, `cargo_id`) VALUES ((Select id from ano_base where ano = 2018), (Select id from cargo where nome = 'Deputado Estadual'));

INSERT INTO `totaliza`.`cargo_ano_base` (`ano_base_id`, `cargo_id`) VALUES ((Select id from ano_base where ano = 2020), (Select id from cargo where nome = 'Prefeito'));
INSERT INTO `totaliza`.`cargo_ano_base` (`ano_base_id`, `cargo_id`) VALUES ((Select id from ano_base where ano = 2020), (Select id from cargo where nome = 'Vereador'));

INSERT INTO `totaliza`.`cargo_ano_base` (`ano_base_id`, `cargo_id`) VALUES ((Select id from ano_base where ano = 2022), (Select id from cargo where nome = 'Presidente'));
INSERT INTO `totaliza`.`cargo_ano_base` (`ano_base_id`, `cargo_id`) VALUES ((Select id from ano_base where ano = 2022), (Select id from cargo where nome = 'Governador'));
INSERT INTO `totaliza`.`cargo_ano_base` (`ano_base_id`, `cargo_id`) VALUES ((Select id from ano_base where ano = 2022), (Select id from cargo where nome = 'Senador'));
INSERT INTO `totaliza`.`cargo_ano_base` (`ano_base_id`, `cargo_id`) VALUES ((Select id from ano_base where ano = 2022), (Select id from cargo where nome = 'Deputado Federal'));
INSERT INTO `totaliza`.`cargo_ano_base` (`ano_base_id`, `cargo_id`) VALUES ((Select id from ano_base where ano = 2022), (Select id from cargo where nome = 'Deputado Estadual'));

INSERT INTO `totaliza`.`cargo_ano_base` (`ano_base_id`, `cargo_id`) VALUES ((Select id from ano_base where ano = 2024), (Select id from cargo where nome = 'Prefeito'));
INSERT INTO `totaliza`.`cargo_ano_base` (`ano_base_id`, `cargo_id`) VALUES ((Select id from ano_base where ano = 2024), (Select id from cargo where nome = 'Vereador'));