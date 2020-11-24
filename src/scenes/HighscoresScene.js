import 'phaser';
import config from '../config/config';
import Button from '../objects/Button';
import ScrollingBackground from '../objects/ScrollingBackground';
import { postHighscores, fetchHighscores } from '../objects/Highscores';

export default class HighscoreScene extends Phaser.Scene {
  constructor() {
    super('HighscoreScene');
  }

  create() {
    this.pilotName = this.sys.game.globals.pilotName;
    this.score = this.sys.game.globals.score;
    this.highscore = this.add.text(config.width / 2, 300, `Pilot Name: ${this.pilotName} - Final Score: ${this.score}`, {
      fontFamily: 'Visitor TT1 BRK',
      fontSize: '36px',
      color: '#00FF33',
      align: 'center',
    }).setOrigin(0.5, 0.5);

    postHighscores(this.pilotName, this.score);

    fetchHighscores().then(({ response }) => {
      console.log(response);
      response.sort((a, b) => b.score - a.score).slice(0, 3)
        .map((game, i) => {
          const text = `Pilot: ${game.pilotName} --- Score: ${game.score}`;
          this.add.text(config.width / 2, (93 * (i + 1.1)), text).setOrigin(0.5, 0.5);
          return text;
        });
    });

    this.sfx = {
      btnHover: this.sound.add('buttonHover', { volume: 0.5 }),
      btnSelect: this.sound.add('buttonSelect', { volume: 0.5 }),
    }

    this.nextButton = new Button(this, config.width / 2, config.height / 2 + 300, 'nextButton', 'nextButtonFocus', 'GameOver', this.sfx.btnHover, this.sfx.btnSelect);


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
