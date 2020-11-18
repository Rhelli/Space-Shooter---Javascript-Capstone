import 'phaser';
import Entity from './Entity';

export default class Ninja extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'ninja', 'Ninja');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.play('ninja');
  }
}
