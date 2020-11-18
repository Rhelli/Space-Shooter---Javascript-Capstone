import 'phaser';
import Entity from './Entity';

export default class ParanoidShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'paranoid', 'ParanoidShip');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.play('paranoid');
  }
}
