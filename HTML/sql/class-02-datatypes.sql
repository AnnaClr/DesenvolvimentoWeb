DROP  TABLE alunos;
CREATE  TABLE  alunos (
	id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR ( 40 ) NOT NULL ,
    cpf VARCHAR ( 11 ) ÚNICO NÃO NULO ,
    ano_nascimento DATE  NOT NULL ,
    gênero ENUM( ' M ' , ' F ' ) NÃO NULO ,
    cidade VARCHAR ( 30 ) PADRÃO " Jucás " ,
    c_desempenho DECIMAL ( 5 , 2 ),
    assinatura TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCREVA alunos;

INSERT INTO alunos (nome, cpf, ano_nascimento, sexo, desempenho_c)
VALORES ( " João " , " 12345678900 " , " 1989-12-25 " , " M " , 89 . 2 );

INSERIR NOS VALORES DOS ALUNOS 
(PADRÃO, " Pedro " , " 12345678901 " , " 1998-02-12 " , " M " , PADRÃO, 90,75 , PADRÃO ) ,
(DEFAULT, " Maria " , " 12345678902 " , " 1995-06-23 " , " F " , DEFAULT, 95 , DEFAULT);

SELECIONE  *  DE alunos;
SELECIONE 
	ID AS ID,
    nome AS Nome,
    c_desempenho AS CR,
    curso AS Curso
DE alunos
PEDIDO POR CR
 LIMITE  DESC 10 ;

SELECIONE 
	nome AS Nome,
    ano_nascimento AS Nascimanto,
    CURDATE() Hoje,
    FLOOR(DATEDIFF( CURRENT_DATE (), birth_year) /  365 . 25 ) Idade
DE alunos;

 Cursos de DROP TABLE ;
CREATE  TABLE  cursos (
	id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome varchar ( 40 ) NÃO NULO ,
    horas TINYINT UNSIGNED
);

DESCREVA os cursos;

INSERIR NOS VALORES dos cursos
(DEFAULT, ' Programador Web ' , 240 ),
(PADRÃO, ' Ferramentas Digitais ' , 160 ),
(DEFAULT, ' Informática para o Mundo do Trabalho ' , 160 );

SELECIONE  *  DE cursos;






