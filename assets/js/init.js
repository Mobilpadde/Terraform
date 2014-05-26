var c = document.getElementById("board"),
	ctx = c.getContext("2d"),
	placeable = [0, 1, 2, 3],
	init = function(){
		setInterval(function(){
			physics.air();
			physics.water();
			physics.ground();
			physics.blocks();
			draw.map();
		}, 1000/30);
		setInterval(function(){
			player.dig();
		}, 250);
	};

var map = new generate.map(1024, 512, init);

player.move();

// If in bewteen two numbers
Array.prototype.inBetween = function(num){
	if(num >= this[0] && num <= this[1]){
		return true;
	}
	return false;
}