import Phaser from 'phaser';
import InputTextPlugin from 'phaser3-rex-plugins/plugins/inputtext-plugin';

export default {
  type: Phaser.WEBGL,
  parent: 'phaser-example',
  width: 800,
  height: 800,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { x: 0, y: 0 },
    },
  },
  dom: {
    createContainer: true,
  },
  pixelArt: true,
  roundPixels: true,
  plugins: {
    global: [{
      key: 'InputTextPlugin',
      plugin: InputTextPlugin,
      start: true,
    }],
  },
};
