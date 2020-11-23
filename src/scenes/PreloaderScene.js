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

    this.load.image('titleScreen', './logos/dsdLogo.png');
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
    this.load.image('gameOverTitle', './logos/gameOver.png')
    this.load.image('restartButton', './buttons/restartButton.png');
    this.load.image('restartButtonFocus', './buttons/restartButtonFocus.png')

    // GAME SCENE ASSETS
    this.load.image('background0', './backgrounds/bkgd_0.png');
    this.load.image('background1', './backgrounds/bkgd_1.png');
    this.load.image('background2', './backgrounds/bkgd_2.png');
    this.load.image('background3', './backgrounds/bkgd_3.png');
    this.load.image('background4', './backgrounds/bkgd_4.png');
    this.load.image('background5', './backgrounds/bkgd_5.png');
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
    this.load.spritesheet('explosion4', './explosions/explosion4.png', {
      frameWidth: 256,
      frameHeight: 256
    });
    this.load.spritesheet('explosion5', './explosions/explosion5.png', {
      frameWidth: 256,
      frameHeight: 256
    });
    this.load.spritesheet('explosion6', './explosions/explosion6.png', {
      frameWidth: 256,
      frameHeight: 256
    });

    // Enemy Ships & Lasers
    // Ninja Ship
    this.load.spritesheet('ninja', './ships/Ninja.png', {
      frameWidth: 32,
      frameHeight: 32
    });
    // Ninja Laser
    this.load.image('ninjaLaser1', './lasers/blue/1.png');
    this.load.image('ninjaLaser2', './lasers/blue/2.png');
    this.load.image('ninjaLaser3', './lasers/blue/3.png');
    this.load.image('ninjaLaser4', './lasers/blue/4.png');
    this.load.image('ninjaLaser5', './lasers/blue/5.png');
    this.load.image('ninjaLaser6', './lasers/blue/6.png');
    this.load.image('ninjaLaser7', './lasers/blue/7.png');

    //UFO Ship
    this.load.spritesheet('ufo', './ships/UFO.png', {
      frameWidth: 32,
      frameHeight: 32
    });
    // UFO Lasers
    this.load.image('ufoLasers1', './lasers/red/1.png');
    this.load.image('ufoLasers2', './lasers/red/2.png');
    this.load.image('ufoLasers3', './lasers/red/3.png');
    this.load.image('ufoLasers4', './lasers/red/4.png');
    this.load.image('ufoLasers5', './lasers/red/5.png');
    this.load.image('ufoLasers6', './lasers/red/6.png');
    this.load.image('ufoLasers7', './lasers/red/7.png');

    // Paranoid Ship
    this.load.spritesheet('paranoid', './ships/Paranoid.png', {
      frameWidth: 32,
      frameHeight: 32
    });
    // Paranoid Lasers
    this.load.image('paranoidLasers1', './lasers/green/1.png');
    this.load.image('paranoidLasers2', './lasers/green/2.png');
    this.load.image('paranoidLasers3', './lasers/green/3.png');
    this.load.image('paranoidLasers4', './lasers/green/4.png');
    this.load.image('paranoidLasers5', './lasers/green/5.png');
    this.load.image('paranoidLasers6', './lasers/green/6.png');

    // Saboteur Ship
    this.load.spritesheet('saboteur', './ships/Saboteur.png', {
      frameWidth: 32,
      frameHeight: 32
    });
    // Saboteur Lasers
    this.load.image('saboteurLasers1', './lasers/pink/1.png');
    this.load.image('saboteurLasers2', './lasers/pink/2.png');
    this.load.image('saboteurLasers3', './lasers/pink/3.png');
    this.load.image('saboteurLasers4', './lasers/pink/4.png');
    this.load.image('saboteurLasers5', './lasers/pink/5.png');
    this.load.image('saboteurLasers6', './lasers/pink/6.png');
    this.load.image('saboteurLasers7', './lasers/pink/7.png');

    // Lightning Ship
    this.load.spritesheet('lightning', './ships/Lightning.png', {
      frameWidth: 32,
      frameHeight: 32
    });
    // Lightning Lasers
    this.load.image('lightningLasers1', './lasers/yellow/1.png');
    this.load.image('lightningLasers2', './lasers/yellow/2.png');
    this.load.image('lightningLasers3', './lasers/yellow/3.png');
    this.load.image('lightningLasers4', './lasers/yellow/4.png');
    this.load.image('lightningLasers5', './lasers/yellow/5.png');
    this.load.image('lightningLasers6', './lasers/yellow/6.png');
    this.load.image('lightningLasers7', './lasers/yellow/7.png');
    this.load.image('lightningLasers8', './lasers/yellow/8.png');
    this.load.image('lightningLasers9', './lasers/yellow/9.png');

    // Player Ship
    this.load.spritesheet('player', './ships/Lighter.png', {
      frameWidth: 32,
      frameHeight: 32
    });

    // Player lasers
    this.load.image('playerLaser1', './lasers/turq/1.png');
    this.load.image('playerLaser2', './lasers/turq/2.png');
    this.load.image('playerLaser3', './lasers/turq/3.png');
    this.load.image('playerLaser4', './lasers/turq/4.png');
    this.load.image('playerLaser5', './lasers/turq/5.png');
    this.load.image('playerLaser6', './lasers/turq/6.png');
    this.load.image('playerLaser7', './lasers/turq/7.png');
    this.load.image('playerLaser8', './lasers/turq/8.png');
    this.load.image('playerLaser9', './lasers/turq/9.png');

    // SFX
    this.load.audio('laser1', './sound/lasers/Laser_00.mp3')
    this.load.audio('laser2', './sound/lasers/Laser_01.mp3')
    this.load.audio('laser3', './sound/lasers/Laser_02.mp3')
    this.load.audio('laser4', './sound/lasers/Laser_03.mp3')
    this.load.audio('laser5', './sound/lasers/Laser_04.mp3')
    this.load.audio('laser6', './sound/lasers/Laser_05.mp3')
    this.load.audio('laser7', './sound/lasers/Laser_06.mp3')
    this.load.audio('laser8', './sound/lasers/Laser_07.mp3')
    this.load.audio('laser9', './sound/lasers/Laser_08.mp3')
    this.load.audio('laser10', './sound/lasers/Laser_09.mp3')

    this.load.audio('explosion1', './sound/explosions/explosion01.wav')
    this.load.audio('explosion2', './sound/explosions/explosion02.wav')
    this.load.audio('explosion3', './sound/explosions/explosion03.wav')
    this.load.audio('explosion4', './sound/explosions/explosion04.wav')
    this.load.audio('explosion5', './sound/explosions/explosion05.wav')
    this.load.audio('explosion6', './sound/explosions/explosion06.wav')
    this.load.audio('explosion7', './sound/explosions/explosion07.wav')
    this.load.audio('explosion8', './sound/explosions/explosion08.wav')
    this.load.audio('explosion9', './sound/explosions/explosion09.wav')

    this.load.audio('buttonHover', './sound/buttons/buttonHover.ogg');
    this.load.audio('buttonSelect', './sound/buttons/buttonSelect.ogg');
    this.load.audio('gameStart', './sound/buttons/gameStart.mp3');

    // Game Music
    this.load.audio('titleMusic', ['./music/titleMusic.ogg']);
    this.load.audio('gameMusic', './music/gameMusic.mp3');
  }

  init() {
    this.readyCount = 0;
  }

  ready() {
    this.scene.start('StoryScene');
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}

