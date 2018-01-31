CREATE DATABASE Twitter;
use twitter;
CREATE TABLE users
id int not null AUTO_INCREMENT,
email varchar(255) not null, 
username varchar(255) not null, 
name varchar(40) not null, 
password varchar(255) not null,
theme  varchar(255),
location  varchar(255),
bio  varchar(255),
birth_date_d int,
birth_date_m int,
birth_date_y int,
show_dm boolean not null ,
show_y boolean not null ,
created_at TIMESTAMP not null DEFAULT now()
privacy int(1),
PRIMARY KEY (id)

CREATE TABLE Follow
following_id int,
follower_id int,
follow_date TIMESTAMP not null DEFAULT now(),
PRIMARY KEY (following_id,follower_id),
FOREIGN KEY (following_id) REFERENCES users(id),
FOREIGN KEY (follower_id) REFERENCES users(id)

CREATE TABLE twitters
id not null AUTO_INCREMENT,
content varchar(140) not null,
type int not null,
created_at TIMESTAMP not null DEFAULT now(),
users_id int ,
twitterphoto_id int,
PRIMARY KEY (id),
FOREIGN KEY (users_id) REFERENCES users(id),
FOREIGN KEY (twitterphoto_id) REFERENCES twitterphoto(id)

CREATE TABLE twitterphoto
id int AUTO_INCREMENT,
twitters_id int,
url varchar(255) not null,
PRIMARY KEY (id),
FOREIGN KEY (twitters_id) REFERENCES twitters(id)

CREATE TABLE hsahtags
(
    name varchar(30);
    created_at TIMESTAMP not null DEFAULT now();
    PRIMARY key (name)
);
CREATE TABLE tweet_hsahtage
(
    tweet_id int,
    hsahtag varchar(30)
    PRIMARY key (tweet_id,hsahtag)
    FOREIGN KEY (tweet_id) REFERENCES twitterphoto(id)
    FOREIGN KEY (hsahtag) REFERENCES hsahtags(name)
);
CREATE TABLE tweet_polls
(
    tweet_id int,
    end_time TIMESTAMP not null,
    PRIMARY key (tweet_id)
    FOREIGN KEY (tweet_id) REFERENCES twitterphoto(id)
);
CREATE TABLE tweet_choices
(
    id int AUTO_INCREMENT,
    tweet_id int,
    content varchar(25)
    PRIMARY key (id)
    FOREIGN KEY (tweet_id) REFERENCES twitterphoto(id)
);

CREATE TABLE tweet_votes
(
    user_id int,
    choice_id int,
    tweet_id int,
    created_at TIMESTAMP not null DEFAULT now(),
    PRIMARY key (user_id,tweet_id)
    FOREIGN KEY (tweet_id) REFERENCES twitterphoto(id)
    FOREIGN KEY (user_id) REFERENCES users(id)
    FOREIGN KEY (choice_id) REFERENCES tweet_choices(id)
);
CREATE TABLE likes
userlike_id int,
twitters_id int,
likes int(1),
PRIMARY KEY (userlike_id,twitters_id),
FOREIGN KEY (userlike_id) REFERENCES users(id),
FOREIGN KEY (twitters_id) REFERENCES twitters(id)

CREATE TABLE reply
userreply_id int,
twitreply_id int,
textsreply text,
replydate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (userreply_id,twitreply_id),
FOREIGN KEY (userreply_id) REFERENCES users(id),
FOREIGN KEY (twitreply_id) REFERENCES twitters(id)

CREATE TABLE retweet
twitters_id int,
PRIMARY KEY (userreply_id,twitters_id),
FOREIGN KEY (userreply_id) REFERENCES users(id),
FOREIGN KEY (twitreply_id) REFERENCES twitters(id)

