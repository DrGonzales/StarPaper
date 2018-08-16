var StarPaper = StarPaper || {};

StarPaper.GameState = {

    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.PLAYER_SPEED = 500;
        this.BULLET_SPEED = 1000;
    },

    preload: function () {
        //GFX
        this.load.image('paper', 'assets/backgrounds/linedpaper.jpg');
        this.load.image('player', 'assets/player/player.png');
        this.load.image('stars_1', 'assets/stars/stars_1.png');
        this.load.image('bullet_1', 'assets/bullets/bullet_1.png');

        //Audio
        this.load.audio('soundtrak', 'assets/audio/soundtrak/background_1.mp3');
        this.load.audio('fire', 'assets/audio/fx/gun.mp3');
    },

    create: function () {
      
        this.music = this.add.audio('soundtrak');
        this.music.play();
        this.music.loopFull(1);
        //Hintergrund anzeigen und Scrollen
        this.background = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'paper');
        this.background.autoScroll(0, 100);

        //Spieler Raumschiff 
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.player = this.add.sprite(this.game.world.centerX, this.game.world.height - 100, 'player');
        this.player.anchor.setTo(0.5,0);
        this.game.physics.arcade.enable(this.player);
        this.player.body.collideWorldBounds = true;
        this.weapon = new StarPaper.SplitShotGun(this.game);
        this.weapon.visible = true;
    },

    update: function () {
        //Playerbewegung
        this.player.body.velocity.x = 0;
        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -1 * this.PLAYER_SPEED;
        } else if (this.cursors.right.isDown) {
            this.player.body.velocity.x = this.PLAYER_SPEED;
        }

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            this.weapon.fire(this.player);
        }
    }
}