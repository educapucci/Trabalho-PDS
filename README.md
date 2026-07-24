# Trabalho-PDS

# Fight Arena Wiki

Tudo o que você precisa saber para jogar no nosso projeto.

##  Sumário

* Sobre o projeto  
* Tecnologias  
* Arquitetura  
* Mecânicas do jogo  
* Personagens  
* Mapas  
* Como jogar  
* Colaboradores


### Sobre o projeto

	O intuito é desenvolver uma aplicação *web* de *videogame* 2D para a disciplina de Processo de Desenvolvimento de Software. Buscamos inspiração em jogos de luta multijogador em plataformas como o Super Smash Bros. e o Brawlhalla.


### Tecnologias


##### Linguagem de programação

JavaScript (ES6)

##### Engine

Phaser 3

##### Front-end

HTML  
CSS

##### Controle de versão

Git  
GitHub


### Arquitetura

	Jogo utiliza Programação Orientação à Objetos e eventos acionados pelo motor Phaser para separar responsabilidades entre classes, como lidar com *inputs* do usuário, mover o personagem e criar um mapa.


Player  
│  
├── PlayerInput  
│      │  
│      └── lê teclado  
│  
└── Character  
       │  
       ├── Física  
       ├── Sprite  
       ├── Estados  
       └── Combate  

A classe Player intercala a interface de entrada de dados (PlayerInput) com a execução de comandos do personagem (Chraracter).

Também temos a classe Game que extende Scene pertencente ao Phaser para que controlemos tudo a partir de uma tela de navegador contendo elementos, física e eventos.

Os arquivos [menu.js](http://menu.js) e [config.js](http://config.js) são responsáveis por criar a dinâmica de classes do jogo e por configurar o comportamento da *engine*, respectivamente.

Todo arsenal de dados estáticos que vão ser carregados ao iniciar o jogo estão salvos em arquivos JSON.


### Mecânicas do jogo

###### *Movimentação:*

	Acione teclas como W, S, A e D ou *UP, LEFT, DOWN, RIGHT* para pular, ir para a esquerda, cair rapidamente e ir para a direita, respectivamente;

##### *Ataque:*

	Em desenvolvimento.  
	(planejamento: 

* ataque neutro  
* ataque lateral  
* ataque aéreo  
* knockback)

		

###### *Condição de Vitória:*

	Em desenvolvimento.  
(planejamento:

* O objetivo é derrubar os adversários para fora da arena.)


### Personagens

Esses sãos seus estados que estão planejados:  
‘’’  
Idle  
Walk  
Run  
Jump  
Fall  
Dive  
Attack  
Hit  
Stun  
Dead  
‘’’

Cada estado define na classe Charater:

‘’’  
animações  
movimentação  
transições  
ataques permitidos  
‘’’

(planejamento: personagens também possuirão velocidade, peso, força e ataques exclusivos)


### Mapas

O projeto prevê ser capaz de conter múltiplos mapas com diferentes estilos de arte.

###### *Características dos mapas:*

* Plataformas (aéreas e terrestres)  
* Locais de *spawn* dos players  
* Arte de fundo

(planejamento: escolher dentre mais de um mapa no menu)


### Como jogar

	Essa é a parte mais divertida\!

  Para rodar dê cd no diretório do projeto e execute o seguinte comando:

```
python3 -m http.server
```

(dessa forma demonstrada, é necessário ter o Python instalado na máquina)

	Como está baseado em jogos multiplayer, o projeto atualmente está configurado para atender até 2 jogadores no mesmo teclado, sendo essas as seguintes teclas de movimentação (e ataque \[não desenvolvido\]):

PLAYER 1:  
‘’’  
   	"left" \= "A",  
    "right" \="D",  
   	"jump" \= "W",  
    "dive" \= "S";  
‘’’  
PLAYER 2:  
‘’’  
	"left" \= "LEFT",  
	"right" \= "RIGHT",  
    "jump" \= "UP",  
    "dive" \= "DOWN".  
‘’’

(exemplo de comandos de movimento e seus *keycode*s do teclado para os *players* 1 e 2\)


### Colaboradores

	Eduardo Cappucci Cunha  
	Eduardo Carvalho Valadão  
	João Pedro Oliveira Fernandes  
	Luís Henrique Vilela de Souza Aléssio  
	Sérgio Filho Garcia Paim
