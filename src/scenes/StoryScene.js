import Phaser from 'phaser';
import ButtonGen from '../objects/ButtonGen';
import config from '../config/config';

export default class StoryScene extends Phaser.Scene {
  constructor() {
    super('StoryScene');
  }

  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    this.gameMusic = this.sound.add('gameMusic', { volume: 0.5, loop: true });
    this.gameMusic.play();
    const textSource = "2147. Years of radio silence and not a\nsingle word from the local star\ncluster. \n\nTerra's diplomacy with Centauri 7b had\ndwindled for decades now, opening new\npathways for attack from those less\ninclined to the Terra mindset.";
    const textSource2 = 'Then, without any prior warning, alarms\nstarted sounding, tracing from the\nOort cloud, inwards. Towards Terra.\n\nEntangled and distorted messages had\nbegun to seep through from outlier\nstationary orbit ships, reporting wave\nafter wave of Nyribean warships.';
    const textSource3 = 'Thousands, if not millions would be\nlost.\n\nOur first and last chance lies with\nthose positioned at our Deep Space\nDefence posts.';
    const wordCount = textSource.split(' ').length;
    const text = this.add.text(400, 400, '', {
      fontFamily: 'Visitor TT1 BRK',
      fontSize: '36px',
      fontStyle: 'normal',
      color: '#00FF33',
      wordWrap: true,
      wordWrapWidth: 600,
      align: 'center',
    }).setOrigin(0.5, 0.5);

    this.sfx = {
      btnHover: this.sound.add('buttonHover', { volume: 0.5 }),
      btnSelect: this.sound.add('buttonSelect', { volume: 0.5 }),
    };

    this.skipButton = new ButtonGen(this, config.width / 2, config.height / 2 + 200, 'skipButton', 'skipButtonFocus', 'Game', this.sfx.btnHover, this.sfx.btnSelect);

    this.tweens.addCounter({
      from: 0,
      to: wordCount,
      ease: (v) => Phaser.Math.Easing.Stepped(v, wordCount),
      onUpdate: (_, { value }) => {
        text.setText(textSource.split(' ').slice(0, value).join(' '));
      },

      onComplete: () => {
        setTimeout(() => {
          this.destroy;
          this.cameras.main.fadeIn(1000, 0, 0);
          this.tweens.addCounter({
            from: 0,
            to: wordCount,
            ease: (v) => Phaser.Math.Easing.Stepped(v, wordCount),
            onUpdate: (_, { value }) => {
              text.setText(textSource2.split(' ').slice(0, value).join(' '));
            },

            onComplete: () => {
              setTimeout(() => {
                this.cameras.main.fadeOut(1000, 0, 0, 0);
                this.destroy;
                this.cameras.main.fadeIn(1000, 0, 0);
                this.tweens.addCounter({
                  from: 0,
                  to: wordCount,
                  ease: (v) => Phaser.Math.Easing.Stepped(v, wordCount),
                  onUpdate: (_, { value }) => {
                    text.setText(textSource3.split(' ').slice(0, value).join(' '));
                  },
                  onComplete: () => {
                    setTimeout(() => {
                      this.cameras.main.fadeOut(1000, 0, 0, 0);
                      this.destroy;
                      this.cameras.main.once(
                        Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
                          this.time.delayedCall(3000, () => {
                            this.scene.start('Game');
                          });
                        },
                      );
                    }, 15000);
                  },
                });
              }, 20000);
            },
          });
        }, 20000);
      },
    });
  }
}
