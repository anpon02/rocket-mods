class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }
    
    create() {
      this.add.text(750, 20, "Hit The Burger!");
    }
  }