import Phaser from 'phaser';
import ButtonGen from '../objects/ButtonGen';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  preload() {
    this.load.image('staticBackground', './backgrounds/corona_up.png');
  }

  create() {
    this.add.image(400, 400, 'staticBackground');

    this.model = this.sys.game.globals.model;

    this.text = this.add.text(300, 100, 'Options', { fontSize: 48 });
    this.musicButton = this.add.image(200, 200, 'checkboxChecked');
    this.musicButton.setScale(0.6);
    this.musicText = this.add.text(250, 190, 'Music Enabled', { fontSize: 28 });

    this.soundButton = this.add.image(200, 300, 'checkboxChecked');
    this.soundButton.setScale(0.6);
    this.soundText = this.add.text(250, 290, 'Sound Enabled', { fontSize: 28 });

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on('pointerdown', () => {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    });

    this.soundButton.on('pointerdown', () => {
      this.model.soundOn = !this.model.soundOn;
      this.updateAudio();
    });

    this.menuButton = new ButtonGen(this, 400, 500, 'menuButton', 'menuButtonFocus', 'Title', 'btnHover', 'btnSelect');

    this.updateAudio();
  }

  updateAudio() {
    if (this.model.musicOn === false) {
      this.musicButton.setTexture('checkbox');
      this.sys.game.globals.titleMusic.stop();
      this.model.titleMusicPlaying = false;
    } else {
      this.musicButton.setTexture('checkboxChecked');
      if (this.model.titleMusicPlaying === false) {
        this.sys.game.globals.titleMusic.play();
        this.model.titleMusicPlaying = true;
      }
    }

    if (this.model.soundOn === false) {
      this.soundButton.setTexture('checkbox');
    } else {
      this.soundButton.setTexture('checkboxChecked');
    }
  }
}
