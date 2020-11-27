import Phaser from 'phaser';
import config from '../config/config';

export default class PlayerNameScene extends Phaser.Scene {
  constructor() {
    super('PlayerNameScene');
  }

  preload() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);
  }

  create() {
    this.enteredText = this.add.text(0, 0, '', {
      fontFamily: 'Visitor TT1 BRK',
      fontSize: '36px',
      fontStyle: 'normal',
      color: '#000',
      align: 'center',
      fixedHeight: 100,
      fixedWidth: 100,
    }).setOrigin(0.5, 0.5);

    this.inputText = this.add.rexInputText(400, 400, 500, 50, {
      type: 'text',
      fontFamily: 'Visitor TT1 BRK',
      placeholder: 'Enter your name, pilot.',
      fontSize: '36px',
      color: '#00FF33',
      align: 'center',
      borderBottom: '4px solid #00FF33',
    }).setOrigin(0.5, 0.5).on('textchange', () => {
      this.enteredText.text = this.inputText.text;
    });

    this.sfx = {
      btnHover: this.sound.add('buttonHover'),
      btnSelect: this.sound.add('buttonSelect'),
    };

    this.enteredText.text = this.inputText.text;

    this.confirmButton = this.add.image(config.width / 2, config.height / 2 + 100, 'confirmButton').setInteractive();

    this.confirmButton.on('pointerover', () => {
      this.confirmButton.setTexture('confirmButtonFocus');
      this.sfx.btnHover.play();
    });

    this.confirmButton.on('pointerout', () => {
      this.confirmButton.setTexture('confirmButton');
    });

    this.confirmButton.on('pointerdown', () => {
      if (this.enteredText.text.length > 0) {
        this.inputText.destroy();
        this.sys.game.globals.pilotName = this.enteredText.text;
        this.cameras.main.fadeOut(1000, 0, 0, 0);
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
          this.time.delayedCall(3000, () => {
            this.scene.start('Title');
          });
        });
      }
    });
  }
}
