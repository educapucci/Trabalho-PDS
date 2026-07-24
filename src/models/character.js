export default class Character {

    constructor(scene) {
        this.scene = scene;

        this.characterName = null;
        this.sprite = null;

        this.state = "idle";
        this.facing = "right";
	
	this.jumpforce = 750;
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
    this.speed = 50 * data.speed;
    this.special_movement = data.special_movement;
  }

    update(input) {
        this.handleMovement(input);
        this.handleActions(input);
    }

    handleMovement(input) {

        if (input.left && !input.right) {
            this.moveLeft();
        }
        else if (input.right && !input.left) {
            this.moveRight();
        }
        else {
            this.stop();
        }

        if (input.jump) {
            this.jump();
        }
    }

    handleActions(input) {

        if (input.attack) {
            this.attack();
        }

    }

    moveLeft() {
        this.facing = "left";

        this.sprite.setVelocityX(-this.speed);
        this.sprite.setFlipX(true);
    }

    moveRight() {
        this.facing = "right";

        this.sprite.setVelocityX(this.speed);
        this.sprite.setFlipX(false);
    }

    stop() {
        this.sprite.setVelocityX(0);
    }

    jump() {

        if (!this.sprite.body.blocked.down) {
            return;
        }

        this.sprite.setVelocityY(-this.jumpforce);
    }

    attack() {
        console.log("Ataque");
    }

}
