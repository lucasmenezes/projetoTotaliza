/*DROP DATABASE `totaliza`; */

CREATE DATABASE `totaliza` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;

USE `totaliza`;

/*
DROP TABLE candidato;
DROP TABLE votacao;
DROP TABLE partido_coligacao_eleicao;
DROP TABLE partido_coligacao;
DROP TABLE coligacao;
DROP TABLE partido;
DROP TABLE eleicao;
DROP TABLE cargo;
DROP TABLE ano_base;
*/

CREATE TABLE IF NOT EXISTS `totaliza`.`ano_base` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ano` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `ano_UNIQUE` (`ano` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `totaliza`.`cargo` (
  `nome` VARCHAR(255) NOT NULL,
  `ano_base_id` INT NOT NULL,
  `tipo` INT NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_cargo_ano_base1`
    FOREIGN KEY (`ano_base_id`)
    REFERENCES `totaliza`.`ano_base` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `totaliza`.`eleicao` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `descricao` TEXT NOT NULL,
  `tipo` INT NOT NULL,
  `data` DATE NOT NULL,
  `status` INT(1) NOT NULL,
  `votos_nulos` INT NOT NULL,
  `votos_brancos` INT NOT NULL,
  `ano_base` INT NOT NULL,
  `uf` VARCHAR(2) NOT NULL,
  `quantidade_vagas` INT NOT NULL,
  `ano_base_id` INT NOT NULL,
  `cargo_ano_base_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_eleicao_ano_base1_idx` (`ano_base_id` ASC) VISIBLE,
  INDEX `fk_eleicao_cargo1_idx` (`cargo_ano_base_id` ASC) VISIBLE,
  CONSTRAINT `fk_eleicao_ano_base1`
    FOREIGN KEY (`ano_base_id`)
    REFERENCES `totaliza`.`ano_base` (`id`),
  CONSTRAINT `fk_eleicao_cargo1`
    FOREIGN KEY (`cargo_ano_base_id`)
    REFERENCES `totaliza`.`cargo` (`ano_base_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `totaliza`.`partido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sigla` VARCHAR(100) NOT NULL,
  `numero` INT NOT NULL,
  `nome` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `totaliza`.`coligacao` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `sigla` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `totaliza`.`partido_coligacao` (
  `partido_id` INT NOT NULL,
  `coligacao_id` INT NOT NULL,
  INDEX `fk_partido_coligacao_partido_idx` (`partido_id` ASC) VISIBLE,
  INDEX `fk_partido_coligacao_coligacao1_idx` (`coligacao_id` ASC) VISIBLE,
  PRIMARY KEY (`partido_id`, `coligacao_id`),
  CONSTRAINT `fk_partido_coligacao_partido`
    FOREIGN KEY (`partido_id`)
    REFERENCES `totaliza`.`partido` (`id`),
  CONSTRAINT `fk_partido_coligacao_coligacao1`
    FOREIGN KEY (`coligacao_id`)
    REFERENCES `totaliza`.`coligacao` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `totaliza`.`partido_coligacao_eleicao` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `eleicao_id` INT NOT NULL,
  `coligacao_id` INT NULL,
  `partido_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_partido_coligacao_eleicao_id` (`eleicao_id` ASC) VISIBLE,
  INDEX `fk_partido_coligacao_eleicao_coligacao1_idx` (`coligacao_id` ASC) VISIBLE,
  INDEX `fk_partido_coligacao_eleicao_partido1_idx` (`partido_id` ASC) VISIBLE,
  CONSTRAINT `fk_partido_coligacao_eleicao_id`
    FOREIGN KEY (`eleicao_id`)
    REFERENCES `totaliza`.`eleicao` (`id`),
  CONSTRAINT `fk_partido_coligacao_eleicao_coligacao1`
    FOREIGN KEY (`coligacao_id`)
    REFERENCES `totaliza`.`coligacao` (`id`),
  CONSTRAINT `fk_partido_coligacao_eleicao_partido1`
    FOREIGN KEY (`partido_id`)
    REFERENCES `totaliza`.`partido` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `totaliza`.`votacao` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `partido_coligacao_eleicao_id` INT(11) NOT NULL,
  `quantidade_votos` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_votacao_partido_coligacao_eleicao1_idx` (`partido_coligacao_eleicao_id` ASC) VISIBLE,
  CONSTRAINT `fk_votacao_partido_coligacao_eleicao1`
    FOREIGN KEY (`partido_coligacao_eleicao_id`)
    REFERENCES `totaliza`.`partido_coligacao_eleicao` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `totaliza`.`candidato` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `numero` VARCHAR(10) NOT NULL,
  `nome` VARCHAR(255) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `sigla` VARCHAR(50) NOT NULL,
  `partido_coligacao_eleicao_id` INT NOT NULL,
  `votacao_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_candidato_partido_coligacao_id` (`partido_coligacao_eleicao_id` ASC) VISIBLE,
  INDEX `fk_candidato_votacao1_idx` (`votacao_id` ASC) VISIBLE,
  CONSTRAINT `fk_candidato_partido_coligacao_id`
    FOREIGN KEY (`partido_coligacao_eleicao_id`)
    REFERENCES `totaliza`.`partido_coligacao_eleicao` (`id`),
  CONSTRAINT `fk_candidato_votacao1`
    FOREIGN KEY (`votacao_id`)
    REFERENCES `totaliza`.`votacao` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;