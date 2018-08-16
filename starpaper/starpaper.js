var StarPaper = StarPaper || {};

StarPaper.game = new Phaser.Game('100%', '100%', Phaser.AUTO);

StarPaper.game.state.add('gamestate', StarPaper.GameState);
StarPaper.game.state.start('gamestate');
