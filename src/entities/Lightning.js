import 'phaser';
import Entity from './Entity';

export default class Lightning extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'lightning', 'Lightning');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.play('lightning');
  }
}
