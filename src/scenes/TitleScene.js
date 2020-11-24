import Phaser from 'phaser';
import Button from '../objects/Button';
import config from '../config/Config';
import ScrollingBackground from '../objects/ScrollingBackground';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.sfx = {
      btnHover: this.sound.add('buttonHover'),
      btnSelect: this.sound.add('buttonSelect'),
      gameStart: this.sound.add('gameStart'),
    }

    // Game Button
    //this.gameButton = new Button(this, config.width / 2, config.height / 2 + 100, 'playButton', 'playButtonFocus', 'StoryScene', this.sfx.btnHover, this.sfx.gameStart, 5000);
    this.gameButton = this.add.image(config.width / 2, config.height / 2 + 100, 'playButton').setInteractive();

    this.gameButton.on('pointerover', () => {
      this.gameButton.setTexture('playButtonFocus');
      this.sfx.btnHover.play();
    });

    this.gameButton.on('pointerout', () => {
      this.gameButton.setTexture('playButton');
    })

    this.gameButton.on('pointerdown', () => {
      this.sfx.gameStart.play()
      this.sound.removeByKey('titleMusic');
      this.cameras.main.fadeOut(1000, 0, 0, 0);
      this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
        this.time.delayedCall(4000, () => {
          this.scene.start('StoryScene');
        });
      })
    })
    // Options button
    this.optionsButton = new Button(this, config.width / 2, config.height / 2 + 180, 'optionsButton', 'optionsButtonFocus', 'Options', this.sfx.btnHover, this.sfx.btnSelect);

    // Credits button
    this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 260, 'creditsButton', 'creditsButtonFocus', 'Credits', this.sfx.btnHover, this.sfx.btnSelect);

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

    this.add.image(400, 400, 'titleScreen');
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i++) {
      this.backgrounds[i].update();
    }
  }
}
