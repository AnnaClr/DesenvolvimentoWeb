DROP TABLE estudantes;
CREATE TABLE estudantes(
	id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
	name VARCHAR(40) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    birth_year DATE NOT NULL,
    gender ENUM('M', 'F') NOT NULL,
    city VARCHAR(30) DEFAULT "Jucás",
    c_performance DECIMAL(5, 2),
    subscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE estudantes;

INSERT INTO estudantes (name, cpf, birth_year, gender, c_performance)
VALUES ("João", "12345678900", "1989-12-25", "M", 89.2);

INSERT INTO estudantes VALUES 
(DEFAULT, "Pedro", "12345678901", "1998-02-12", "M", DEFAULT, 90.75, DEFAULT),
(DEFAULT, "Maria", "12345678902", "1995-06-23", "F", DEFAULT, 95, DEFAULT);

SELECT * FROM estudantes;
SELECT 
	id AS ID, 
    name AS Nome, 
    c_performance AS CR,
    course AS Curso
FROM studants 
ORDER BY CR 
DESC LIMIT 10;

SELECT 
	name AS Nome, 
    birth_year AS Nascimanto, 
    CURDATE() Hoje,
    FLOOR(DATEDIFF(CURRENT_DATE(), birth_year) / 365.25) Idade
FROM studants;

DROP TABLE courses;
CREATE TABLE courses (
	id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name varchar(40) NOT NULL,
    hours TINYINT UNSIGNED
);

INSERT INTO courses VALUES
(DEFAULT, 'Programador Web', 240),
(DEFAULT, 'Ferramentas Digitais', 160),
(DEFAULT, 'Informática para o Mundo do Trabalho', 160);

SELECT * FROM courses;
SELECT * FROM estudantes;

ALTER TABLE studants 
ADD COLUMN course TINYINT UNSIGNED
AFTER c_performance;

ALTER TABLE STUDANTS
CHANGE COLUMN course
id_course TINYINT UNSIGNED
AFTER c_performance;

ALTER TABLE studants
ADD FOREIGN KEY (id_course)
REFERENCES courses(id);

SELECT id, name, course FROM STUDANTS;
UPDATE studants SET id_course = 2 WHERE id = 3;

SELECT * FROM courses;



SELECT studants.name, studants.id_course, courses.name
FROM studants INNER JOIN courses
ON studants.id_course = courses.id;

ALTER TABLE estudantes ADD course TINYINT UNSIGNED;
ALTER TABLE estudantes ADD FOREIGN KEY(course) REFERENCES courses(id);

UPDATE estudantes SET course = 3 WHERE id = 1;
SELECT * FROM estudantes;

SELECT estudantes.id, estudantes.name, courses.name FROM estudantes JOIN courses ON estudantes.course = courses.id;

USE school;