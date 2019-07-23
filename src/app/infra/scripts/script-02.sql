CREATE TABLE `partido_coligacao` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numero` varchar(10) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `sigla` varchar(50) NOT NULL,
  `eleicao_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE `partido_coligacao` ADD CONSTRAINT `fk_partido_coligacao_eleicao_id` FOREIGN KEY ( `eleicao_id` ) REFERENCES `eleicao` ( `id` ) ;
