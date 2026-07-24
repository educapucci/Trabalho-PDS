import Map from "./map.js";
import Character from "./character.js";
import Player from "./player.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  init(data) {
    if(!data.players) return;

    this.mapName = data.mapName;

    this.map = new Map(this);
    this.players = data.players;

    this.players.forEach((player) => {
      player.init(this);
    });
  }

  preload() {
    this.map.preload(this.mapName);

    this.players.forEach((player) => {
      player.preload();
    });
	}

  create() {
    this.physics.world.createDebugGraphic();
    this.map.create();

    for (let i = 0; i < this.players.length; i++) {
      this.players[i].create(
        this.map.spawn_location[i].x,
        this.map.spawn_location[i].y,
      );
    }

    this.players.forEach((player) => {
      this.physics.add.collider(player.character.sprite, this.map.platforms);
    });
  }

  update() {
    this.players.forEach((player) => {
      player.update();
    });
}
}
