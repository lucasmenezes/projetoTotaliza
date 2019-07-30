USE `totaliza`;

INSERT INTO `totaliza`.`ano_base` (`ano`) VALUES (2016);
INSERT INTO `totaliza`.`ano_base` (`ano`) VALUES (2018);
INSERT INTO `totaliza`.`ano_base` (`ano`) VALUES (2020);
INSERT INTO `totaliza`.`ano_base` (`ano`) VALUES (2022);
INSERT INTO `totaliza`.`ano_base` (`ano`) VALUES (2024);

INSERT INTO `totaliza`.`cargo` (`nome`, `ano_base_id`, `tipo`) VALUES ('Vereador', (Select id from ano_base where ano = 2016), 2);
INSERT INTO `totaliza`.`cargo` (`nome`, `ano_base_id`, `tipo`) VALUES ('Prefeito', (Select id from ano_base where ano = 2016), 1);

INSERT INTO `totaliza`.`cargo` (`nome`, `ano_base_id`, `tipo`) VALUES ('Deputado Estadual', (Select id  from ano_base where ano = 2018), 2);
INSERT INTO `totaliza`.`cargo` (`nome`, `ano_base_id`, `tipo`) VALUES ('Deputado Federal', (Select id  from ano_base where ano = 2018), 1);
INSERT INTO `totaliza`.`cargo` (`nome`, `ano_base_id`, `tipo`) VALUES ('Senador', (Select id  from ano_base where ano = 2018), 2);
INSERT INTO `totaliza`.`cargo` (`nome`, `ano_base_id`, `tipo`) VALUES ('Governador', (Select id  from ano_base where ano = 2018), 1);
INSERT INTO `totaliza`.`cargo` (`nome`, `ano_base_id`, `tipo`) VALUES ('Presidente', (Select id  from ano_base where ano = 2018), 1);

INSERT INTO `totaliza`.`cargo` (`nome`, `ano_base_id`, `tipo`) VALUES ('Vereador', (Select id from ano_base where ano = 2020), 2);
INSERT INTO `totaliza`.`cargo` (`nome`, `ano_base_id`, `tipo`) VALUES ('Prefeito', (Select id from ano_base where ano = 2020), 1);

INSERT INTO `totaliza`.`cargo` (`nome`, `ano_base_id`, `tipo`) VALUES ('Deputado Estadual', (Select id  from ano_base where ano = 2022), 2);
INSERT INTO `totaliza`.`cargo` (`nome`, `ano_base_id`, `tipo`) VALUES ('Deputado Federal', (Select id  from ano_base where ano = 2022), 1);
INSERT INTO `totaliza`.`cargo` (`nome`, `ano_base_id`, `tipo`) VALUES ('Senador', (Select id  from ano_base where ano = 2022), 2);
INSERT INTO `totaliza`.`cargo` (`nome`, `ano_base_id`, `tipo`) VALUES ('Governador', (Select id  from ano_base where ano = 2022), 1);
INSERT INTO `totaliza`.`cargo` (`nome`, `ano_base_id`, `tipo`) VALUES ('Presidente', (Select id  from ano_base where ano = 2022), 1);

INSERT INTO `totaliza`.`cargo` (`nome`, `ano_base_id`, `tipo`) VALUES ('Vereador', (Select id from ano_base where ano = 2024), 2);
INSERT INTO `totaliza`.`cargo` (`nome`, `ano_base_id`, `tipo`) VALUES ('Prefeito', (Select id from ano_base where ano = 2024), 1);