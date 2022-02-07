CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `surname` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `image` VARCHAR(255),
   `id_category` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `users_category` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products_category` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `description` VARCHAR(255),
   `price` FLOAT NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   `id_category` INT NOT NULL,
   `id_ubicacion` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products_ubicacion` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_2b67a247-d63f-4e12-8d79-c285024d8ada` FOREIGN KEY (`id_category`) REFERENCES `users_category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `products` ADD CONSTRAINT `FK_ccb1fa8e-640e-4528-bcd7-eb09ffdc7edd` FOREIGN KEY (`id_category`) REFERENCES `products_category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `products` ADD CONSTRAINT `FK_efa9238b-d7d2-451c-9cd2-08775142a895` FOREIGN KEY (`id_ubicacion`) REFERENCES `products_ubicacion`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
