// Controller Logic

var Local = function() {
	
	var game;
	// Triggered by Keyboard Session
	
	var start = function () {
		var doms = {
			gameDiv: document.getElementById('local_game'),
			nextDiv: document.getElementById('local_next'),
			timeDiv: document.getElementById('local_time'),
			scoreDiv: document.getElementById('local_score'),
			resultDiv: document.getElementById('local_gameover')
		}
		game = new Game();
		game.init(doms, 2, 2);
	}
	
	// create public interface
	this.start = start;
}
