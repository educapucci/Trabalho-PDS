import Character from "./character.js";
import PlayerInput from "./playerinput.js";

export default class Player {

  static proxId = 0;

  constructor(characterName, input){
    this.characterName = characterName;
    this.inputdata = input;
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
    this.input = new PlayerInput(this.inputdata, this);
  }

	update(){
        const inputState = this.input.handleKeyboardPlayer();

        this.character.update(inputState);
	}
}
