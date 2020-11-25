import Phaser from 'phaser';

export default class Entity extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, type) {
    super(scene, x, y, key);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.setData('type', type);
    this.setData('isDead', false);
  }

  explode(canDestroy) {
    if (!this.getData('isDead')) {
      this.explosion1 = this.setTexture('explosion1');
      this.explosion2 = this.setTexture('explosion2');
      this.explosion3 = this.setTexture('explosion3');
      this.explosion4 = this.setTexture('explosion4');
      this.explosion5 = this.setTexture('explosion5');
      this.explosion6 = this.setTexture('explosion6');
      this.explosionArray = ['explosion1', 'explosion2', 'explosion3', 'explosion4', 'explosion5', 'explosion6'];
      this.play(this.explosionArray[Phaser.Math.Between(0, 5)]);

      this.scene.sfx.explosions[
        Phaser.Math.Between(0, this.scene.sfx.explosions.length - 1)
      ].play();

      if (this.shootTimer !== undefined) {
        if (this.shootTimer) {
          this.shootTimer.remove(false);
        }
      }

      this.setAngle(0);
      this.body.setVelocity(0, 0);

      this.once('animationcomplete', () => {
        if (canDestroy) {
          this.destroy();
          this.shootTimer.remove(true);
        } else {
          this.setVisible(false);
        }
      }, this);
      this.setData('isDead', true);
    }
  }
}
