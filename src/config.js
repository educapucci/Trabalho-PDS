import Menu from "./menu.js"
import Game from "./models/game.js"
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
  scene: [Menu, Game],
};

const game = new Phaser.Game(config);
