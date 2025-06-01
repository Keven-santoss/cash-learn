DROP DATABASE IF EXISTS TCC_SQL2;

CREATE DATABASE TCC_SQL2;

SHOW DATABASES;

USE TCC_SQL2;

CREATE TABLE usuario 
( 
 id INT PRIMARY KEY AUTO_INCREMENT,  
 senha VARCHAR(100),  
 email VARCHAR(50) NOT NULL,  
 nome VARCHAR(50) NOT NULL,  
 UNIQUE (email)
); 


CREATE TABLE categoria 
( 
 id INT PRIMARY KEY,  
 nome VARCHAR(50) NOT NULL  
); 


CREATE TABLE aula 
( 
 id INT PRIMARY KEY AUTO_INCREMENT,  
 nome VARCHAR(150) NOT NULL,  
 link VARCHAR(150) NOT NULL,
 duração VARCHAR(20) NOT NULL
); 


CREATE TABLE mensagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NULL,
    email VARCHAR(255) NOT NULL,
    mensagem TEXT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON DELETE CASCADE
);


CREATE TABLE aula_categoria
 (
    aula_id INT NOT NULL,
    categoria_id INT NOT NULL,
    PRIMARY KEY (aula_id, categoria_id),
    FOREIGN KEY (aula_id) REFERENCES aula(id),
    FOREIGN KEY (categoria_id) REFERENCES categoria(id)
);
 

CREATE TABLE participa
 (
    usuario_id INT NOT NULL,
    categoria_id INT NOT NULL,
    PRIMARY KEY (usuario_id, categoria_id),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (categoria_id) REFERENCES categoria(id)
);
 

SHOW TABLES;


INSERT INTO categoria (id, nome)
VALUES (1,'Como sair das dividas'),
		  (2, 'Bolsa de valores'),
		   (3, 'Tesouro direto'),
			 (4, 'Poupança'),
				(5, 'CDB')
			 
INSERT INTO aula (id, nome, link, duração)
VALUES (1, 'Canal Gêmeos Investem, TESOURO DIRETO COMO FUNCIONA (SELIC, PREFIXADO, IPCA+) QUAL É MELHOR?', 'https://youtu.be/OOEssu7j5UQ', '25:26'),

		 (2, 'Canal Me Poupe! Tesouro Direto para iniciantes: do Selic ao Renda+! Como investir?', 'https://youtu.be/y2sBkIX72-g', '12:20'),
		 
		 (3, 'Canal Me Poupe! TESOURO DIRETO SIMPLIFICADO 2024: 6 passos pra investir TODO MÊS.', 'https://youtu.be/KK-GmGMcWfQ', '10:32'),
		 
		 (4, 'Canal Primo Rico, Tesouro IPCA + | Entenda Como Funciona e Invista Melhor! (NTN-B)', 'https://youtu.be/gs3-nGp7LiI', '13:31'),
		 
		 (5, 'Canal Investidor Sarinha, Raul Sena O perigo de investir no Tesouro Direto... Por isso muitos perdem dinheiro', 'https://youtu.be/AT1CSLrcL_I', '15:04'),
		
		 (6, 'Canal Jovens de negocios, COMO INVESTIR NA BOLSA DE VALORES: O PASSO A PASSO PARA INICIANTES', 'https://www.youtube.com/watch?v=bcNmZdtMMt8', '11:55'),
		 
		 (7, 'Canal Jovens de negocios, Como funciona a bolsa de valores?', 'https://www.youtube.com/watch?v=W_kfS2boa_Y', '22:31'),
		
		 (8, 'Canal Primo Rico,COMO ANALISAR E ESCOLHER AS MELHORES AÇÕES DA BOLSA DE VALORES?', 'https://www.youtube.com/watch?v=VPWAN5QPXJw','28:42'),
		
		 (9, 'Canal Henrique Stuart, COMO ANALISAR E ESCOLHER AS MELHORES AÇÕES DA BOLSA DE VALORES?', 'https://www.youtube.com/watch?v=rCuMvgeweRw', '14:37'),
		
		 (10, 'Canal Truque do Valor, BOLSA DE VALORES PARA LEIGOS (E ESPERTOS) - Aprenda HOJE!', 'https://www.youtube.com/watch?v=8K_eJ_8vqHM', '12:56'),		 
		
		 (11, 'Canal Dagiele Weippert - GSD - Geração sem dívida, Como quitar dívidas rapidamente? ', 'https://www.youtube.com/watch?v=ty2V4FVP5k0&t=1450s', '01:10:30'),
		
		 (12, 'Canal Leo Rocha, COMO SAIR DAS DIVIDAS GANHANDO POUCO DINHEIRO ', 'https://www.youtube.com/watch?v=o9PubnWiAQs', '14:30'),
		
		 (13, 'Canal Gêmeos Investem,COMO SAIR DAS DÍVIDAS E ORGANIZAR SUA VIDA FINANCEIRA EM 6 MESES!', 'https://www.youtube.com/watch?v=Qm6HdD7sY1c', '12:35'),
		
		 (14, 'Canal  ESTRATÉGIAS PARA NEGOCIAR DÍVIDA DO CARTÃO, ESTRATÉGIAS PARA NEGOCIAR DÍVIDA DO CARTÃO ', 'https://www.youtube.com/watch?v=wHEhsUNPfJA', '04:41'),
		
		 (16, 'Canal Andre Bona, O que é Poupança? ', 'https://www.youtube.com/watch?v=dmzmo_9bED0', '04:45'),
		
		 (17, 'Canal Primo Rico, Poupança: Aquilo que você ainda não sabe!', 'https://www.youtube.com/watch?v=5gbWDlsQDAo', '13:40'),
		
		 (18, 'Canal ONDE INVESTIR? | Maicon Lima Investidor, QUAL É A MELHOR POUPANÇA? ', 'https://www.youtube.com/watch?v=WIQjPdFsdzQ', '07:43'),
		
		 (19, 'Canal Julia Cassol Borges, COMO FUNCIONA A POUPANÇA? ', 'https://www.youtube.com/watch?v=Jx-6Gp_-oRQ', '08:45'),
		 
		 (20, 'Canal EconoMirna,  POUPANÇA, tudo o que você PRECISA SABER! Vale a pena investir? ', 'https://www.youtube.com/watch?v=eO5yazPdI9c', '09:14' ),
		 
	 	 (15, 'Canal Dinheiro a vista, Aprenda a NEGOCIAR suas dívidas com o banco!', 'https://www.youtube.com/watch?v=Ili2ntBNLfY', '13:13'),
		 
		 (21, 'Canal EconoMirna, Como investir em CDB? Saiba tudo sobre esse INVESTIMENTO!', 'https://www.youtube.com/watch?v=7TUWWN6AIeY', '13:08'),

		 (22, 'Canal Investidor Sardinha l Raul Sena O que é um CDB na prática e quais são os RISCOS de investir nisso?', 'https://www.youtube.com/watch?v=1i92Sn4fCg0', '13:48'),

		 (23, 'Canal da Evolução, O que é CDB? Quais São Os Riscos da Renda Fixa? | Como Começar a Investir','https://www.youtube.com/watch?v=zkcpFhsgOaY' ,'15:49'),

		 (24, 'Canal Primo Pobre, AULA SOBRE CDB - O Investimento que RENDE MAIS DINHEIRO e que NUNCA DÁ PREJUÍZO!', 'https://www.youtube.com/watch?v=Ofd6goeBFho', '19:25'),

		 (25, 'Canal Mais Rico Todo Dia, QUANTO RENDEU (por dia) R$ 1000,00 em 1 mês no CDB LIQUIDEZ DIÁRIA', 'https://www.youtube.com/watch?v=94_JwfOpEZw','15:28')


INSERT INTO aula_categoria(aula_id, categoria_id)
VALUES (1, 3),
		 (2, 3),
		 (3, 3),
		 (4, 3),
		 (5, 3),
		 (6, 2),
		 (7, 2),
		 (8, 2),
		 (9, 2),
		 (10, 2),
		 (11, 1),
		 (12, 1),
		 (13, 1),
		 (14, 1),
		 (15, 1),
		 (16, 4),
		 (17, 4),
		 (18, 4),
		 (19, 4),
		 (20, 4),
		 (21, 5),
		 (22, 5),
		 (23, 5),
		 (24, 5),
		 (25, 5)

SELECT * FROM usuario;

SELECT * FROM categoria;

SELECT * FROM aula;

SELECT * FROM participa;

SELECT * FROM aula_categoria;

SELECT * FROM mensagens;


DROP TABLE contem;