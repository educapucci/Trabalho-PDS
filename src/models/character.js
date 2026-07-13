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
      `character-idle-${this.characterName}`,
      `assets/characters/${this.characterName}/images/IDLE.png`,
      {
        frameWidth: 96,
        frameHeight: 84,
      },
    );

    this.scene.load.spritesheet(
      `character-walk-right-${this.characterName}`,
      `assets/characters/${this.characterName}/images/WALK.png`,
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

    this.facesLeftByDefault = data.faces_left_by_default || false;

    this.sprite = this.scene.physics.add.sprite(
      x,
      y,
      `character-idle-${this.characterName}`,
    );

    this.sprite.setBodySize(data.hitbox.width, data.hitbox.height, true);
    this.sprite.setCollideWorldBounds(true);
    this.sprite.setScale(data.hitbox.scale);

    //Cria animação
    if (!this.scene.anims.exists(`idle-${this.characterName}`)) {
      this.scene.anims.create({
        key: `idle-${this.characterName}`,
        frames: this.scene.anims.generateFrameNumbers(
          `character-idle-${this.characterName}`,
          {
            start: 0,
            end: 6,
          },
        ),
        frameRate: 10,
        repeat: -1, //-1 faz a animação rodar em loop
      });
    }
    //Dá play no spritesheet
    this.sprite.play(`idle-${this.characterName}`);

    //Inicializa atributos
    this.name = data.name;
    this.damage = 0;
    this.strength = data.strength;
    this.resistance = data.resistance;
    this.speed = data.speed;
    this.special_movement = data.special_movement;
  }

  moveLeft() {
    this.sprite.setVelocityX(-this.speed * 50); // ajuste o multiplicador ao seu gosto
    this.sprite.setFlipX(!this.facesLeftByDefault);
  }

  moveRight() {
    //Cria animação
    if (!this.scene.anims.exists(`walk-${this.characterName}`)) {
      this.scene.anims.create({
        key: `walk-${this.characterName}`,
        frames: this.scene.anims.generateFrameNumbers(
          `character-walk-right-${this.characterName}`,
          {
            start: 0,
            end: 6,
          },
        ),
        frameRate: 10,
        repeat: -1, //-1 faz a animação rodar em loop
      });
    }
    //Dá play no spritesheet
    this.sprite.play(`walk-${this.characterName}`);
    this.sprite.setVelocityX(this.speed * 50);
    this.sprite.setFlipX(this.facesLeftByDefault);
  }

  jump() {
  if (this.sprite.body.blocked.down || this.sprite.body.touching.down) {
    this.sprite.setVelocityY(-850); // ajuste a força do pulo aqui
    console.log(`${this.name} - jump`);
  }
  }

  stop(){
    this.sprite.setVelocityX(0);
    this.sprite.play(`idle-${this.characterName}`);
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
