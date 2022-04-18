let config = {
    type: Phaser.CANVAS,
    width: 1648,
    height: 975,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;