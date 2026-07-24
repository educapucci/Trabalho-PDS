export default class PlayerInput {
    constructor(data, scene) {
        this.scene = scene;
        this.keyboard = data;
    }

    init() {
        this.plugin = this.scene.input.keyboard;
        this.movementKeys = this.keyboard.movements; // codes
        this.attackKeys = this.keyboard.attacks; // codes

        this.plugin.preventDefalt = true;
        this.plugin.addCapture(`
            ${this.movementKeys.up},
            ${this.movementKeys.down},
            ${this.movementKeys.left},
            ${this.movementKeys.right},`
        );

        this.keys = this.plugin.addKeys({
            'up': this.movementKeys.up, // 'W' ou 'UP'
            'down': this.movementKeys.down, // 'S' ou 'DOWN'
            'left': this.movementKeys.left, // 'A' ou 'LEFT'
            'right': this.movementKeys.right, // 'D' ou 'RIGHT'
        });
    }

        update() {
            return {
                up: this.keys.up.isDown,
                down: this.keys.down.isDown,
                left: this.keys.left.isDown,
                right: this.keys.right.isDown
            };
        }
}
