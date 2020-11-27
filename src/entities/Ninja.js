import Phaser from 'phaser';
import Entity from './Entity';
import NinjaLaser from '../weapons/NinjaLaser';

export default class Ninja extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'ninja', 'Ninja');
    this.body.velocity.y = Phaser.Math.Between(60, 80);

    this.states = {
      MOVE_DOWN: 'MOVE_DOWN',
      CHASE: 'CHASE',
    };
    this.state = this.states.MOVE_DOWN;

    this.shootTimer = this.scene.time.addEvent({
      delay: 1000,
      callback: () => {
        const laser = new NinjaLaser(
          this.scene,
          this.x,
          this.y,
        );
        laser.setScale(this.scaleX);
        this.scene.enemyLasers.add(laser);
      },
      callbackScope: this,
      loop: true,
    });

    this.play('ninja');
  }

  update() {
    if (!this.getData('isDead') && this.scene.player) {
      if (Phaser.Math.Distance.Between(
        this.x,
        this.y,
        this.scene.player.x,
        this.scene.player.y,
      ) < 220) {
        this.state = this.states.CHASE;
        this.shootTimer.remove(true);
      }

      if (this.state === this.states.CHASE) {
        const directionX = this.scene.player.x - this.x;
        const directionY = this.scene.player.y - this.y;

        const angle = Math.atan2(directionY, directionX);

        const speed = 150;
        this.body.setVelocity(
          Math.cos(angle) * speed,
          Math.sin(angle) * speed,
        );

        if (this.x < this.scene.player.x) {
          this.angle -= 5;
        } else {
          this.angle += 5;
        }
      }
    }
  }

  onDestroy() {
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }
}
