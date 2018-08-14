var StarPaper = StarPaper || {};

StarPaper.GameState = {

    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.PLAYER_SPEED = 200;
        this.BULLET_SPEED = 1000;
    },

    preload: function () {
        this.load.image('paper', 'assets/backgrounds/linedpaper.jpg')
    },

    create: function () {
        this.background = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'paper');
        this.background.autoScroll(0, 40);

    }
}