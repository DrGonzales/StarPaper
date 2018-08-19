var StarPaper = StarPaper || {};

/*
Einzelschuss
*/
StarPaper.SingleBulletGun = function (game) {

    Phaser.Group.call(this, game, game.world, 'Single Bullet Gun', false, true, Phaser.Physics.ARCADE);

    this.nextFire = 0;
    this.bulletSpeed = 600;
    this.fireRate = 100;

    for (var i = 0; i < 64; i++) {
        this.add(new StarPaper.Bullet(game, 'bullet_1', true, 0), true);
    }

    return this;

};

StarPaper.SingleBulletGun.prototype = Object.create(Phaser.Group.prototype);
StarPaper.SingleBulletGun.prototype.constructor = StarPaper.SingleBulletGun;

StarPaper.SingleBulletGun.prototype.fire = function (source) {

    if (this.game.time.time < this.nextFire) { return; }

    var x = source.x + 10;
    var y = source.y + 10;

    this.getFirstExists(false).fire(x, y, -90, this.bulletSpeed, 0, 0);

    this.nextFire = this.game.time.time + this.fireRate;
};
