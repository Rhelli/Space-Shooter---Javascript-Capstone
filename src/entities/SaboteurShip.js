import 'phaser';
import Entity from './Entity';

export default class SaboteurShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'saboteur', 'SaboteurShip');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.play();
  }
}
