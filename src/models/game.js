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
    this.map.preload(this.mapName);
  }

  create() {
    this.map.create();
  }

  update() {}
}
