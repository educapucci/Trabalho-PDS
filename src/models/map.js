/* Explicação para a classe Platform:

--> Quando formos criar uma plataforma, primeiro vamos dar uma coordnada e
uma largura e altura para o Phaser.js calcular um retângulo e gerar n o espaço
assim ó:

[dentro da Scene]
    this.platforms = this.physics.add.staticGroup();

    // objeto "map" da classe Map
    map.platforms.forEach(p => {
        rectangle = this.add.rectangle(
            p.x + p.width/2,
            p.y + p.height/2,
            p.width,
            p.height
        );
        
        // agora pra frente, usamos essas informações
        // salvas no objeto map para criar 

        this.physics.add.existing(rect, true);
        
        this.platforms.add(rect);
    });    
*/
export default class Map {
    constructor(gravity, platforms, mapImage) {
        this.gravity = gravity;
        this.platforms = platforms;
        this.mapImage = mapImage;
    }

    // caso seja útil, tá aí
    createPlatform(x, y, width, height) {
        return new Platform(x, y, width, height);
    }

    showGravity() {
        console.log(`Gravity: ${this.gravity} - m/s²`);
    }

    showGrounds() {
        console.log(`${this.grounds} - grounds`);
    }

    /* (?) sugestão(ões): */
    //
    //
}

class Platform {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}