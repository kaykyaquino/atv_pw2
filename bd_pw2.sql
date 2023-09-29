CREATE DATABASE atv_pw2;

USE atv_pw2;

CREATE TABLE tbl_produto(
      codigo_produto INT(10) unsigned auto_increment primary key,
    nome_produto varchar(255) not null,
    valor_produto decimal(10,2) not null,
    imagem_produto varchar(500) not null,
    descricao_produto text(100) not null
);
   
CREATE TABLE tbl_categoria(
      codigo_categoria INT(10) unsigned auto_increment primary key,
    nome_categoria varchar(255) not null,
    observacoes_categoria text(100) not null)