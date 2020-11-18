import 'phaser';
import Entity from './Entity';

export default class UFOShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'ufo', 'UFO');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
  }
}
