INSERT INTO tb_user (name, username, password) VALUES ('Rodrigo JF', 'rodrigo', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, username, password) VALUES ('Ana Grey', 'ana', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_movie (sub_title, synopsis, title, year) VALUES ('Subtitle do filme A', 'Synopsis do filme A', 'Filme A', 2023);

INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Comentario sobre o filme A', 1, 1);