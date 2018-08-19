var StarPaper = StarPaper || {};

/*
Drei Schuss links und rechts verteilt
*/
StarPaper.SplitShotGun = function (game) {

    Phaser.Group.call(this, game, game.world, 'Split Shot Gun', false, true, Phaser.Physics.ARCADE);

    this.nextFire = 0;
    this.bulletSpeed = 400;
    this.fireRate = 240;
    this.sfx = game.add.audio('fire');
    for (var i = 0; i < 128; i++) {
        this.add(new StarPaper.Bullet(game, 'bullet_1', true, 0), true);
    }

    return this;

};

StarPaper.SplitShotGun.prototype = Object.create(Phaser.Group.prototype);
StarPaper.SplitShotGun.prototype.constructor = StarPaper.SplitShotGun;

StarPaper.SplitShotGun.prototype.fire = function (source) {

    if (this.game.time.time < this.nextFire) { return; }
    this.sfx.play();
    var x = source.x + 20;
    var y = source.y + 10;
    this.getFirstExists(false).fire(x, y, -90, this.bulletSpeed, -300, 280);
    this.getFirstExists(false).fire(x, y, -90, this.bulletSpeed, 0, 0);
    this.getFirstExists(false).fire(x, y, -90, this.bulletSpeed, 300, 280);

    this.nextFire = this.game.time.time + this.fireRate;
};
