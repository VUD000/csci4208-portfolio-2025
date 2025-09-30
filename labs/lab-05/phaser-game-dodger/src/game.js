const config = new Object();

config.width = 640; //Width of viewport
config.height = 480; //Height of viewport
config.scene = [TitleScene, PlayScene]; //Scenes to be used in game
config.physics = { default: 'arcade'};

const game = new Phaser.Game(config); //New game with configs