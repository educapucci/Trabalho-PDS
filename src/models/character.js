export default class Character {
  constructor(scene) {
    this.scene = scene;
  }

  preload(name) {
    this.characterName = name;

    this.scene.load.json(
      `character-${this.characterName}`,
      `assets/characters/${this.characterName}/data/data.json`,
    );

    this.scene.load.spritesheet(
      `character-image-${this.characterName}`,
      `assets/characters/${this.characterName}/images/IDLE.png`,
      {
        frameWidth: 96,
        frameHeight: 84,
      },
    );
  }

  create(x, y) {
    const data = this.scene.cache.json.get(`character-${this.characterName}`);

    this.strength = data.strength;
    this.speed = data.speed;
    this.resistance = data.resistance;

    this.sprite = this.scene.physics.add.sprite(
      x,
      y,
      `character-image-${this.characterName}`,
    );

    this.sprite.setBodySize(data.hitbox.width, data.hitbox.height, true);
    this.sprite.setCollideWorldBounds(true);
    this.sprite.setScale(data.hitbox.scale);

    //Cria animação
    if (!this.scene.anims.exists(`idle-${this.characterName}`)) {
      this.scene.anims.create({
        key: `idle-${this.characterName}`,
        frames: this.scene.anims.generateFrameNumbers(
          `character-image-${this.characterName}`,
          {
            start: 0,
            end: 6,
          },
        ),
        frameRate: 10,
        repeat: -1, // -1 faz a animação rodar em loop
      });
    }
    //Dá play no spritesheet
    this.sprite.play(`idle-${this.characterName}`);
  }

  moveLeft() {
    this.sprite.setVelocityX(-this.speed);
  }

  moveRight() {
    this.sprite.setVelocityX(this.speed);
  }

  jump() {
    console.log(`${this.name} - jump`);
  }

  attack() {
    console.log(`${this.name} - attack`);
  }

  special() {
    console.log(`${this.name} - special`);
  }

  dash() {
    console.log(`${this.name} - dash`);
  }

  hit() {
    console.log(`${this.name} - hit`);
  }

  getHit() {
    console.log(`${this.name} - getHit`);
  }
}
