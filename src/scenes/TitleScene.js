import Phaser from 'phaser';
import Button from '../objects/Button';
import config from '../config/Config';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    // Background
    this.add.image(400, 400, 'titleScreen');

    // Game Button
    this.gameButton = new Button(this, config.width / 2, config.height / 2 + 100, 'playButton', 'playButtonFocus', 'Game');

    // Options button
    this.optionsButton = new Button(this, config.width / 2, config.height / 2 + 180, 'optionsButton', 'optionsButtonFocus', 'Options');

    // Credits button
    this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 260, 'creditsButton', 'creditsButtonFocus', 'Credits');

    // Add background music
    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.titleMusicPlaying === false) {
      this.titleMusic = this.sound.add('titleMusic', { volume: 0.5, loop: true });
      this.titleMusic.play();
      this.model.titleMusicPlaying = true;
      this.sys.game.globals.titleMusic = this.titleMusic;
    }
  }
}
