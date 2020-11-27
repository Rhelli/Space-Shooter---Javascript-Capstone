import Entity from '../entities/Entity';

export default class SaboteurLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'saboteurLasers4');
    this.body.velocity.y = 180;
  }
}
