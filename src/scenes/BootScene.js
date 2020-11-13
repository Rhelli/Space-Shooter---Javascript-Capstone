import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('corona', 'corona_up.png');
  }

  create() {
    this.scene.start('Preloader');
  }
}
