import Game from "./models/game.js";
import Player from "./models/player.js";
//TODO: Criar classe com cena de menu para seleção de mapa e personagens

export default class Menu extends Phaser.Scene{


  constructor(){
    super("Menu");
  }

  preload() {
    this.load.json("inputdata", "assets/inputs/data.json");
  }

  create(){
    const teclados = this.cache.json.get("inputdata");

    const player1 = new Player("urutu", teclados[0]);
    const player2 = new Player("munduruku", teclados[1]);

    this.scene.start("Game", {
      mapName: "ice",
      //players: [{characterName: "urutu"}, {characterName: "munduruku"}],
      players: [player1, player2]
      //characterNames: ["urutu", "munduruku"],
    });
  }
}
