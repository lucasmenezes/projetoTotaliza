/*
Script para criação do banco de dados do projeto totaliza
e suas respectivas tabelas
*/

CREATE DATABASE `totaliza` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;

/*DROP DATABASE `totaliza`; */

USE `totaliza`;

/*
DROP TABLE votacao;
DROP TABLE candidato;
DROP TABLE partido_coligacao_eleicao;
DROP TABLE partido_coligacao;
DROP TABLE coligacao;
DROP TABLE partido;
DROP TABLE eleicao;
DROP TABLE cargo_ano_base;
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
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `tipo` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `totaliza`.`cargo_ano_base` (
  `ano_base_id` INT NOT NULL,
  `cargo_id` INT NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  INDEX `fk_cargo_ano_base_ano_base_idx` (`ano_base_id` ASC) VISIBLE,
  INDEX `fk_cargo_ano_base_cargo1_idx` (`cargo_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_cargo_ano_base_ano_base`
    FOREIGN KEY (`ano_base_id`)
    REFERENCES `totaliza`.`ano_base` (`id`),
  CONSTRAINT `fk_cargo_ano_base_cargo1`
    FOREIGN KEY (`cargo_id`)
    REFERENCES `totaliza`.`cargo` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1,
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `totaliza`.`eleicao` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `descricao` TEXT NOT NULL,
  `tipo` INT NOT NULL,
  `data` DATE NOT NULL,
  `status` INT NOT NULL,
  `votos_nulos` INT NOT NULL,
  `votos_brancos` INT NOT NULL,
  `uf` VARCHAR(2) NOT NULL,
  `quantidade_vagas` INT NOT NULL,
  `cargo_ano_base_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_eleicao_cargo_ano_base1_idx` (`cargo_ano_base_id` ASC) VISIBLE,
  CONSTRAINT `fk_eleicao_cargo_ano_base1`
    FOREIGN KEY (`cargo_ano_base_id`)
    REFERENCES `totaliza`.`cargo_ano_base` (`id`))
ENGINE = InnoDB,
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

CREATE TABLE IF NOT EXISTS `totaliza`.`candidato` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `numero` VARCHAR(10) NOT NULL,
  `nome` VARCHAR(255) NOT NULL,
  `nome_urna` VARCHAR(255) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `partido_coligacao_eleicao_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_candidato_partido_coligacao_id` (`partido_coligacao_eleicao_id` ASC) VISIBLE,
  CONSTRAINT `fk_candidato_partido_coligacao_id`
    FOREIGN KEY (`partido_coligacao_eleicao_id`)
    REFERENCES `totaliza`.`partido_coligacao_eleicao` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `totaliza`.`votacao` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `partido_coligacao_eleicao_id` INT NULL,
  `quantidade_votos` INT NOT NULL,
  `candidato_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_votacao_partido_coligacao_eleicao1_idx` (`partido_coligacao_eleicao_id` ASC) VISIBLE,
  INDEX `fk_votacao_candidato1_idx` (`candidato_id` ASC) VISIBLE,
  CONSTRAINT `fk_votacao_partido_coligacao_eleicao1`
    FOREIGN KEY (`partido_coligacao_eleicao_id`)
    REFERENCES `totaliza`.`partido_coligacao_eleicao` (`id`),
  CONSTRAINT `fk_votacao_candidato1`
    FOREIGN KEY (`candidato_id`)
    REFERENCES `totaliza`.`candidato` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;