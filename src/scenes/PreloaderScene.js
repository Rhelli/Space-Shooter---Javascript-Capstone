import 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    this.add.image(400, 330, 'bootLogo');
    this.add.image(400, 760, 'bootCopyright');
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 490, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 + 65,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2 - 15,
      y: height / 2 + 115,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 165,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 500, 300 * value, 30);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(4000, this.ready, [], this);

    this.load.image('titleScreen', './backgrounds/titleScreen.png');
    this.load.image('playButton', './buttons/playButton.png');
    this.load.image('playButtonFocus', './buttons/playButtonFocus.png');
    this.load.image('optionsButton', './buttons/optionsButton.png');
    this.load.image('optionsButtonFocus', './buttons/optionsButtonFocus.png');
    this.load.image('creditsButton', './buttons/creditsButton.png');
    this.load.image('creditsButtonFocus', './buttons/creditsButtonFocus.png');
    this.load.image('checkbox', './buttons/checkbox.png');
    this.load.image('checkboxChecked', './buttons/checkboxChecked.png');
    this.load.image('menuButton', './buttons/menuButton.png');
    this.load.image('menuButtonFocus', './buttons/menuButtonFocus.png');

    // GAME SCENE ASSETS
    this.load.image('background0', './backgrounds/bkgd_0.png');
    this.load.image('background1', './backgrounds/bkgd_1.png');
    this.load.image('background2', './backgrounds/bkgd_2.png');
    this.load.image('background3', './backgrounds/bkgd_3.png');
    this.load.image('background4', './backgrounds/bkgd_4.png');
    this.load.image('background6', './backgrounds/bkgd_6.png');
    this.load.image('background7', './backgrounds/bkgd_7.png');

    // Explosion spritesheets
    this.load.spritesheet('explosion1', './explosions/explosion1.png', {
      frameWidth: 96,
      frameHeight: 96
    });
    this.load.spritesheet('explosion2', './explosions/explosion2.png', {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spritesheet('explosion3', './explosions/explosion3.png', {
      frameWidth: 128,
      frameHeight: 128
    });

    // Enemy Ships & Lasers
    // Ninja Ship
    this.load.spritesheet('enemy1', './ships/Ninja.png', {
      frameWidth: 32,
      frameHeight: 32
    });
    // Ninja Laser
    this.load.image('enemy1Lasers1', './lasers/blue/1');
    this.load.image('enemy1Lasers2', './lasers/blue/2');
    this.load.image('enemy1Lasers3', './lasers/blue/3');
    this.load.image('enemy1Lasers4', './lasers/blue/4');
    this.load.image('enemy1Lasers5', './lasers/blue/5');
    this.load.image('enemy1Lasers6', './lasers/blue/6');
    this.load.image('enemy1Lasers7', './lasers/blue/7');

    //UFO Ship
    this.load.spritesheet('enemy2', './ships/UFO.png', {
      frameWidth: 32,
      frameHeight: 32
    });
    // UFO Lasers
    this.load.image('enemy1Lasers1', './lasers/red/1');
    this.load.image('enemy1Lasers2', './lasers/red/2');
    this.load.image('enemy1Lasers3', './lasers/red/3');
    this.load.image('enemy1Lasers4', './lasers/red/4');
    this.load.image('enemy1Lasers5', './lasers/red/5');
    this.load.image('enemy1Lasers6', './lasers/red/6');
    this.load.image('enemy1Lasers7', './lasers/red/7');

    // Paranoid Ship
    this.load.spritesheet('enemy3', './ships/Paranoid.png', {
      frameWidth: 32,
      frameHeight: 32
    });
    // Paranoid Lasers
    this.load.image('enemy3Lasers1', './lasers/green/1');
    this.load.image('enemy3Lasers2', './lasers/green/2');
    this.load.image('enemy3Lasers3', './lasers/green/3');
    this.load.image('enemy3Lasers4', './lasers/green/4');
    this.load.image('enemy3Lasers5', './lasers/green/5');
    this.load.image('enemy3Lasers6', './lasers/green/6');

    // Saboteur Ship
    this.load.spritesheet('enemy4', './ships/Saboteur.png', {
      frameWidth: 32,
      frameHeight: 32
    });
    // Saboteur Lasers
    this.load.image('enemy4Lasers1', './lasers/pink/1');
    this.load.image('enemy4Lasers2', './lasers/pink/2');
    this.load.image('enemy4Lasers3', './lasers/pink/3');
    this.load.image('enemy4Lasers4', './lasers/pink/4');
    this.load.image('enemy4Lasers5', './lasers/pink/5');
    this.load.image('enemy4Lasers6', './lasers/pink/6');
    this.load.image('enemy4Lasers7', './lasers/pink/7');

    // Lightning Ship
    this.load.spritesheet('enemy5', './ships/Lightning.png', {
      frameWidth: 32,
      frameHeight: 32
    });
    // Lightning Lasers
    this.load.image('enemy5Lasers1', './lasers/yellow/1');
    this.load.image('enemy5Lasers2', './lasers/yellow/2');
    this.load.image('enemy5Lasers3', './lasers/yellow/3');
    this.load.image('enemy5Lasers4', './lasers/yellow/4');
    this.load.image('enemy5Lasers5', './lasers/yellow/5');
    this.load.image('enemy5Lasers6', './lasers/yellow/6');
    this.load.image('enemy5Lasers7', './lasers/yellow/7');
    this.load.image('enemy5Lasers8', './lasers/yellow/8');
    this.load.image('enemy5Lasers9', './lasers/yellow/9');

    // Player Ship
    this.load.spritesheet('playerShip', './ships/Lighter.png', {
      frameWidth: 32,
      frameHeight: 32
    });

    // Player lasers
    this.load.image('playerLaser1', './lasers/turq/1');
    this.load.image('playerLaser2', './lasers/turq/2');
    this.load.image('playerLaser3', './lasers/turq/3');
    this.load.image('playerLaser4', './lasers/turq/4');
    this.load.image('playerLaser5', './lasers/turq/5');
    this.load.image('playerLaser6', './lasers/turq/6');
    this.load.image('playerLaser7', './lasers/turq/7');
    this.load.image('playerLaser8', './lasers/turq/8');
    this.load.image('playerLaser9', './lasers/turq/9');

    this.load.audio('titleMusic', ['./music/titleMusic.ogg']);
  }

  init() {
    this.readyCount = 0;
  }

  ready() {
    this.scene.start('Game');
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}

