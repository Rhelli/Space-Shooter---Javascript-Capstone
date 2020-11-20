import Entity from '../entities/Entity';

export default class UFOLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'ufoLasers1');
    this.body.velocity.y = 100;
  }
}
