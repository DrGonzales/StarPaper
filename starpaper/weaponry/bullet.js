var StarPaper = StarPaper || {};


/*Bullets werden in Waffen verballert
* game = Game
* key = Texturekey - todo: Animationen einbeziehen
* flycurve = true Bullet fliegt wird beim fliegen einer Kurve gedreht, false fliegt schärg 
* scalespeed = > Bullet wird skaliert
*/
StarPaper.Bullet = function (game, key, flycurve, scalespeed) {

    Phaser.Sprite.call(this, game, 0, 0, key);
    this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;
    this.anchor.set(0, 0.5);
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.exists = false;
    this.flycurve = flycurve;
    this.scalespeed = scalespeed;

};

StarPaper.Bullet.prototype = Object.create(Phaser.Sprite.prototype);
StarPaper.Bullet.prototype.constructor = StarPaper.Bullet;

StarPaper.Bullet.prototype.fire = function (x, y, angle, speed, gx, gy) {

    gx = gx || 0;
    gy = gy || 0;

    this.reset(x, y);
    this.scale.set(1);

    this.game.physics.arcade.velocityFromAngle(angle, speed, this.body.velocity);

    this.angle = angle;

    this.body.gravity.set(gx, gy);

};

StarPaper.Bullet.prototype.update = function () {
    if (this.flycurve) {
        this.rotation = Math.atan2(this.body.velocity.y, this.body.velocity.x);
    }
    if (this.scalespeed > 0) {
        this.scale.x += this.scalespeed;
        this.scale.y += this.scalespeed;
    }
};