import Entity from '../entities/Entity';

export default class LightningLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'lightningLasers5');
    this.body.velocity.y = 500;
  }
}
