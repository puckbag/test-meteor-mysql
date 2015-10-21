DROP TABLE IF EXISTS notes;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE notes (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	user_id INT UNSIGNED NOT NULL,
	note TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO users (name) VALUES ('John'), ('Jane');

INSERT INTO notes (user_id, note) VALUES
	(1, 'John''s test note A'),
	(1, 'John''s test note B'),
	(1, 'John''s test note C'),
	(1, 'John''s test note D'),
	(2, 'Jane''s test note A'),
	(2, 'Jane''s test note B'),
	(2, 'Jane''s test note C'),
	(2, 'Jane''s test note D');
