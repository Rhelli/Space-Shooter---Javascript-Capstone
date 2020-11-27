import Phaser from 'phaser';
import config from '../config/config';
import ButtonGen from '../objects/ButtonGen';
import ScrollingBackground from '../objects/ScrollingBackground';
import { fetchHighscores } from '../highscoreAPI';

export default class HighscoresScene extends Phaser.Scene {
  constructor() {
    super('HighscoresScene');
  }

  create() {
    this.title = this.add.image(400, 100, 'highscoresButton');
    this.title.setScale(1.2);

    fetchHighscores().then(response => {
      response.sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map((game, i) => {
          const text = `${i + 1}. Pilot: ${game[0]} --- Score: ${game[1]}`;
          this.add.text(config.width / 2, (85 * (i + 1.1)) + 100, text, {
            fontFamily: 'Visitor TT2 BRK',
            fontSize: '48px',
            color: '#00ff33',
            align: 'center',
            lineHeight: '1.5',
          }).setOrigin(0.5, 0.5);
          return text;
        });
    });

    this.sfx = {
      btnHover: this.sound.add('buttonHover', { volume: 0.5 }),
      btnSelect: this.sound.add('buttonSelect', { volume: 0.5 }),
    };

    this.mainMenuButton = new ButtonGen(this, config.width / 2, config.height / 2 + 300, 'mainMenuButton', 'mainMenuButtonFocus', 'Title', this.sfx.btnHover, this.sfx.btnSelect);


    this.backgrounds = [];
    for (let i = 0; i < 8; i++) {
      const keys = ['background0', 'background1', 'background2', 'background3', 'background4', 'background5', 'background6', 'background7'];
      const bg = new ScrollingBackground(this, keys[i], i * 3);
      this.backgrounds.push(bg);
    }
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i++) {
      this.backgrounds[i].update();
    }
  }
}
