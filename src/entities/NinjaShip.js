import 'phaser';
import Entity from './Entity';

export default class NinjaShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'ninja', 'NinjaShip');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
  }
}
