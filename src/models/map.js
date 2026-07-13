export default class Map {
  constructor(scene) {
    this.scene = scene;
    this.platforms = this.scene.physics.add.staticGroup();
  }

  preload(name) {
    this.mapName = name;
    this.scene.load.json(
      `map-${this.mapName}`,
      `assets/maps/${this.mapName}/data/data.json`,
    );
    this.scene.load.image(
      `map-image-${this.mapName}`,
      `assets/maps/${this.mapName}/image/image.jpg`,
    );
  }

  create() {
    const mapData = this.scene.cache.json.get(`map-${this.mapName}`);
    const platformsData = Array.isArray(mapData?.platforms)
      ? mapData.platforms
      : [];

    this.spawn_location = mapData.spawn_location;

    const background = this.scene.add.image(0, 0, `map-image-${this.mapName}`);
    background.setOrigin(0, 0);
    background.displayWidth = 1920;
    background.displayHeight = 1080;

    platformsData.forEach((platform) => {
      const rect = this.scene.add.rectangle(
        platform.x,
        platform.y,
        platform.width,
        platform.height,
        0xffffff,
        0,
      );
      this.scene.physics.add.existing(rect, true);

      rect.body.updateFromGameObject();

      this.platforms.add(rect);
    });
  }
}
