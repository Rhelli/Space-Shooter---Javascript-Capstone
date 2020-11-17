import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('bootLogo', './Logos/bootLogo.png');
    this.load.image('bootCopyright', './Logos/bootCopyright.png');
  }

  create() {
    this.scene.start('Preloader');
  }
}
