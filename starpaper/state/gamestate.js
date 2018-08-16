var StarPaper = StarPaper || {};

StarPaper.GameState = {

    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.PLAYER_SPEED = 500;
        this.BULLET_SPEED = 1000;
    },

    preload: function () {
        this.load.image('paper', 'assets/backgrounds/linedpaper.jpg');
        this.load.image('player', 'assets/player/player.png');
        this.load.image('stars_1', 'assets/stars/stars_1.png');
        this.load.image('stars_2', 'assets/stars/stars_1.png');
    },

    create: function () {
        //Hintergrund anzeigen und Scrollen
        this.background = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'paper');
        this.background.autoScroll(0, 40);

        //Spieler Raumschiff 
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.player = this.add.sprite(this.game.world.centerX, this.game.world.height - 100, 'player');
        this.player.anchor.setTo(0.5);
        this.game.physics.arcade.enable(this.player);
        this.player.body.collideWorldBounds = true;
        this.emitter = this.game.add.emitter(this.player.x-60, this.player.y+30, 10);
        this.emitter.makeParticles('stars_1','stars_2');
        this.emitter.minParticleSpeed.set(10,10);
        this.emitter.maxParticleSpeed.set(60, 30);
        this.emitter.gravity = 200;
        this.emitter.setScale(0.1, 2);
        this.emitter.start(false, 1000, 100);
    },

    update: function () {
       

        //Playerbewegung
        this.player.body.velocity.x = 0;
        this.emitter.emitX = this.player.body.position.x+25;
        
        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -1 * this.PLAYER_SPEED;
        } else if (this.cursors.right.isDown) {
            this.player.body.velocity.x = this.PLAYER_SPEED;
        }
    }
}