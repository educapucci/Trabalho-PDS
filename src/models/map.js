export default class Map {
  constructor(scene) {
    this.scene = scene;
    this.platforms = [];
  }

  load(name) {
    this.mapName = name;
    this.scene.load.json(`map-${name}`, `assets/maps/data/${name}.json`);
    this.scene.load.image(`map-image-${name}`, `assets/maps/image/${name}.jpg`);
  }

  create() {
    const mapData = this.scene.cache.json.get(`map-${this.mapName}`);
    this.platforms = Array.isArray(mapData?.platforms) ? mapData.platforms : [];

    if (!this.platforms.length) {
      console.warn("Nenhuma plataforma foi carregada para o mapa.");
      return;
    }

    //TODO: Adicionar imagem mapa

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
