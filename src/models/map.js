export default class Map {

    constructor(gravity, grounds, mapImage) {
        this.gravity = gravity;
        this.grounds = grounds;
        this.mapImage = mapImage;
    }

    showGravity() {
        console.log(`Gravity: ${this.gravity} - m/s²`);
    }

    showGrounds() {
        console.log(`${this.grounds} - grounds`);
    }

    /*
    (?) sugestão(ões):
    */

    // getPlatforms(grounds) {}

    // 
}