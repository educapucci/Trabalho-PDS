import Game from "./models/game.js";

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
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

game.scene.start("Game", {
  mapName: "ice",
});
