import Phaser from 'phaser';
import Model from './src/model';
import config from './src/config/config';
import PlayerNameScene from './src/scenes/PlayerNameScene';
import StoryScene from './src/scenes/StoryScene';
import GameScene from './src/scenes/GameScene';
import GameOverScene from './src/scenes/GameOver';
import HighscoresScene from './src/scenes/HighscoresScene';
import PostGameHighscoresScene from './src/scenes/PostGameHighscoresScene';
import BootScene from './src/scenes/BootScene';
import PreloaderScene from './src/scenes/PreloaderScene';
import TitleScene from './src/scenes/TitleScene';
import OptionsScene from './src/scenes/OptionsScene';
import CreditsScene from './src/scenes/CreditsScene';
import './src/styles/styles.scss';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = {
      model, titleMusic: null, score: 0, count: 0, pilotName: null,
    };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('PlayerNameScene', PlayerNameScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('StoryScene', StoryScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('HighscoresScene', HighscoresScene);
    this.scene.add('PostGameHighscoresScene', PostGameHighscoresScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
