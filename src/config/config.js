import 'phaser';

export default {
  type: Phaser.WEBGL,
  parent: 'phaser-example',
  width: 800,
  height: 800,
  backgroundColor: "black",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  pixelArt: true,
  roundPixels: true
};
