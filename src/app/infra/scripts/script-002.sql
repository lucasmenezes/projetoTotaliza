/*
Script para carga de eleições na
base de dados
Borá, Aguaí, Floreal, Agudos e Cananéia (todas
com ano base 2016 para vereador)

*/
USE totaliza;

INSERT INTO `totaliza`.`eleicao` (`nome`, `descricao`, `tipo`, `data`, `status`, `votos_nulos`, `votos_brancos`, `uf`, `quantidade_vagas`, `cargo_ano_base_id`)
VALUES ('Eleição Municipal de Borá - Cargo Vereador', 'Eleição Municipal de Borá - Cargo Vereador', 1,  '2016-10-02', 1, 22, 9, 'SP', 9, (SELECT cargo_ano_base.id from cargo_ano_base 
INNER JOIN cargo ON cargo_ano_base.cargo_id = cargo.id
INNER JOIN ano_base ON cargo_ano_base.ano_base_id = ano_base.id
WHERE cargo.nome = 'Vereador' AND ano_base.ano = 2016));

INSERT INTO `totaliza`.`eleicao` (`nome`, `descricao`, `tipo`, `data`, `status`, `votos_nulos`, `votos_brancos`, `uf`, `quantidade_vagas`, `cargo_ano_base_id`)
VALUES ('Eleição Municipal de Aguaí - Cargo Vereador', 'Eleição Municipal de Aguaí - Cargo Vereador', 1,  '2016-10-02', 1313, 930, 13, 'SP', 9, (SELECT cargo_ano_base.id from cargo_ano_base 
INNER JOIN cargo ON cargo_ano_base.cargo_id = cargo.id
INNER JOIN ano_base ON cargo_ano_base.ano_base_id = ano_base.id
WHERE cargo.nome = 'Vereador' AND ano_base.ano = 2016));

INSERT INTO `totaliza`.`eleicao` (`nome`, `descricao`, `tipo`, `data`, `status`, `votos_nulos`, `votos_brancos`, `uf`, `quantidade_vagas`, `cargo_ano_base_id`)
VALUES ('Eleição Municipal de Agudos - Cargo Vereador', 'Eleição Municipal de Agudos - Cargo Vereador', 1,  '2016-10-02', 1, 937, 692, 'SP', 13, (SELECT cargo_ano_base.id from cargo_ano_base 
INNER JOIN cargo ON cargo_ano_base.cargo_id = cargo.id
INNER JOIN ano_base ON cargo_ano_base.ano_base_id = ano_base.id
WHERE cargo.nome = 'Vereador' AND ano_base.ano = 2016));

INSERT INTO `totaliza`.`eleicao` (`nome`, `descricao`, `tipo`, `data`, `status`, `votos_nulos`, `votos_brancos`, `uf`, `quantidade_vagas`, `cargo_ano_base_id`)
VALUES ('Eleição Municipal de Floreal - Cargo Vereador', 'Eleição Municipal de Floreal - Cargo Vereador', 1,  '2016-10-02', 1, 62, 40, 'SP', 9, (SELECT cargo_ano_base.id from cargo_ano_base 
INNER JOIN cargo ON cargo_ano_base.cargo_id = cargo.id
INNER JOIN ano_base ON cargo_ano_base.ano_base_id = ano_base.id
WHERE cargo.nome = 'Vereador' AND ano_base.ano = 2016));

INSERT INTO `totaliza`.`eleicao` (`nome`, `descricao`, `tipo`, `data`, `status`, `votos_nulos`, `votos_brancos`, `uf`, `quantidade_vagas`, `cargo_ano_base_id`)
VALUES ('Eleição Municipal de Cananéia - Cargo Vereador', 'Eleição Municipal de Cananéia - Cargo Vereador', 1,  '2016-10-02', 1, 175, 110, 'SP', 9, (SELECT cargo_ano_base.id from cargo_ano_base 
INNER JOIN cargo ON cargo_ano_base.cargo_id = cargo.id
INNER JOIN ano_base ON cargo_ano_base.ano_base_id = ano_base.id
WHERE cargo.nome = 'Vereador' AND ano_base.ano = 2016));
