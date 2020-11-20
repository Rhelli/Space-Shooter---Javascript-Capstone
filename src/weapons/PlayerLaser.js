import Entity from '../entities/Entity';

export default class PlayerLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'playerLaser3');
    this.body.velocity.y = -300;
  }
}
