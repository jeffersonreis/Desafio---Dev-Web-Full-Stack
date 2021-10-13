# Desafio-Dev-Web-Full-Stack



Desenvolvido em React com NextJS e o framework de CSS TailwindCss para o FrontEnd.

E desenvolvido com JAVA 8 e Springboot 5.5 para API e BackEnd.

Além do banco de dados PostGreeSQL


Necessário criar uma base de dados, conforme o algoritmo:



CREATE SCHEMA history

SELECT * FROM history

CREATE TABLE history.istory
(
	id bigserial NOT NULL PRIMARY KEY,
	num numeric(50),
	resulty numeric(50)
)
