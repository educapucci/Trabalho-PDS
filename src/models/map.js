export default class Map {
  constructor(scene) {
    this.scene = scene;
    this.platforms = [];
  }

  preload(name) {
    this.mapName = name;
    this.scene.load.json(
      `map-${this.mapName}`,
      `assets/maps/data/${this.mapName}.json`,
    );
    this.scene.load.image(
      `map-image-${this.mapName}`,
      `assets/maps/image/${this.mapName}.jpg`,
    );
  }

  create() {
    const mapData = this.scene.cache.json.get(`map-${this.mapName}`);
    this.platforms = Array.isArray(mapData?.platforms) ? mapData.platforms : [];

    const background = this.scene.add.image(0, 0, `map-image-${this.mapName}`);

    background.setOrigin(0, 0);

    background.displayWidth = this.scene.scale.width;
    background.displayHeight = this.scene.scale.height;

    this.platforms.forEach((platform) => {
      const rect = this.scene.add.rectangle(
        platform.x,
        platform.y,
        platform.width,
        platform.height,
        0x444444,
      );
      this.scene.physics.add.existing(rect, true);
    });
  }
}
