import 'phaser';
import Entity from './Entity';

export default class Ninja extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'ninja', 'Ninja');
    this.body.velocity.y = Phaser.Math.Between(50, 100);

    this.states = {
      MOVE_DOWN: 'MOVE_DOWN',
      CHASE: 'CHASE',
    };
    this.state = this.states.MOVE_DOWN;

    this.play('ninja');
  }

  update() {
    if (!this.getData('isDead') && this.scene.player) {
      if (Phaser.Math.Distance.Between(
        this.x,
        this.y,
        this.scene.player.x,
        this.scene.player.y,
      ) < 320) {
        this.state = this.states.CHASE;
      }

      if (this.state == this.states.CHASE) {
        const directionX = this.scene.player.x - this.x;
        const directionY = this.scene.player.y - this.y;

        const angle = Math.atan2(directionY, directionX);

        const speed = 100;
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
}
