-- Create Table: user_session
--------------------------------------------------------------------------------
CREATE TABLE user_session
(
	`id` INT NOT NULL AUTO_INCREMENT
	,PRIMARY KEY (id)
	,`user_id` INT NOT NULL AUTO_INCREMENT
	,`user_token` VARCHAR(250) NOT NULL 
)
ENGINE=INNODB



-- Create Table: users
--------------------------------------------------------------------------------
CREATE TABLE users
(
	`id` INT NOT NULL AUTO_INCREMENT
	,PRIMARY KEY (id)
	,`user_first_name` VARCHAR(250) NOT NULL 
	,`user_last_name` VARCHAR(250) NOT NULL 
	,`user_email` VARCHAR(250) NOT NULL 
	,`password` VARCHAR(250) NOT NULL 
	,`user_role_id` INT NOT NULL 
)
ENGINE=INNODB



-- Create Table: app_feature
--------------------------------------------------------------------------------
CREATE TABLE app_feature
(
	`id` INT NOT NULL AUTO_INCREMENT
	,PRIMARY KEY (id)
	,`feature_name` VARCHAR(250) NOT NULL 
	,`parent` INT  NULL 
	,`level` INT  NULL 
	,`url` VARCHAR(250)  NULL 
	,`class` VARCHAR(250)  NULL 
)
ENGINE=INNODB



-- Create Table: user_roles
--------------------------------------------------------------------------------
CREATE TABLE user_roles
(
	`id` INT NOT NULL AUTO_INCREMENT
	,PRIMARY KEY (id)
	,`role_name` VARCHAR(250) NOT NULL 
	,`status` VARCHAR(250) NOT NULL 
)
ENGINE=INNODB



-- Create Table: user_permissions
--------------------------------------------------------------------------------
CREATE TABLE user_permissions
(
	`id` INT NOT NULL AUTO_INCREMENT
	,PRIMARY KEY (id)
	,`role_id` INT NOT NULL 
	,`feature_id` VARCHAR(250)  NULL 
)
ENGINE=INNODB



-- Create Foreign Key: users.id -> user_session.user_id
ALTER TABLE users ADD FOREIGN KEY (id) REFERENCES user_session(user_id);


-- Create Foreign Key: user_roles.id -> users.user_role_id
ALTER TABLE user_roles ADD FOREIGN KEY (id) REFERENCES users(user_role_id);


