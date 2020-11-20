import 'phaser';
import SaboteurLaser from '../weapons/SaboteurLaser';
import Entity from './Entity';

export default class Saboteur extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'saboteur', 'Saboteur');
    this.body.velocity.y = Phaser.Math.Between(50, 100);

    this.shootTimer = this.scene.time.addEvent({
      delay: 2200,
      callback: () => {
        const laser = new SaboteurLaser(
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

    this.play('saboteur');
  }

  onDestroy() {
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }
}