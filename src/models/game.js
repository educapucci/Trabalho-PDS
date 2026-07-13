import Map from "./map.js";
import Character from "./character.js";

export default class Game extends Phaser.Scene {
  constructor() {
    // Declara o nome da cena como 'Game'
    super("Game");
    //this.players = [];
  }

  init(data) {
    this.mapName = data.mapName;
    //this.characterNames = data.characterNames;

    this.map = new Map(this);

    this.players = data.players;

    this.players.forEach((player) => {
      player.init(this.scene);
    });


    /*
    BAGUGA OU MORTE? MORTE
    this.characterNames.forEach(() => {
      this.players.push(new Character(this));
    });
    */

  }

  preload() {
    this.map.preload(this.mapName);

    this.players.forEach((player) => {
      player.preload();
    });

    /*
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].preload(this.characterNames[i]);
    }
      */
  }

  create() {
    // Debugger
    this.physics.world.createDebugGraphic();

    this.map.create();

    for (let i = 0; i < this.players.length; i++) {
      this.players[i].character.create(
        this.map.spawn_location[i].x,
        this.map.spawn_location[i].y,
      );
    }

    /*for (let i = 0; i < this.players.length; i++) {
      this.players[i].create(
        this.map.spawn_location[i].x,
        this.map.spawn_location[i].y,
      );
    }
    */
    this.players.forEach((player) => {
      this.physics.add.collider(player.character.sprite, this.map.platforms);
    });

    // Player 1 - setas
  this.cursors = this.input.keyboard.createCursorKeys();

  // Player 2 - WASD
  this.wasd = this.input.keyboard.addKeys({
    up: Phaser.Input.Keyboard.KeyCodes.W,
    left: Phaser.Input.Keyboard.KeyCodes.A,
    down: Phaser.Input.Keyboard.KeyCodes.S,
    right: Phaser.Input.Keyboard.KeyCodes.D,
  });

  }

  update() {
  // Munduruku (setas) - agora é players[1]
  const player1 = this.players[1].character;
  if (this.cursors.left.isDown) {
    player1.moveLeft();
  } else if (this.cursors.right.isDown) {
    player1.moveRight();
  }  else if (Phaser.Input.Keyboard.JustDown(this.cursors.up)) {
    player1.jump();
  } else {
    player1.stop();
  }
  

  // Urutu (WASD) - agora é players[0]
  const player2 = this.players[0].character;
  if (this.wasd.left.isDown) {
    player2.moveLeft();
  } else if (this.wasd.right.isDown) {
    player2.moveRight();
  }  else if (Phaser.Input.Keyboard.JustDown(this.wasd.up)) {
    player2.jump();
  } else {
    player2.stop();
  }
}
}
