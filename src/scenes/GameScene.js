import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload() {
    // load Images Here
    this.load.image('logo', 'logo.png')
  }

  create() {
    // Add images here
    this.add.image(400, 300, 'logo');
  }
}
