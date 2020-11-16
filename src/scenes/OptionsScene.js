import 'phaser';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  preload() {
    this.load.image('staticBackground', 'corona_up.png');
  }

  create() {
    this.add.image('staticBackground', 400, 400);
  }
}
