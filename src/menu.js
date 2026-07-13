import Game from "./models/game.js";
import Player from "./models/player.js";
//TODO: Criar classe com cena de menu para seleção de mapa e personagens

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1080
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 },
    },
  },
  scene: [Game],
};


const game = new Phaser.Game(config);

player1 = new Player("urutu");
player2 = new Player("munduruku");

game.scene.start("Game", {
  mapName: "ice",
  //players: [{characterName: "urutu"}, {characterName: "munduruku"}],
  players: [player1, player2],
  //characterNames: ["urutu", "munduruku"],
});
