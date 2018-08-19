var StarPaper = StarPaper || {};

/*
Einzelschuss
*/
StarPaper.WallofFire = function (game) {

    Phaser.Group.call(this, game, game.world, 'Single Bullet Gun', false, true, Phaser.Physics.ARCADE);

    this.nextFire = 0;
    this.bulletSpeed = 100;
    this.fireRate = 600;
    this.sfx = game.add.audio('blast');
    for (var i = 0; i < 32; i++) {
        this.add(new StarPaper.Bullet(game, 'flamewall_1', true, 0.04), true);
    }

    return this;

};

StarPaper.WallofFire.prototype = Object.create(Phaser.Group.prototype);
StarPaper.WallofFire.prototype.constructor = StarPaper.SingleBulletGun;

StarPaper.WallofFire.prototype.fire = function (source) {

    if (this.game.time.time < this.nextFire) { return; }
    this.sfx.play();
    var x = source.x + 10;
    var y = source.y + 10;

    this.getFirstExists(false).fire(x, y, -90, this.bulletSpeed, 0, 0);

    this.nextFire = this.game.time.time + this.fireRate;
};
