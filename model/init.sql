DROP TABLE IF EXISTS subjects;
DROP TABLE IF EXISTS questions;

CREATE TABLE subjects  (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  subject VARCHAR(50)
);

CREATE TABLE questions  (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  question VARCHAR(300) NOT NULL,
  answer VARCHAR(100) NOT NULL,
  subject_id INT NOT NULL
);

ALTER TABLE questions
ADD FOREIGN KEY (subject_id) REFERENCES subjects(id);

INSERT INTO subjects (subject) VALUES ('Basic JS');
INSERT INTO questions (question, answer, subject_id) VALUES ('what is a function?', 'a set of statements that performs a task or calculates a value', 1);