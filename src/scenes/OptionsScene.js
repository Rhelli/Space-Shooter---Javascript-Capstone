import 'phaser';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  create() {
    this.add.image('staticBackground', 400, 400);

    this.musicOn = true;
    this.soundOn = true;

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
      this.musicOn = !this.musicOn;
      this.updateAudio();
    });

    this.soundButton.on('pointerdown', () => {
      this.soundOn = !this.soundOn;
      this.updateAudio();
    });

    this.updateAudio();

    this.menuButton = this.add.sprite(400, 500, 'menuButton').setInteractive();

    this.menuButton.on('pointerover', (pointer) => {
      this.menuButton.setTexture('menuButtonFocus');
    });

    this.menuButton.on('pointerout', (pointer) => {
      this.menuButton.setTexture('menuButton');
    })

    this.menuButton.on('pointerdown', (pointer) => {
      this.scene.start('Title');
    });
  }

  updateAudio() {
    if (this.musicOn === false) {
      this.musicButton.setTexture('checkbox');
    } else {
      this.musicButton.setTexture('checkboxChecked');
    }

    if (this.soundOn === false) {
      this.soundButton.setTexture('checkbox');
    } else {
      this.soundButton.setTexture('checkboxChecked');
    }
  }
}
