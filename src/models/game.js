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
    this.player2 = new Character(this);
  }

  preload() {
    this.map.preload(this.mapName);
    this.player1.preload(this.characterNames[0]);
    this.player2.preload(this.characterNames[1]);
  }

  create() {
    this.physics.world.createDebugGraphic();

    this.map.create();

    this.player1.create(
      this.map.p1_spawn_location.x,
      this.map.p1_spawn_location.y,
    );

    this.player2.create(
      this.map.p2_spawn_location.x,
      this.map.p2_spawn_location.y,
    );

    this.physics.add.collider(this.player1.sprite, this.map.platforms);
    this.physics.add.collider(this.player2.sprite, this.map.platforms);
  }

  update() {}
}
