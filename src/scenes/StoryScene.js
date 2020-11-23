import 'phaser';

export default class StoryScene extends Phaser.Scene {
  constructor() {
    super('StoryScene');
  }

  create() {
    const textSource = "2147. Years of radio silence and not a\nsingle word from the local star\ncluster. \n\nTerra's diplomacy with Centauri 7b had\ndwindled for decades now, opening new\npathways for attack from those less\ninclined to the Terra mindset."
    const textSource2 = "Then, without any prior warning, alarms\nstarted sounding, tracing from the\nOort cloud, inwards. Towards Terra.\n\nEntangled and distorted messages had\nbegun to seep through from outlier\nstationary orbit ships, reporting wave\nafter wave of Nyribean warships,\nchaser ships and landing ships."
    const textSource3 = "Thousands, if not millions would be\nlost.\n\nOur first and last chance lies with\nthose positioned at our Deep Space\nDefence posts.";
    const wordCount = textSource.split(' ').length;
    const text = this.add.text(16, 16, '', {
      fontFamily: 'Visitor TT1 BRK',
      fontSize: '36px',
      fontStyle: 'normal',
      color: '#00FF33',
      wordWrap: true,
      wordWrapWidth: 700,
      align: 'left',
    });

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
        }, 5000);
      }
    })

    this.tweens.addCounter({
      from: 0,
      to: wordCount,
      ease: (v) => Phaser.Math.Easing.Stepped(v, wordCount),
      onUpdate: (_, { value }) => {
        text.setText(textSource2.split(' ').slice(0, value).join(' '));
      },
      onComplete: () => {
        setTimeout(() => {
          this.destroy;
        }, 5000);
      }
    })

    this.tweens.addCounter({
      from: 0,
      to: wordCount,
      ease: (v) => Phaser.Math.Easing.Stepped(v, wordCount),
      onUpdate: (_, { value }) => {
        text.setText(textSource3.split(' ').slice(0, value).join(' '));
      },
      onComplete: () => {
        setTimeout(() => {
          this.destroy;
        }, 5000);
      }
    })
  }
}
