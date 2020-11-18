import 'phaser';
import Entity from './Entity';

export default class UFO extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'ufo', 'UFO');
    this.body.velocity.y = Phaser.Math.Between(50, 100);

    this.states = {
      MOVE_DOWN: 'MOVE_DOWN',
      CHASE: 'CHASE',
    };
    this.state = this.states.MOVE_DOWN;

    this.play('ufo');
  }
}
