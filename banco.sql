drop database if exists playmusic;
create database playmusic;
use playmusic;
create table musicas(
id int primary key,
nome_musica varchar(300),
cantor_musica varchar(300),
genero_musica varchar(300),
letra_musica varchar(2000),
capa_musica varchar(2000),
lancamento_musica varchar(4),
ouvintes_musica varchar(100)
);


create table usuarios(
id int primary key,
nome_usuario varchar(300),
email_usuario varchar(300),
senha_usuario varchar(300),
foto_usuario  varchar(3000)
);

create table album(
id int primary key,
nome_album varchar(300),
cantor_album varchar(300),
quant_musicas_album varchar(300),
lancamento_album varchar(4),
capa_album varchar(2000),
ouvintes_album varchar(300)
);

create table comentarios(
id int primary key,
nome_usuario varchar(200) not null,
comentarios TEXT not null
 );

insert into musicas values ('1','Evidências','Chitãozinho & Xororó','Sertanejo','A música fala sobre um amor inegável e intenso, com letras marcantes que expressam o desejo de admitir sentimentos que são difíceis de esconder. É considerada um clássico do sertanejo e tem grande popularidade no Brasil.','https://e-cdns-images.dzcdn.net/images/cover/3e0fc453b6f411cfbe99ef3151161b20/500x500-000000-80-0-0.jpg','1990','91 mi');
INSERT INTO musicas VALUES ('2', 'Billie Jean', 'Michael Jackson', 'Pop/R&B', 'A música conta a história de uma mulher chamada Billie Jean, que afirma que o narrador é o pai de seu filho. A letra é marcada pelo mistério e aborda questões de fama, obsessão e a responsabilidade emocional.', 'https://cdns-images.dzcdn.net/images/cover/544862aa5be45bc82ad4ab1a14daf63a/1900x1900-000000-80-0-0.jpg');
INSERT INTO musicas VALUES ('3', 'Bohemian Rhapsody', 'Queen', 'Rock progressivo/opera rock', 'A música narra uma história dramática, começando com um tom confessional e progredindo para elementos operísticos e, finalmente, um solo de rock explosivo. A letra fala sobre arrependimento, redenção e um conflito interno intenso.', 'https://cdn.ome.lt/rnoq34G99QgHHO2JGVKSu1KPfWI=/fit-in/837x500/smart/uploads/conteudo/fotos/queen-ii.jpg', '1975', '1,8 bi');
INSERT INTO musicas VALUES ('4', 'Smells Like Teen Spirit', 'Nirvana', 'Grunge', 'A letra fala sobre a alienação e a apatia da juventude, com uma abordagem descontraída e desafiadora. Kurt Cobain escreveu a música como um grito de revolta, questionando as normas sociais e refletindo a atmosfera de uma geração.', 'https://cdns-images.dzcdn.net/images/cover/f0282817b697279e56df13909962a54a/1900x1900-000000-80-0-0.jpg', '1991', '1,9 bi');
INSERT INTO musicas VALUES ('5', 'Tempo Perdido', 'Legião Urbana', 'Rock brasileiro', 'Escrita por Renato Russo, a música aborda reflexões sobre o tempo, a vida, e os momentos que deixamos passar. É uma canção sobre nostalgia e a importância de valorizar o presente.', 'https://i1.sndcdn.com/artworks-000495694974-9u4bgf-t500x500.jpg', '1986', '6,6 bi');

insert into usuarios values ('1','João Silva','joao.silva@email.com','1234Joao!','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrZc64RQAM2qivrKQQsKfffTz_QzTrKFVjmA&s');
INSERT INTO usuarios VALUES ('2', 'Maria Oliveira', 'maria.oliveira@email.com', 'Maria@5678', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxouKn4GZfNWyCd3b3tW46k60Bq7rCk2mzug&s');
INSERT INTO usuarios VALUES ('3', 'Pedro Santos', 'pedro.santos@email.com', 'Pedro#91011', 'https://img.freepik.com/fotos-gratis/retrato-de-homem-em-estilo-anime-de-vista-lateral_23-2151067399.jpg');
INSERT INTO usuarios VALUES ('4', 'Ana Costa', 'ana.costa@email.com', 'AnaCosta$2024', 'https://img.freepik.com/fotos-gratis/retrato-de-homem-em-estilo-anime-de-vista-lateral_23-2151067399.jpg');
INSERT INTO usuarios VALUES ('5', 'Lucas Pereira', 'lucas.pereira@email.com', 'LucasPereira*12', 'https://i.pinimg.com/236x/14/71/d6/1471d6e29dce10e758a39fced2540ab3.jpg');



insert into album values ('1','21','Adele','11','2011','https://upload.wikimedia.org/wikipedia/pt/c/cf/Capa_de_21_por_Adele.jpg','10000');
INSERT INTO album VALUES ('2', 'Norman Fucking Rockwell!', 'Lana Del Rey', '14', '2019', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShAGu1gGmRGGBLXodHk7WROIf88E6k-NE0rw&s', '20 bi');
INSERT INTO album VALUES ('3', 'Donda', 'Kanye West', '27', '2021', 'https://static.stealthelook.com.br/wp-content/uploads/2021/08/kanye-west-donda-album-novo-cover-capa-20210806145519.jpg', '30 bi');
INSERT INTO album VALUES ('4', 'Rumours', 'Fleetwood Mac', '11', '1977', 'https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG', '15 bi');
INSERT INTO album VALUES ('5', 'Future Nostalgia', 'Dua Lipa', '11', '2020', 'https://upload.wikimedia.org/wikipedia/pt/c/c7/Dua_Lipa_-_Future_Nostalgia.png', '24 bi');

