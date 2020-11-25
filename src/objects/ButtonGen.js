import Phaser from 'phaser';

export default class ButtonGen extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key1, key2, targetScene, hover, select, transition = null) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.button = this.scene.add.sprite(0, 0, key1).setInteractive();

    this.add(this.button);

    if (transition) {
      this.button.on('pointerdown', () => {
        if (select) { select.play(); }
        this.scene.cameras.main.fadeOut(1000, 0, 0, 0);
        this.scene.cameras.main.once(
          Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
            this.scene.time.delayedCall(transition, () => {
              this.scene.scene.start(targetScene);
            });
          },
        );
      });
    } else {
      this.button.on('pointerdown', () => {
        this.scene.scene.start(targetScene);
        select.play();
      });
    }

    this.button.on('pointerover', () => {
      this.button.setTexture(key2);
      hover.play();
    });

    this.button.on('pointerout', () => {
      this.button.setTexture(key1);
    });

    this.scene.add.existing(this);
  }
}
