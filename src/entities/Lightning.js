import Phaser from 'phaser';
import Entity from './Entity';
import LightningLaser from '../weapons/LightningLaser';

export default class Lightning extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'lightning', 'Lightning');
    this.body.velocity.y = Phaser.Math.Between(70, 100);

    this.shootTimer = this.scene.time.addEvent({
      delay: 3000,
      callback: () => {
        const laser = new LightningLaser(
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

    this.play('lightning');
  }

  onDestroy() {
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }
}
