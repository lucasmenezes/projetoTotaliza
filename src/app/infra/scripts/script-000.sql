/*
Script para criação do banco de dados do projeto totaliza
e suas respectivas tabelas
*/

CREATE DATABASE `totaliza` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;

/*DROP DATABASE `totaliza`; */

USE `totaliza`;

/*
DROP TABLE quociente_partidario;
DROP TABLE quociente_eleitoral;
DROP TABLE votacao;
DROP TABLE candidato;
DROP TABLE partido_eleicao;
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
  PRIMARY KEY (`id`),
  INDEX `fk_cargo_ano_base_ano_base_idx` (`ano_base_id` ASC) VISIBLE,
  INDEX `fk_cargo_ano_base_cargo1_idx` (`cargo_id` ASC) VISIBLE,
  CONSTRAINT `fk_cargo_ano_base_ano_base`
    FOREIGN KEY (`ano_base_id`)
    REFERENCES `totaliza`.`ano_base` (`id`),
  CONSTRAINT `fk_cargo_ano_base_cargo1`
    FOREIGN KEY (`cargo_id`)
    REFERENCES `totaliza`.`cargo` (`id`))
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
  `status` INT NOT NULL,
  `votos_nulos` INT NOT NULL,
  `votos_brancos` INT NOT NULL,
  `votos_anulados` INT NOT NULL,
  `uf` VARCHAR(2) NOT NULL,
  `quantidade_vagas` INT NOT NULL,
  `cargo_ano_base_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_eleicao_cargo_ano_base1_idx` (`cargo_ano_base_id` ASC) VISIBLE,
  CONSTRAINT `fk_eleicao_cargo_ano_base1`
    FOREIGN KEY (`cargo_ano_base_id`)
    REFERENCES `totaliza`.`cargo_ano_base` (`id`))
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
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  INDEX `fk_partido_coligacao_partido_idx` (`partido_id` ASC) VISIBLE,
  INDEX `fk_partido_coligacao_coligacao1_idx` (`coligacao_id` ASC) VISIBLE,
  CONSTRAINT `fk_partido_coligacao_coligacao1`
    FOREIGN KEY (`coligacao_id`)
    REFERENCES `totaliza`.`coligacao` (`id`),
  CONSTRAINT `fk_partido_coligacao_partido`
    FOREIGN KEY (`partido_id`)
    REFERENCES `totaliza`.`partido` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `totaliza`.`partido_eleicao` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `eleicao_id` INT NOT NULL,
  `partido_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_partido_coligacao_eleicao_id` (`eleicao_id` ASC) VISIBLE,
  INDEX `fk_partido_coligacao_eleicao_partido1_idx` (`partido_id` ASC) VISIBLE,
  CONSTRAINT `fk_partido_coligacao_eleicao_id`
    FOREIGN KEY (`eleicao_id`)
    REFERENCES `totaliza`.`eleicao` (`id`),
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
  `partido_eleicao_id` INT NOT NULL,
  `situacao` INT NULL,
  `percentual_comparecimento` DECIMAL NULL,
  `percentual_votos_validos` DECIMAL NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_candidato_partido_coligacao_id` (`partido_eleicao_id` ASC) VISIBLE,
  CONSTRAINT `fk_candidato_partido_coligacao_id`
    FOREIGN KEY (`partido_eleicao_id`)
    REFERENCES `totaliza`.`partido_eleicao` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `totaliza`.`votacao` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantidade_votos` INT NOT NULL,
  `candidato_id` INT NULL DEFAULT NULL,
  `partido_eleicao_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_votacao_candidato1_idx` (`candidato_id` ASC) VISIBLE,
  INDEX `fk_votacao_partido_coligacao_eleicao1_idx` (`partido_eleicao_id` ASC) VISIBLE,
  CONSTRAINT `fk_votacao_candidato1`
    FOREIGN KEY (`candidato_id`)
    REFERENCES `totaliza`.`candidato` (`id`),
  CONSTRAINT `fk_votacao_partido_coligacao_eleicao1`
    FOREIGN KEY (`partido_eleicao_id`)
    REFERENCES `totaliza`.`partido_eleicao` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `totaliza`.`quociente_eleitoral` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantidade_votos` INT NOT NULL,
  `quantidade_votos_legenda` INT NOT NULL,
  `quantidade_votos_validos` INT NOT NULL,
  `quociente_eleitoral` INT NOT NULL,
  `clausulaBarreira` DECIMAL NOT NULL,
  `eleicao_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_quociente_eleitoral_eleicao_idx` (`eleicao_id` ASC) VISIBLE,
  CONSTRAINT `fk_quociente_eleitoral_eleicao`
    FOREIGN KEY (`eleicao_id`)
    REFERENCES `totaliza`.`eleicao` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `totaliza`.`quociente_partidario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantidade_votos_nominais` INT NOT NULL,
  `quantidade_votos_legenda` INT NOT NULL,
  `quantidade_votos_validos` INT NOT NULL,
  `quantidade_vagas_obtidas_qp` INT NOT NULL,
  `quantidade_candidatos_qe` INT NOT NULL,
  `quantidade_vagas_preenchidas` INT NOT NULL,
  `partido_eleicao_id` INT NULL,
  `coligacao_id` INT NULL,
  `eleicao_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_quociente_partidario_partido_eleicao1_idx` (`partido_eleicao_id` ASC) VISIBLE,
  INDEX `fk_quociente_partidario_coligacao1_idx` (`coligacao_id` ASC) VISIBLE,
  INDEX `fk_quociente_partidario_eleicao1_idx` (`eleicao_id` ASC) VISIBLE,
  CONSTRAINT `fk_quociente_partidario_partido_eleicao1`
    FOREIGN KEY (`partido_eleicao_id`)
    REFERENCES `totaliza`.`partido_eleicao` (`id`),
  CONSTRAINT `fk_quociente_partidario_coligacao1`
    FOREIGN KEY (`coligacao_id`)
    REFERENCES `totaliza`.`coligacao` (`id`),
  CONSTRAINT `fk_quociente_partidario_eleicao1`
    FOREIGN KEY (`eleicao_id`)
    REFERENCES `totaliza`.`eleicao` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
