import Game from "./models/game.js";
import Player from "./models/player.js";
//TODO: Criar classe com cena de menu para seleção de mapa e personagens

export default class Menu extends Phaser.Scene{

  constructor(){
    super("Menu");
  }

  create(){
    const player1 = new Player("urutu");
    const player2 = new Player("munduruku");

    this.scene.start("Game", {
    mapName: "ice",
    //players: [{characterName: "urutu"}, {characterName: "munduruku"}],
    players: [player1, player2]
    //characterNames: ["urutu", "munduruku"],
    });
  }
}


