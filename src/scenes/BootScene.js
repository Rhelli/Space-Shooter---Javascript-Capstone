import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('bootLogo', './logos/bootLogo.png');
    this.load.image('bootCopyright', './logos/bootCopyright.png');
  }

  create() {
    this.scene.start('Preloader');
  }
}
