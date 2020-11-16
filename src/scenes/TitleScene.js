import 'phaser';
import config from '../config/config';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {

  }

  create() {
    // Game Button
    this.gameButton = this.add.sprite(100, 200, 'playButton').setInteractive();
    this.centerButton(this.gameButton, 1);

    this.gameButton.on('pointerdown', (pointer) => {
      this.scene.start('Game');
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('playButtonFocus');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('playButton');
    });

    // Options button
    this.optionsButton = this.add.sprite(300, 200, 'optionsButton').setInteractive();
    this.centerButton(this.optionsButton);

    this.optionsButton.on('pointerdown', (pointer) => {
      this.scene.start('Options');
    });
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.width / 2, config.height / 2 - offset * - 100, config.width, config.height)
    );
  }
}
