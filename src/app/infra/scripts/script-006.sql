USE totaliza;

INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'RUMO NOVO COM A FORÇA DO POVO'), 21, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'ADRIANA'));
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'RUMO NOVO COM A FORÇA DO POVO'), 26, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'DIOGO')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'RUMO NOVO COM A FORÇA DO POVO'), 34, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'PEDRO CORREIA')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'RUMO NOVO COM A FORÇA DO POVO'), 572, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'WILSON')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'RUMO NOVO COM A FORÇA DO POVO'), 7, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'NEGÃO DO BAR')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'RUMO NOVO COM A FORÇA DO POVO'), 2, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'RENATA')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'RUMO NOVO COM A FORÇA DO POVO'), 30, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'NETE')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'RUMO NOVO COM A FORÇA DO POVO'), 45, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'NICO')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'RUMO NOVO COM A FORÇA DO POVO'), 44, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'GOIANO')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'RUMO NOVO COM A FORÇA DO POVO'), 16, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'IVANILDE')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'RUMO NOVO COM A FORÇA DO POVO'), 26, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'ARTUR CALDAS')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'RUMO NOVO COM A FORÇA DO POVO'), 78, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'DU')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'RUMO NOVO COM A FORÇA DO POVO'), 28, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'MARIÃO')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'RUMO NOVO COM A FORÇA DO POVO'), 25, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'TONINHO PRETO')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'RUMO NOVO COM A FORÇA DO POVO'), 32, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'TIBIRA')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'RUMO NOVO COM A FORÇA DO POVO'), 10, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'WILSON AZEVEDO')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'RUMO NOVO COM A FORÇA DO POVO'), 27, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'CIDINHO')); 
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'RUMO NOVO COM A FORÇA DO POVO'), 0, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'VANIA'));
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'RUMO NOVO COM A FORÇA DO POVO'), 0, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'SILVANA'));    

INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'PSB/PT'), 84, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'PAULO MECÂNICO'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'PSB/PT'), 80, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'PAULINHO'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'PSB/PT'), 56, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'ROBSON'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'PSB/PT'), 36, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'EDSON LAGOA'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'PSB/PT'), 29, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'TIA DILA'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'PSB/PT'), 28, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'IRMÃO CABO RODRIGUES'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'PSB/PT'), 28, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'ADEMIR - PÉ'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'PSB/PT'), 27, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'CIDA'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'PSB/PT'), 26, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'NENO'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'PSB/PT'), 14, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'LUZIA FERREIRA'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'PSB/PT'), 12, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'PASTOR JUNIOR'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'PSB/PT'), 11, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'LUCIANA DA SAUDE'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'PSB/PT'), 11, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'SANTANA SEGURANÇA'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'PSB/PT'), 5, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'MARCIA DO TRAILER'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN coligacao ON partido_coligacao_eleicao.coligacao_id = coligacao.id WHERE coligacao.nome = 'PSB/PT'), 0, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'MARCIA LUCIANE'));  

INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN partido ON partido_coligacao_eleicao.partido_id  = partido.id WHERE partido.sigla = 'PSD'), 15, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'JOE FRANCIS'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN partido ON partido_coligacao_eleicao.partido_id  = partido.id WHERE partido.sigla = 'PSD'), 27, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'ZÉ BRANCO'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN partido ON partido_coligacao_eleicao.partido_id  = partido.id WHERE partido.sigla = 'PSD'), 26, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'DEVANIR NIM'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN partido ON partido_coligacao_eleicao.partido_id  = partido.id WHERE partido.sigla = 'PSD'), 14, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'CARLINHOS DO DIVINO'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN partido ON partido_coligacao_eleicao.partido_id  = partido.id WHERE partido.sigla = 'PSD'), 5, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'SUELI CARVALHO'));  
INSERT INTO `totaliza`.`votacao` (`partido_coligacao_eleicao_id`, `quantidade_votos`, `candidato_id`) VALUES ((SELECT partido_coligacao_eleicao.id FROM partido_coligacao_eleicao INNER JOIN partido ON partido_coligacao_eleicao.partido_id  = partido.id WHERE partido.sigla = 'PSD'), 10, (SELECT candidato.id FROM candidato where candidato.nome_urna = 'ELIANA MAYOLLI'));  