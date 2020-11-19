import Entity from '../entities/Entity';

export default class NinjaLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'ninjaLaser1');
    this.body.velocity.y = 200;
  }
}
