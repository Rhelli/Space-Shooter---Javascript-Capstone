import Phaser from 'phaser';
import config from '../config/config';
import ButtonGen from '../objects/ButtonGen';
import ScrollingBackground from '../objects/ScrollingBackground';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    this.sfx = {
      btnHover: this.sound.add('buttonHover'),
      btnSelect: this.sound.add('buttonSelect'),
      gameStart: this.sound.add('gameStart'),
    };

    // Game Button
    this.gameButton = new ButtonGen(this, config.width / 2, config.height / 2 + 50, 'restartButton', 'restartButtonFocus', 'Game', this.sfx.btnHover, this.sfx.gameStart);

    // Options button
    this.optionsButton = new ButtonGen(this, config.width / 2, config.height / 2 + 130, 'optionsButton', 'optionsButtonFocus', 'Options', this.sfx.btnHover, this.sfx.btnSelect);

    // Credits button
    this.creditsButton = new ButtonGen(this, config.width / 2, config.height / 2 + 210, 'creditsButton', 'creditsButtonFocus', 'Credits', this.sfx.btnHover, this.sfx.btnSelect);

    // Main Menu button
    this.mainMenuButton = new ButtonGen(this, config.width / 2, config.height / 2 + 290, 'mainMenuButton', 'mainMenuButtonFocus', 'Title', this.sfx.btnHover, this.sfx.btnSelect);

    // Add background music
    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.titleMusicPlaying === false) {
      this.titleMusic = this.sound.add('titleMusic', { volume: 0.5, loop: true });
      this.titleMusic.play();
      this.model.titleMusicPlaying = true;
      this.sys.game.globals.titleMusic = this.titleMusic;
    }

    this.backgrounds = [];
    for (let i = 0; i < 8; i++) {
      const keys = ['background0', 'background1', 'background2', 'background3', 'background4', 'background5', 'background6', 'background7'];
      const bg = new ScrollingBackground(this, keys[i], i * 3);
      this.backgrounds.push(bg);
    }

    this.add.image(400, 300, 'gameOverTitle');
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i++) {
      this.backgrounds[i].update();
    }
  }
}
