USE totaliza;

/*Votação dos candidados*/

INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 21, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'ADRIANA'));
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 26, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'DIOGO')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 34, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'PEDRO CORREIA')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 7,  (SELECT candidato.id FROM candidato where candidato.nome_urna = 'NEGÃO DO BAR')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 2,  (SELECT candidato.id FROM candidato where candidato.nome_urna = 'RENATA')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 30, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'NETE')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 45, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'NICO')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 44, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'GOIANO')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 16, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'IVANILDE')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 26, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'ARTUR CALDAS')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 78, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'DU')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 28, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'MARIÃO')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 25, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'TONINHO PRETO')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 32, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'TIBIRA')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 10, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'WILSON AZEVEDO')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 27, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'CIDINHO')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 0,  (SELECT candidato.id FROM candidato where candidato.nome_urna = 'VANIA'));
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 0,  (SELECT candidato.id FROM candidato where candidato.nome_urna = 'SILVANA'));    

INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 84, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'PAULO MECÂNICO'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 80, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'PAULINHO'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 56, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'ROBSON'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 36, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'EDSON LAGOA'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 29, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'TIA DILA'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 28, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'IRMÃO CABO RODRIGUES'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 28, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'ADEMIR - PÉ'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 27, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'CIDA'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 26, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'NENO'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 14, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'LUZIA FERREIRA'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 12, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'PASTOR JUNIOR'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 11, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'LUCIANA DA SAUDE'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 11, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'SANTANA SEGURANÇA'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 5,  (SELECT candidato.id FROM candidato where candidato.nome_urna = 'MARCIA DO TRAILER'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 0,  (SELECT candidato.id FROM candidato where candidato.nome_urna = 'MARCIA LUCIANE'));  

INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 15, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'JOE FRANCIS'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 27, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'ZÉ BRANCO'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 26, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'DEVANIR NIM'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 14, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'CARLINHOS DO DIVINO'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 5,  (SELECT candidato.id FROM candidato where candidato.nome_urna = 'SUELI CARVALHO'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 10, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'ELIANA MAYOLLI'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES (null, 4,  (SELECT candidato.id FROM candidato where candidato.nome_urna = 'ZEZINHA'));  

/*Votos para legenda*/

INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT pc.id FROM partido_coligacao AS pc INNER JOIN partido AS p ON pc.partido_id = p.id INNER JOIN coligacao AS c ON pc.coligacao_id = c.id WHERE c.nome = 'RUMO NOVO COM A FORÇA DO POVO' AND p.sigla = 'PRB'), 13, null);
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT pc.id FROM partido_coligacao AS pc INNER JOIN partido AS p ON pc.partido_id = p.id INNER JOIN coligacao AS c ON pc.coligacao_id = c.id WHERE c.nome = 'RUMO NOVO COM A FORÇA DO POVO' AND p.sigla = 'PV'), 1, null);  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT pc.id FROM partido_coligacao AS pc INNER JOIN partido AS p ON pc.partido_id = p.id INNER JOIN coligacao AS c ON pc.coligacao_id = c.id WHERE c.nome = 'RUMO NOVO COM A FORÇA DO POVO' AND p.sigla = 'PSDB'), 9,  null);  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT pc.id FROM partido_coligacao AS pc INNER JOIN partido AS p ON pc.partido_id = p.id INNER JOIN coligacao AS c ON pc.coligacao_id = c.id WHERE c.nome = 'PSB/PT' AND p.sigla = 'PSB'), 2, null);
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT pc.id FROM partido_coligacao AS pc INNER JOIN partido AS p ON pc.partido_id = p.id INNER JOIN coligacao AS c ON pc.coligacao_id = c.id WHERE c.nome = 'PSB/PT' AND p.sigla = 'PT'), 0, null);  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT pce.id FROM partido_coligacao_eleicao AS pce INNER JOIN partido AS p ON pce.partido_id = p.id WHERE p.sigla = 'PSD'), 9,  null);  

SELECT pce.id FROM partido_coligacao_eleicao AS pce 
INNER JOIN coligacao AS c ON pce.coligacao_id = c.id
INNER JOIN partido_coligacao AS pc ON pc.coligacao_id = c.id
INNER JOIN partido AS p ON p.id = pc.partido_id
WHERE p.sigla = 'PRB' AND c.nome = 'RUMO NOVO COM A FORÇA DO POVO';

SELECT pce.id FROM partido_coligacao_eleicao AS pce 
INNER JOIN coligacao AS c ON pce.coligacao_id = c.id
INNER JOIN partido_coligacao AS pc ON pc.coligacao_id = c.id
INNER JOIN partido AS p ON p.id = pc.partido_id
WHERE p.sigla = 'PV' AND c.nome = 'RUMO NOVO COM A FORÇA DO POVO'

SELECT pce.id FROM partido_coligacao_eleicao AS pce 
INNER JOIN coligacao AS c ON pce.coligacao_id = c.id
INNER JOIN partido_coligacao AS pc ON pc.coligacao_id = c.id
INNER JOIN partido AS p ON p.id = pc.partido_id
WHERE p.sigla = 'PSDB' AND c.nome = 'RUMO NOVO COM A FORÇA DO POVO'


 
