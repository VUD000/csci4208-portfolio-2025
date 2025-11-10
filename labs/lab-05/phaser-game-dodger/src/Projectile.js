<<<<<<< HEAD
class Projectile extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, position, velocity) {
        super(scene, position.x, position.y, 'projectile');
        this.depth = 1;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.velocity.x = velocity.x;
        this.body.velocity.y = velocity.y;
    }
=======
class Projectile extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, position, velocity) {
        super(scene, position.x, position.y, 'projectile');
        this.depth = 1;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.velocity.x = velocity.x;
        this.body.velocity.y = velocity.y;
    }
>>>>>>> d5be727ff6af186f9874a2a1a9d62c0a29ff78d8
}