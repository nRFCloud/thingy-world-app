class Globe {
    constructor() {
        this.viewer = new Cesium.Viewer("cesiumContainer");
        this.addPoint();
    }

    addPoint() {
        this.viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(-122.6750, 45.5051),
            point: {
                pixelSize: 10,
                color: Cesium.Color.YELLOW,
            },
        });
    }

}