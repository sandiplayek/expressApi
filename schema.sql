CREATE DATABASE notes_app;
CREATE TABLE notes (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO `notes` (`id`, `title`, `content`, `created`) 
VALUES 
(NULL, 'My first note', 'My first note content', CURRENT_TIMESTAMP), 
(NULL, 'My second note', 'My second note content', CURRENT_TIMESTAMP);
