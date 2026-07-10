import Map from "./map.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  init(data) {
    this.mapName = data?.mapName || "defaultMap";
    this.characterNames = data?.characterNames || [];

    this.map = new Map(this);
  }

  preload() {
    this.map.load(this.mapName);
  }

  create() {
    this.map.create();
  }

  update() {}

  getConfig() {
    return {
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
          gravity: {
            y: 1000,
          },
        },
      },

      scene: {
        preload: game.preload(this),
        create: game.create(this),
        update: game.update(this),
      },
    };
  }
}
