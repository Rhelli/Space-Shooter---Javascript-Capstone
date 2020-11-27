import Phaser from 'phaser';
import ParanoidLaser from '../weapons/ParanoidLaser';
import Entity from './Entity';

export default class Paranoid extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'paranoid', 'Paranoid');
    this.body.velocity.y = Phaser.Math.Between(25, 70);

    this.shootTimer = this.scene.time.addEvent({
      delay: 2500,
      callback: () => {
        const laser = new ParanoidLaser(
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

    this.play('paranoid');
  }

  onDestroy() {
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }
}
