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

    // Game Scene Assets
    this.load.image('background0', './backgrounds/bkgd_0.png');
    this.load.image('background1', './backgrounds/bkgd_1.png');
    this.load.image('background2', './backgrounds/bkgd_2.png');
    this.load.image('background3', './backgrounds/bkgd_3.png');
    this.load.image('background4', './backgrounds/bkgd_4.png');
    this.load.image('background6', './backgrounds/bkgd_6.png');
    this.load.image('background7', './backgrounds/bkgd_7.png');

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

