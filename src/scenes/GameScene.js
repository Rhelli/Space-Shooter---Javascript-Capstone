import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.add.image(400, 400, 'background0');
    this.add.image(400, 400, 'background2');
    this.add.image(400, 400, 'background1');
    this.add.image(400, 400, 'background3');
    this.add.image(400, 400, 'background4');
    this.add.image(400, 400, 'background6');
    this.add.image(400, 400, 'background7');

    this.anims.create({
      key: 'ninja',
      frames: this.anims.generateFrameNumbers('ninja'),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'ufo',
      frames: this.anims.generateFrameNumbers('ufo'),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'paranoid',
      frames: this.anims.generateFrameNumbers('paranoid'),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'saboteur',
      frames: this.anims.generateFrameNumbers('saboteur'),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'lightning',
      frames: this.anims.generateFrameNumbers('lightning'),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'player',
      frames: this.anims.generateFrameNumbers('player'),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'explosion1',
      frames: this.anims.generateFrameNumbers('explosion1'),
      frameRate: 20,
      repeat: 0
    });

    this.anims.create({
      key: 'explosion2',
      frames: this.anims.generateFrameNumbers('explosion2'),
      frameRate: 20,
      repeat: 0
    });

    this.anims.create({
      key: 'explosion3',
      frames: this.anims.generateFrameNumbers('explosion3'),
      frameRate: 20,
      repeat: 0
    });

    this.sfx = {
      explosions: [
        this.sound.add('explosion1'),
        this.sound.add('explosion2'),
        this.sound.add('explosion3'),
        this.sound.add('explosion4'),
        this.sound.add('explosion5'),
        this.sound.add('explosion6'),
        this.sound.add('explosion7'),
        this.sound.add('explosion8'),
        this.sound.add('explosion9'),
      ],
      laser: [
        this.sound.add('laser1'),
        this.sound.add('laser2'),
        this.sound.add('laser3'),
        this.sound.add('laser4'),
        this.sound.add('laser5'),
        this.sound.add('laser6'),
        this.sound.add('laser7'),
        this.sound.add('laser8'),
        this.sound.add('laser9'),
      ]
    };

  }
}
