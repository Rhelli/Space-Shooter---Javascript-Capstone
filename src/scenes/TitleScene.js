import 'phaser';
import config from '../config/config';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    // Background
    this.add.image('titleScreen', 400, 400);

    // Game Button
    this.gameButton = this.add.sprite(100, 200, 'playButton').setInteractive();
    this.centerButton(this.gameButton, 1);

    this.gameButton.on('pointerdown', (pointer) => {
      this.scene.start('Game');
    });

    // Options button
    this.optionsButton = this.add.sprite(300, 200, 'optionsButton').setInteractive();
    this.centerButton(this.optionsButton);

    this.optionsButton.on('pointerdown', (pointer) => {
      this.scene.start('Options');
    });

    // Credits button
    this.creditsButton = this.add.sprite(300, 200, 'creditsButton').setInteractive();
    this.centerButton(this.creditsButton, -1);

    this.creditsButton.on('pointerdown', (pointer) => {
      this.scene.start('Credits');
    });

    // Hover effects for all buttons
    this.input.on('pointerover', (event, gameObjects) => {
      if (gameObjects[0] === this.gameButton) {
        gameObjects[0].setTexture('playButtonFocus');
      }
      if (gameObjects[0] === this.optionsButton) {
        gameObjects[0].setTexture('optionsButtonFocus');
      }
      if (gameObjects[0] === this.creditsButton) {
        gameObjects[0].setTexture('creditsButtonFocus');
      }
    });

    this.input.on('pointerout', (event, gameObjects) => {
      if (gameObjects[0] === this.gameButton) {
        gameObjects[0].setTexture('playButton');
      }
      if (gameObjects[0] === this.optionsButton) {
        gameObjects[0].setTexture('optionsButton');
      }
      if (gameObjects[0] === this.creditsButton) {
        gameObjects[0].setTexture('creditsButton');
      }
    });

    // Add background music
    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.titleMusicPlaying === false) {
      this.titleMusic = this.sound.add('titleMusic', { volume: 0.5, loop: true });
      this.titleMusic.play();
      this.model.titleMusicPlaying = true;
      this.sys.game.globals.titleMusic = this.titleMusic;
    }
  }

  // Center menu buttons
  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.width / 2, config.height / 1.5 - offset * 80, config.width, config.height)
    );
  }
}
