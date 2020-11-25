import Phaser from 'phaser';
import Player from '../entities/Player';
import UFO from '../entities/UFO';
import Ninja from '../entities/Ninja';
import Paranoid from '../entities/Paranoid';
import Saboteur from '../entities/Saboteur';
import Lightning from '../entities/Lightning';
import ScrollingBackground from '../objects/ScrollingBackground';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.titleMusicPlaying === true) {
      this.gameMusic = this.sound.add('gameMusic', { volume: 0.9, loop: true });
      this.sound.removeByKey('titleMusic');
      this.gameMusic.play();
      this.model.gameMusicPlaying = true;
      this.model.titleMusicPlaying = false;
      this.sys.game.globals.gameMusic = this.gameMusic;
    }

    this.cameras.main.fadeIn(1000, 0, 0);

    this.anims.create({
      key: 'ninja',
      frames: this.anims.generateFrameNumbers('ninja'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'ufo',
      frames: this.anims.generateFrameNumbers('ufo'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'paranoid',
      frames: this.anims.generateFrameNumbers('paranoid'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'saboteur',
      frames: this.anims.generateFrameNumbers('saboteur'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'lightning',
      frames: this.anims.generateFrameNumbers('lightning'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'player',
      frames: this.anims.generateFrameNumbers('player'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'explosion1',
      frames: this.anims.generateFrameNumbers('explosion1'),
      frameRate: 20,
      repeat: 0,
    });

    this.anims.create({
      key: 'explosion2',
      frames: this.anims.generateFrameNumbers('explosion2'),
      frameRate: 20,
      repeat: 0,
    });

    this.anims.create({
      key: 'explosion3',
      frames: this.anims.generateFrameNumbers('explosion3'),
      frameRate: 20,
      repeat: 0,
    });

    this.anims.create({
      key: 'explosion4',
      frames: this.anims.generateFrameNumbers('explosion4'),
      frameRate: 120,
      repeat: 0,
    });

    this.anims.create({
      key: 'explosion5',
      frames: this.anims.generateFrameNumbers('explosion5'),
      frameRate: 120,
      repeat: 0,
    });

    this.anims.create({
      key: 'explosion6',
      frames: this.anims.generateFrameNumbers('explosion6'),
      frameRate: 120,
      repeat: 0,
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
        this.sound.add('laser2', { volume: 0.5 }),
        this.sound.add('laser4', { volume: 0.5 }),
        this.sound.add('laser7', { volume: 0.5 }),
      ],
    };

    this.allBackgrounds = ['background0', 'background1', 'background2', 'background3', 'background4', 'background5', 'background6', 'background7'];
    this.background = [];
    for (let i = 0; i < this.allBackgrounds.length; i++) {
      const bg = new ScrollingBackground(this, this.allBackgrounds[i], i * 10);
      this.background.push(bg);
    }

    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'player',
    );

    this.playerScore = this.add.text(16, 750, 'score : 0', {
      fontFamily: 'Visitor TT2 BRK, sans-serif, monospace',
      fontSize: '46px',
      fontStyle: 'normal',
      color: '#9FA8DA',
      align: 'right',
      stroke: '#fff',
      strokeThickness: 1,
    });

    this.playerMessages = this.add.text(16, 650, '', {
      fontFamily: 'Visitor TT1 BRK, sans-serif, monospace',
      fontSize: '38px',
      fontStyle: 'normal',
      color: '#00FF99',
      align: 'left',
      stroke: '#FDFEFE',
      strokeThickness: 1,
    });

    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.enemies = this.add.group();
    this.playerLasers = this.add.group();
    this.enemyLasers = this.add.group();

    setTimeout(() => {
      this.time.addEvent({
        delay: 1500 - this.sys.game.globals.score * 2,

        callback: () => {
          let enemy = null;

          if (Phaser.Math.Between(0, 10) >= 3) {
            enemy = new Saboteur(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0,
            );
          } else if (Phaser.Math.Between(0, 10) >= 4) {
            enemy = new Paranoid(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0,
            );
          } else if (Phaser.Math.Between(0, 10) >= 5) {
            enemy = new UFO(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0,
            );
          } else if (Phaser.Math.Between(0, 7) >= 7) {
            enemy = new Ninja(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0,
            );
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
    }, 4000);

    this.physics.add.collider(this.playerLasers, this.enemies, (playerLaser, enemy) => {
      if (enemy) {
        if (enemy.onDestroy !== undefined) {
          enemy.onDestroy();
        }

        enemy.explode(true);
        playerLaser.destroy();
        this.increaseScore(enemy);
      }
    });

    this.physics.add.overlap(this.player, this.enemies, (player, enemy) => {
      if (!player.getData('isDead') && !enemy.getData('isDead')) {
        player.explode(false);
        player.onDestroy();
        enemy.explode(true);
      }
    });

    this.physics.add.overlap(this.player, this.enemyLasers, (player, laser) => {
      if (!player.getData('isDead') && !laser.getData('isDead')) {
        player.explode(false);
        player.onDestroy();
        laser.destroy();
      }
    });
  }

  scoreIntervals() {
    const { count } = this.sys.game.globals;
    if (count === 10) {
      this.playerMessages.setText("That's 10 down pilot.\nKeep it up!");
      const captain = this.add.image(680, 680, 'starfleetCaptain');
      captain.setScale(0.15);
      this.tweens.add({
        targets: this.fiftyScore,
        scaleX: 1.2,
        scaleY: 1.2,
        yoyo: true,
        duration: 5000,
        repeat: 0,
        onComplete: () => {
          this.time.delayedCall(3000, () => {
            this.playerMessages.setText('');
            captain.destroy();
          });
        },
      });
    } else if (count === 20) {
      this.playerMessages.setText("That's 20 more.\nKeep focused!");
      const captain = this.add.image(680, 680, 'starfleetCaptain');
      captain.setScale(0.15);
      this.tweens.add({
        targets: this.fiftyScore,
        scaleX: 1.2,
        scaleY: 1.2,
        yoyo: true,
        duration: 1000,
        repeat: 0,
        onComplete: () => {
          this.time.delayedCall(3000, () => {
            this.playerMessages.setText('');
            captain.destroy();
          });
        },
      });
    } else if (count === 30) {
      this.playerMessages.setText("You've downed 30 now!\nYou're on fire!");
      const captain = this.add.image(680, 680, 'starfleetCaptain');
      captain.setScale(0.15);
      this.tweens.add({
        targets: this.fiftyScore,
        scaleX: 1.2,
        scaleY: 1.2,
        yoyo: true,
        duration: 1000,
        repeat: 0,
        onComplete: () => {
          this.time.delayedCall(3000, () => {
            this.playerMessages.setText('');
            captain.destroy();
          });
        },
      });
    } else if (count === 50) {
      this.playerMessages.setText("That's the 50th.\nThey're coming fast!");
      const captain = this.add.image(680, 680, 'starfleetCaptain');
      captain.setScale(0.15);
      this.tweens.add({
        targets: this.fiftyScore,
        scaleX: 1.2,
        scaleY: 1.2,
        yoyo: true,
        duration: 1000,
        repeat: 0,
        onComplete: () => {
          this.time.delayedCall(3000, () => {
            this.playerMessages.setText('');
            captain.destroy();
          });
        },
      });
    }
  }

  increaseScore(enemy) {
    if (enemy.getData('type') === 'Paranoid' || enemy.getData('type') === 'Saboteur') {
      this.sys.game.globals.score += 1;
    } else if (enemy.getData('type') === 'UFO' || enemy.getData('type') === 'Ninja') {
      this.sys.game.globals.score += 2;
    } else if (enemy.getData('type') === 'Lightning') {
      this.sys.game.globals.score += 4;
    }
    this.sys.game.globals.count++;
    this.scoreIntervals();

    this.playerScore.setText(`score : ${this.sys.game.globals.score}`);
    this.tweens.add({
      targets: this.playerScore,
      scaleX: 1.2,
      scaleY: 1.2,
      yoyo: true,
      duration: 30,
      repeat: 0,
      onComplete: () => {
        this.playerScore.scaleX = 1;
        this.playerScore.scaleY = this.playerScore.scaleX;
      },
    });
  }

  resetScore() {
    this.sys.game.globals.score = 0;
    this.sys.game.globals.count = 0;
    this.playerScore.setText(this.sys.game.globals.score);
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

    if (!this.player.getData('isDead')) {
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
      if (this.keySpace.isDown) {
        this.player.setData('isShooting', true);
      } else {
        this.player.setData('timerShootTick', this.player.getData('timerShootDelay') - 1);
        this.player.setData('isShooting', false);
      }
    }

    for (let i = 0; i < this.enemies.getChildren().length; i++) {
      const enemy = this.enemies.getChildren()[i];
      enemy.update();

      if (enemy.x < -enemy.displayWidth
        || enemy.x > this.game.config.width + enemy.displayWidth
        || enemy.y < -enemy.displayHeight * 4
        || enemy.y > this.game.config.height + enemy.displayHeight) {
        if (enemy) {
          if (enemy.onDestroy !== undefined) {
            enemy.onDestroy();
          }
          enemy.onDestroy();
        }
      }
    }

    for (let i = 0; i < this.enemyLasers; i++) {
      const laser = this.enemyLasers.getChildren()[i];
      laser.update();
      if (laser.x < -laser.displayWidth
        || laser.x > this.game.config.width + laser.displayWidth
        || laser.y < -laser.displayHeight * 4
        || laser.y > this.game.config.height + laser.displayHeight) {
        if (laser) {
          laser.destroy();
        }
      }
    }

    for (let i = 0; i < this.playerLasers.getChildren().length; i++) {
      const laser = this.playerLasers.getChildren()[i];
      if (laser.x < -laser.displayWidth
        || laser.x > this.game.config.width + laser.displayWidth
        || laser.y < -laser.displayHeight * 4
        || laser.y > this.game.config.height + laser.displayHeight) {
        if (laser) {
          laser.destroy();
        }
      }
    }

    for (let i = 0; i < this.background.length; i++) {
      this.background[i].update();
    }
  }
}
