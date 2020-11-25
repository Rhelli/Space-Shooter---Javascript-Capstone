import 'phaser';
import Model from './model';
import config from './config/config';
import PlayerNameScene from './scenes/PlayerNameScene';
import StoryScene from './scenes/StoryScene';
import GameScene from './scenes/GameScene';
import GameOverScene from './scenes/GameOver';
import HighscoresScene from './scenes/HighscoresScene';
import PostGameHighscoresScene from './scenes/PostGameHighscoresScene';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import TitleScene from './scenes/TitleScene';
import OptionsScene from './scenes/OptionsScene';
import CreditsScene from './scenes/CreditsScene';
import './styles/styles.scss';

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
