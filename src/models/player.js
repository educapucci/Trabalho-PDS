import Character from "./character.js";
import PlayerInput from "./playerinput.js";

export default class Player {

  static proxId = 0;

  constructor(characterName, input){
    this.characterName = characterName;
    this.inputdata = input;
    this.id = Player.proxId++;
  }

	init(scene){
    this.character = new Character(scene);                                               
	this.input = new PlayerInput(this.inputdata, scene);
  }

	preload(){
    this.character.preload(this.characterName);
  }

create(x, y){
	this.input.init();
	this.character.create(x, y);
  }

	update(){
        this.inputState = this.input.update();

        this.character.update(this.inputState);
	}
}
