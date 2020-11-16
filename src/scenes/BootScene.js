import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('bootLogo', 'bootLogo.png');
    this.load.image('bootCopyright', 'bootCopyright.png');
  }

  create() {
    this.scene.start('Preloader');
  }
}
