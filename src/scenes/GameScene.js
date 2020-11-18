import 'phaser';
import Player from '../entities/Player';
import UFO from '../entities/UFO';
import Ninja from '../entities/Ninja';
import Paranoid from '../entities/Paranoid';
import Saboteur from '../entities/Saboteur';
import Lightning from '../entities/Lightning';

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
    this.add.image(400, 400, 'background5');
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


    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'player',
    );

    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.enemies = this.add.group();
    this.ufoLasers = this.add.group();
    this.ninjaLasers = this.add.group();
    this.paranoidLasers = this.add.group();
    this.saboteurLasers = this.add.group();
    this.lightningLasers = this.add.group();
    this.playerLasers = this.add.group();

    this.time.addEvent({
      delay: 2500,


      //callback: () => {
      //  const gunship1 = new Saboteur(
      //    this,
      //    Phaser.Math.Between(0, this.game.config.width),
      //    0
      //  );
      //  this.enemies.add(gunship1);
      //},

      callback: () => {
        let enemy = null;

        if (Phaser.Math.Between(0, 20) >= 6) {
          enemy = new Saboteur(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0,
          )
        } else if (Phaser.Math.Between(0, 20) >= 8) {
          enemy = new Paranoid(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0,
          )
        } else if (Phaser.Math.Between(0, 20) >= 10) {
          if (this.getEnemiesByType('UFO').length < 3 && this.getEnemiesByType('Ninja').length < 2) {
            enemy = new UFO(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0,
            );
          }
        } else if (Phaser.Math.Between(0, 20) >= 12) {
          if (this.getEnemiesByType('UFO').length < 3 && this.getEnemiesByType('Ninja').length < 2) {
            enemy = new Ninja(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0,
            );
          }
        } else {
          enemy = new Lightning(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0,
          );
        }

        if (enemy !== null) {
          enemy.setScale(Phaser.Math.Between(10, 20) * 0.1);
          this.enemies.add(enemy);
        }
      },
      callbackScope: this,
      loop: true,
    });
  }

  getEnemiesByType(type) {
    const arr = [];
    for (let i = 0; i < this.enemies.getChildren().length; i++) {
      const enemy = this.enemies.getChildren()[i];
      if (enemy.getData('type') === type) {
        arr.push(enemy);
      }
    }
    return arr;
  }

  update() {
    this.player.update();

    if (this.keyW.isDown) {
      this.player.moveUp();
    } else if (this.keyS.isDown) {
      this.player.moveDown();
    }
    if (this.keyA.isDown) {
      this.player.moveLeft();
    } else if (this.keyD.isDown) {
      this.player.moveRight();
    }
  }
}
