import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
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
