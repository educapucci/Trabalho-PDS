export default class PlayerInput {
    // construtor: o objeto Input é criado para servir um player por vez
    /*
        data:   precisa ser o objeto tirado do JSON que representa as
                as teclas restitas ao jogador
        player: o jogador que instanciou o Input
    */
    constructor(data, player) {
        this.player = player;
        this.character = this.player.character; // personagem atrelado ao player
        this.keyboard = data;
    }

    disabledStateMap() {
        return {
            up: false,
            down: false,
            left: false,
            right: false,
            // adicionar as propiedades para os ataques
        };
    }

    init() {
        this.manager = new Phaser.Input.Keyboard.KeyboardManager();
        this.plugin = new Phaser.Input.Keyboard.KeyboardPlugin();
        this.movementKeys = this.keyboard.movements; // codes
        this.attackKeys = this.keyboard.attacks; // codes

        // diz ao navegador pra não executar o comportamento padrão
        this.manager.preventDefalt = true;
        this.manager.addCapture(`
            ${this.movementKeys.up},
            ${this.movementKeys.down},
            ${this.movementKeys.left},
            ${this.movementKeys.right},`
        // adicionar mais keys dependendo de quanto crescer os comandos do jogador
        );

        // object
        this.keys = this.plugin.addKeys({
            'up': this.movementKeys.up, // 'W' ou 'UP'
            'down': this.movementKeys.up, // 'S' ou 'DOWN'
            'left': this.movementKeys.up, // 'A' ou 'LEFT'
            'right': this.movementKeys.up, // 'D' ou 'RIGHT'
        // adicionar mais keys dependendo de quanto crescer os comandos do jogador
        });
        
        this.stateMap = this.disabledStateMap();
    }

    //função para manipular ações
    handleKeyboardPlayer() {
        if (this.keys.up.isDown) {
            this.stateMap.up = true;
        } else if (this.keys.down.isDown) {
            this.stateMap.down = true;
        } else if (this.keys.left.isDown) {
            this.stateMap.left = true;
        } else if (this.keys.right.isDown) {
            this.stateMap.right = true;
        }

        // cria uma cópia do stateMap para retornar
        var data = {
            ...this.stateMap
        };

        this.showStateMap();

        // desabilitar
        this.stateMap = this.disabledStateMap();

        return data;
    }

    showKeyboard() {
        console.log(`
            ${this.player}:\n
            ${this.keyboard}\n
        `);
    }

    showStateMap() {
        console.log(`
            ${this.player}:\n
            ${this.stateMap}\n
        `);
    }

    /* Como ficaria a função 'handleKeyboardPlayer" do jeito otimizado:

        handleKeyboardPlayer() {
            return {
                up: this.keys.up.isDown,
                down: this.keys.down.isDown,
                left: this.keys.left.isDown,
                right: this.keys.right.isDown
            };
        }
    */

}