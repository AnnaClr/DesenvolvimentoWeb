CREATE DATABASE school;
DROP DATABASE school;

USE school;

CREATE TABLE studants(
	named VARCHAR(50) NOT NULL,
    age INT NOT NULL
);

DROP TABLE studants;

SELECT * FROM studants;
DESCRIBE studants;

INSERT INTO studants(nome, age) VALUES("Samila", 18);
INSERT INTO studants VALUES('Emanuel', 30, DEFAULT);
INSERT INTO studants(age, nome) VALUES(16, 'Murilo');

SET SQL_SAFE_UPDATES = 0;

UPDATE studants SET age = 30 WHERE named = 'Emanuel';

ALTER TABLE studants ADD COLUMN city VARCHAR(20) NOT NULL;
ALTER TABLE studants ADD id INT NOT NULL FIRST; 
ALTER TABLE estudantes ADD id VARCHAR(11) NOT NULL FIRST;


ALTER TABLE studants DROP COLUMN id;

ALTER TABLE estudantes RENAME TO studants;
DESCRIBE studants;
ALTER TABLE studants CHANGE COLUMN id ID INT UNIQUE FIRST;

ALTER TABLE studants CHANGE COLUMN named nome VARCHAR(40) NOT NULL;
ALTER TABLE studants CHANGE city cidade VARCHAR(20) DEFAULT 'Jucás';
