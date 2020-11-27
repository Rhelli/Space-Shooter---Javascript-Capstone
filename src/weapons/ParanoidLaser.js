import Entity from '../entities/Entity';

export default class ParanoidLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'paranoidLasers5');
    this.body.velocity.y = 220;
  }
}
