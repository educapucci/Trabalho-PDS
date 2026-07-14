import Character from "./character.js";
export default class Player {

  static proxId = 0;


  constructor(characterName){
    this.characterName = characterName;
    this.id = Player.proxId++;
    //this.character=NULL;
  }

  init(scene){
    this.character = new Character(scene);                                               
  }

  preload(){
    this.character.preload(this.characterName);
  }

  create(x, y){
    
  }

  /*#JOGO
  inputs (teclado)
  character usado - os dados passa pelo player e volta direto ao game
  playerupdate - atualiza o estado do character (posicao, animacao, etc)
  json - para cada usuario qual e o seu controle (esse json sera carregado no construtor 
    da classe player)*/
  
  }