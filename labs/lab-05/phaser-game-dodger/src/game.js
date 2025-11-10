<<<<<<< HEAD
const config = new Object();

config.width = 640; //Width of viewport
config.height = 480; //Height of viewport
config.scene = [TitleScene, PlayScene]; //Scenes to be used in game
config.physics = { default: 'arcade'};

=======
const config = new Object();

config.width = 640; //Width of viewport
config.height = 480; //Height of viewport
config.scene = [TitleScene, PlayScene]; //Scenes to be used in game
config.physics = { default: 'arcade'};

>>>>>>> d5be727ff6af186f9874a2a1a9d62c0a29ff78d8
const game = new Phaser.Game(config); //New game with configs