var Game = function() {
	var gameDiv;
	var nextDiv;
	var timeDiv;
	var scoreDiv;
	var resultDiv;
	
	var score = 0;
	//Game Matrix
	var gameData = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],	
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
	
	// define current and next cubes 
	
	var cur;
	var next;


	// DIV
	var gameDivs = [];
	
	// Initialise DIV
	var initDiv = function(container, data, divs) {
		for(var i = 0;i<20;i++){
			var div;
			for(var j=0;j<19;j++){
			   var newNode = document.createElement('div');
			   newNode.className = 'none';
			   newNode.style.top = (i*20)+'px';
			   newNode.style.left = (j*19)+'px';
			   container.appendChild(newNode);
			   div.push(newNode);


			}
			divs.push(div);
		}
		  
	}
	
	var init = function(doms, type, dir) {
		gameDiv = doms.gameDiv;
		initDiv(gameDiv, gameData, gameDivs);
	}

	// create a public interface
	this.init = init;
}
