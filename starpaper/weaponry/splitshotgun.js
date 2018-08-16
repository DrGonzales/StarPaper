var StarPaper =  StarPaper || {};

/*
Drei Schuss links und rechts verteilt
*/
StarPaper.SplitShotGun = function (game) {

    Phaser.Group.call(this, game, game.world, 'Split Shot Gun', false, true, Phaser.Physics.ARCADE);

    this.nextFire = 0;
    this.bulletSpeed = 400;
    this.fireRate = 240;

    for (var i = 0; i < 32; i++)
    {
        this.add(new StarPaper.Bullet(game, 'bullet_1' ), true);
    }

    return this;

};

StarPaper.SplitShotGun.prototype = Object.create(Phaser.Group.prototype);
StarPaper.SplitShotGun.prototype.constructor = StarPaper.SplitShotGun;

StarPaper.SplitShotGun.prototype.fire = function (source) {

    if (this.game.time.time < this.nextFire) { return; }
    StarPaper.Audio.Gun.play();
    var x = source.x + 20;
    var y = source.y + 10;
    this.getFirstExists(false).fire(x, y, -90, this.bulletSpeed, -200, 0);
    this.getFirstExists(false).fire(x, y, -90, this.bulletSpeed, 0, 0);
    this.getFirstExists(false).fire(x, y, -90, this.bulletSpeed, 200, 0);

    this.nextFire = this.game.time.time + this.fireRate;

};
