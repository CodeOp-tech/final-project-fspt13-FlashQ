DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS subjects;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(200) NOT NULL
);

CREATE TABLE subjects  (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  subject VARCHAR(50),
  user_id INT NOT NULL DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE questions  (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  question VARCHAR(300) NOT NULL,
  answer VARCHAR(100) NOT NULL,
  subject_id INT NOT NULL,
  FOREIGN KEY (subject_id) REFERENCES subjects(id)
);



INSERT INTO users (name, email, password, id) VALUES ('Yakana', 'yakana@gmail.com', '#test', 1);
INSERT INTO subjects (subject, user_id) VALUES ('Basic JS', 1);
INSERT INTO questions (question, answer, subject_id) VALUES ('what is a function?', 'a set of statements that performs a task or calculates a value', 1);

INSERT INTO users (name, email, password, id) VALUES ('Yakana2', 'yakana@gmail.com', '#test', 2);
INSERT INTO subjects (subject, user_id) VALUES ('Basic CSS', 2);
INSERT INTO questions (question, answer, subject_id) VALUES ('what is a element?', 'An HTML element is defined by a start tag, some content, and an end tag.
', 2);
