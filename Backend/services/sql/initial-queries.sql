-- registration table
CREATE TABLE IF NOT EXISTS `registration`(
  `user_id` int auto_increment,
  `user_name` varchar(255) not null,
  `user_email` varchar(255) not null,
  `user_password` varchar(255) not null,
  PRIMARY KEY (user_id),
  UNIQUE KEY (user_email)
) ENGINE = InnoDB;

-- user profile table
CREATE TABLE IF NOT EXISTS `profile`(
  `user_profile_id` int auto_increment,
  `user_id` int not null,
  `first_name` varchar(255) not null,
  `last_name` varchar(255) not null,        
  PRIMARY KEY (user_profile_id),
  FOREIGN KEY (user_id) REFERENCES registration(user_id)
) ENGINE = InnoDB;

-- question table
CREATE TABLE IF NOT EXISTS `question`(
  `question_id` int auto_increment,
  `question` varchar(255) not null,
  `question_description` varchar(255) not null,
  `user_id` int not null,        
  PRIMARY KEY (question_id),
  FOREIGN KEY (user_id) REFERENCES registration(user_id)
) ENGINE = InnoDB;

-- answer table
CREATE TABLE IF NOT EXISTS `answer`(
  `answer_id` int auto_increment,
  `answer` varchar(255) not null,
  `user_id` int not null, 
  `question_id` int not null,       
  PRIMARY KEY (answer_id),
  FOREIGN KEY (question_id) REFERENCES question(question_id)
) ENGINE = InnoDB;
