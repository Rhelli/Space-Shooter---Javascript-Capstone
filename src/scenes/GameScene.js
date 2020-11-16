import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    // load Images Here
    this.load.image('bootLogo', 'bootLogo.png');
  }

  create() {
    // Add images here
    this.add.image(200, 200, 'bootLogo');
  }
}
