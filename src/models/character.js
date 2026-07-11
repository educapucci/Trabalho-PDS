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
        frameWidth: 64,
        frameHeight: 64,
      },
    );
  }

  create(x, y) {
    const data = this.scene.cache.json.get(`character-${this.characterName}`);

    this.strength = data.strength;
    this.speed = data.speed;
    this.resistance = data.resistance;

    // Criar sprite com física
    this.sprite = this.scene.physics.add.sprite(
      x,
      y,
      `character-image-${this.characterName}`,
    );

    // CONFIGURAÇÃO CRÍTICA: Ajustar o corpo físico
    // Reduzir o corpo para evitar que fique preso nas bordas
    const bodyWidth = 40; // Menor que o sprite (64)
    const bodyHeight = 50; // Menor que o sprite (64)

    this.sprite.body.setSize(bodyWidth, bodyHeight);
    this.sprite.body.setOffset(
      (64 - bodyWidth) / 2, // Centralizar horizontalmente
      64 - bodyHeight, // Alinhar na base
    );

    // Configurações de física
    this.sprite.setCollideWorldBounds(true);
    this.sprite.setBounce(0); // Sem quique
    this.sprite.setGravityY(600); // Gravidade (ajuste conforme necessário)

    // IMPORTANTE: Impedir rotação
    this.sprite.body.allowRotation = false;

    // Debug: Visualizar o corpo físico (opcional)
    // this.sprite.body.debugShowBody = true;
    // this.sprite.body.debugBodyColor = 0xff0000;
  }

  moveLeft() {
    this.sprite.setVelocityX(-this.speed);
  }

  moveRight() {
    this.sprite.setVelocityX(this.speed);
  }

  jump() {
    // Pulo com verificação de chão
    if (this.sprite.body.onFloor() || this.sprite.body.touching.down) {
      this.sprite.setVelocityY(-400); // Ajuste conforme necessário
    }
  }

  // Método para parar movimento horizontal
  stop() {
    this.sprite.setVelocityX(0);
  }

  attack() {
    console.log(`${this.characterName} - attack`);
  }

  special() {
    console.log(`${this.characterName} - special`);
  }

  dash() {
    console.log(`${this.characterName} - dash`);
  }

  hit() {
    console.log(`${this.characterName} - hit`);
  }

  getHit() {
    console.log(`${this.characterName} - getHit`);
  }
}
