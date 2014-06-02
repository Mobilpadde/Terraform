var c = document.getElementById("board"),
	holder = document.getElementsByClassName("holder"),
	inventoryUser = document.getElementById("inventory"),
	ctx = c.getContext("2d"),
	placeable = [0, 1, 2, 3],
	init = function(){
		setInterval(function(){
			physics.air(); 		// Make the player fall if he's in the air
			physics.water(); 	// Make water move like "real" water
			physics.grass(); 	// Makes the grass grow
			physics.blocks(); 	// Make grass fall down
			draw.map();
		}, 1000/30);
		setInterval(function(){
			player.movement();
			player.dig();
		}, 100);
	};

var map = new generate.map(1024, 512, init);

player.keys();
crafting.select();