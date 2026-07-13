import Map from "./map.js";
import Character from "./character.js";

export default class Game extends Phaser.Scene {
  constructor() {
    // Declara o nome da cena como 'Game'
    super("Game");
    this.players = [];
  }

  init(data) {
    this.mapName = data.mapName;
    this.characterNames = data.characterNames;

    this.map = new Map(this);

    this.characterNames.forEach(() => {
      this.players.push(new Character(this));
    });
  }

  preload() {
    this.map.preload(this.mapName);

    for (let i = 0; i < this.players.length; i++) {
      this.players[i].preload(this.characterNames[i]);
    }
  }

  create() {
    // Debugger
    this.physics.world.createDebugGraphic();

    this.map.create();

    for (let i = 0; i < this.players.length; i++) {
      this.players[i].create(
        this.map.spawn_location[i].x,
        this.map.spawn_location[i].y,
      );
    }

    this.players.forEach((player) => {
      this.physics.add.collider(player.sprite, this.map.platforms);
    });
  }

  update() {}
}
