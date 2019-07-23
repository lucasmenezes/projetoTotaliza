CREATE TABLE `candidato` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numero` varchar(10) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `data_nascimento` date NOT NULL,
  `sigla` varchar(50) NOT NULL,
  `partido_coligacao_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE `candidato` ADD CONSTRAINT `fk_candidato_partido_coligacao_id` FOREIGN KEY ( `partido_coligacao_id` ) REFERENCES `partido_coligacao` ( `id` ) ;