import Map from "./map.js";
import Character from "./character.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  init(data) {
    this.mapName = data?.mapName || "defaultMap";
    this.characterNames = data?.characterNames || [];

    this.map = new Map(this);
    this.player1 = new Character(this);
  }

  preload() {
    this.map.preload(this.mapName);
    this.player1.preload(this.characterNames[0]);
  }

  create() {
    this.map.create();
    this.player1.create(350, 477.5);
  }

  update() {}
}
