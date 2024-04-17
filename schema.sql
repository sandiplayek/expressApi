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


ALTER TABLE `notes` ADD `createBy` INT(4) NULL AFTER `id`;


CREATE TABLE `users` ( 
    `id` INT(4) NOT NULL AUTO_INCREMENT , 
    `name` VARCHAR(200) NOT NULL , 
    `email` VARCHAR(200) NOT NULL ,
     PRIMARY KEY (`id`)) ENGINE = InnoDB;

INSERT INTO `users` (`id`, `name`, `email`) 
VALUES 
(NULL, 'sandip', 'sandip@example.com'), 
(NULL, 'rabin', 'rabin@example.com');

