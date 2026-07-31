# Fight Arena Wiki

Tudo o que você precisa saber para jogar no nosso projeto.

Wiki com imagens pode ser acessado pelo link: [https://docs.google.com/document/d/1nhaxj4JxOATJHqMJ77gShDJ2iLNEWp7LHVIOB50vM_s/edit?usp=sharing]

##  Sumário

* Sobre o projeto  
* Decisão  
* Requisitos  
* Gestão do projeto  
* Tecnologias  
* Arquitetura  
* Mecânicas do jogo  
* Personagens  
* Mapas  
* Como jogar  
* Conclusão

—

### Sobre o projeto

   O intuito é desenvolver uma aplicação *web* de *videogame* 2D para a disciplina de Processo de Desenvolvimento de Software. Buscamos inspiração em jogos de luta multijogador em plataformas como o Super Smash Bros. e o Brawlhalla.

### Decisão

   A ideia da equipe era experimentar o desenvolvimento de algo desafiador que aplica conceitos estudados de arquitetura de software, portanto um jogo de videogame foi escolhido e um teste foi feito com uma pequena demonstração, o suficiente para nos fazer decidir de uma vez.

### Requisitos

###### Histórias de Usuário

* Como jogador, eu quero criar uma conta no jogo para que o meu progresso e pontuações fiquem salvos. (Não finalizada)

* Como jogador, quero jogar em diferentes mapas para tornar as partidas mais dinâmicas e diversificadas. (Não finalizada)

* Como usuário, eu gostaria de jogar um jogo de luta PVP com diferentes mapa.s (Não finalizada)

* Como jogador, eu quero adicionar e gerenciar amigos dentro do jogo para que eu possa interagir e jogar com eles facilmente. (Não finalizada)

* Como usuário, eu quero poder escolher um mapa. (Não finalizada)

* Como jogador, quero escolher entre diferentes personagens para ter experiências variadas de jogo. (Não finalizada)

* Como jogador, quero que cada personagem possua atributos próprios para proporcionar estilos de jogo diferentes. (Finalizada)

* Como jogador, quero mover meu personagem pelo cenário para participar das batalhas. (Finalizada)

* Como jogador, eu quero desferir golpes e usar habilidades contra oponentes para que eu possa derrotá-los e vencer as partidas. (Não finalizada)

* Como jogador, eu quero escolher ou ser pareado com um oponente para que eu possa iniciar uma partida competitiva. (Não finalizada)

—

### Gestão do projeto

###### Metodologia

   Comumente se utilizou o método ágil Scrum no decorrer do projeto, mas adotados práticas que são utilizadas dentro do XP (Extreme Programming), como o pair programming. 

###### Colaboradores e suas funções

Eduardo Cappucci Cunha \- PO  
Eduardo Carvalho Valadão \- Dev  
João Pedro Oliveira Fernandes \- Dev Estagiário  
Luís Henrique Vilela de Souza Aléssio \- Scrum Master  
Sérgio Filho Garcia Paim \- Dev Sênior

###### Números importantes

* Total de *sprints* realizadas: 4;  
* Total de histórias de usuário: \~10;  
* Informções do Jira: (ver link pro Google Docs)

###### Transbordos de tarefas

   A maioria das histórias não foi concluída por excesso de planejamento prévio das mesmas no Sprint inicial do projeto.

### Tecnologias

	

##### Linguagem de programação

JavaScript (ES6)

##### Engine

Phaser 3

##### Front-end

HTML  
CSS

###### Controle de versão

Git  
GitHub

—

### Arquitetura

O jogo utiliza Programação Orientação à Objetos e eventos acionados pelo motor Phaser para separar responsabilidades entre classes, como lidar com *inputs* do usuário, mover o personagem e criar um mapa.

‘’’  
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
‘’’  
(Exemplo de nova estrutura apresentada no código atual)

A classe Player intercala a interface de entrada de dados (PlayerInput) com a execução de comandos do personagem (Chraracter).

Também temos a classe Game que estende Scene pertencente ao Phaser para que controlemos tudo a partir de uma tela de navegador contendo elementos, física e eventos.

Os arquivos [menu.js](http://menu.js) e [config.js](http://config.js) são responsáveis por criar a dinâmica de classes do jogo e por configurar o comportamento da *engine*, respectivamente.

Todo arsenal de dados estáticos que vão ser carregados ao iniciar o jogo estão salvos em arquivos JSON.

—

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

### —

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

—

### Mapas

O projeto prevê ser capaz de conter múltiplos mapas com diferentes estilos de arte.

###### *Características dos mapas:*

* Plataformas (aéreas e terrestres)  
* Locais de *spawn* dos players  
* Arte de fundo

(planejamento: escolher dentre mais de um mapa no menu)

—

### Como jogar

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

(Exemplo de comandos de movimento e seus *keycode*s do teclado para os *players* 1 e 2\)

—

### Conclusão

   Embora tenhamos progredido bem pouco para a ideia inicial de ser um jogo completo, aprendemos que um bom planejamento prévio evita transbordo de tarefas.  
   Houveram muitas dificuldades para conciliar tempo de desenvolvimento com outras tarefas de nossas rotinas, principalmente também acadêmicas como esta aqui, reforçando o cuidado que devemos ter no método Scrum e em qualquer outro time de desenvolvimento de software que decidamos participar.
