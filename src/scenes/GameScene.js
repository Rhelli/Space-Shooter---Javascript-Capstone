import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    // load Images Here
    this.load.image('background0', './backgrounds/bkgd_0.png');
    this.load.image('background1', './backgrounds/bkgd_1.png');
    this.load.image('background2', './backgrounds/bkgd_2.png');
    this.load.image('background3', './backgrounds/bkgd_3.png');
    this.load.image('background4', './backgrounds/bkgd_4.png');
    this.load.image('background6', './backgrounds/bkgd_6.png');
    this.load.image('background7', './backgrounds/bkgd_7.png');
  }

  create() {
    // Add images here
    this.add.image(400, 400, 'background0');
    this.add.image(400, 400, 'background2');
    this.add.image(400, 400, 'background1');
    this.add.image(400, 400, 'background3');
    this.add.image(400, 400, 'background4');
    this.add.image(400, 400, 'background6');
    this.add.image(400, 400, 'background7');
  }
}
