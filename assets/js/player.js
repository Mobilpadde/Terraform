player = { 
	x: settings.sizes.x, 
	y: 0, 
	left: false, 
	right: true, 
	up: false, 
	down: false, 
	space: false,
	type: 0,
	colour: settings.colours.player[Math.floor(settings.colours.player.length * Math.random())],
	dig: function(){
		if(player.space){
			if(player.left){
				if(map[player.y / settings.sizes.y][player.x / settings.sizes.x - 1] !== undefined){
					var time = new Date().getTime();
					map[player.y / settings.sizes.y][player.x / settings.sizes.x - 1][0] = 0;
					if(map[player.y / settings.sizes.y + 1][player.x / settings.sizes.x - 1] !== undefined){
						map[player.y / settings.sizes.y + 1][player.x / settings.sizes.x - 1][1] = time;
					}
				}
			}
			if(player.right){
				if(map[player.y / settings.sizes.y][player.x / settings.sizes.x + 1] !== undefined){
					var time = new Date().getTime();
					map[player.y / settings.sizes.y][player.x / settings.sizes.x + 1][0] = 0;
					if(map[player.y / settings.sizes.y + 1][player.x / settings.sizes.x + 1] !== undefined){
						map[player.y / settings.sizes.y + 1][player.x / settings.sizes.x + 1][1] = time;
					}
				}
			}
			if(player.up){
				if(map[player.y / settings.sizes.y - 1][player.x / settings.sizes.x] !== undefined){
					var time = new Date().getTime();
					map[player.y / settings.sizes.y - 1][player.x / settings.sizes.x][0] = 0;
					if(map[player.y / settings.sizes.y][player.x / settings.sizes.x] !== undefined){
						map[player.y / settings.sizes.y][player.x / settings.sizes.x][1] = time;
					}
				}
			}
			if(player.down){
				if(map[player.y / settings.sizes.y + 1] !== undefined){
					var time = new Date().getTime();
					map[player.y / settings.sizes.y + 1][player.x / settings.sizes.x][0] = 0;
					if(map[player.y / settings.sizes.y + 2][player.x / settings.sizes.x] !== undefined){
						map[player.y / settings.sizes.y + 2][player.x / settings.sizes.x][1] = time;
					}
				}
			}
		}
	},
	move: function(){
		document.addEventListener("keydown", function(e){
			switch(e.keyCode){
				case 37: // Left
					if(player.left){
						player.x = player.x - settings.sizes.x;
						if(player.x < 0){
							player.x = 0;
						}
					}
					player.left = true; player.right = false; player.up = false; player.down = false;
					break;
				case 38: // Up
					if(player.up){
						player.y = player.y - settings.sizes.y;
						if(player.y < 0){
							player.y = 0;
						}
					}
					player.left = false; player.right = false; player.up = true; player.down = false;
					break;
				case 39: // Right
					if(player.right){
						player.x = player.x + settings.sizes.x;
						if(player.x > (map[0].length - 1) * settings.sizes.x){
							player.x = (map[0].length - 1) * settings.sizes.x;
						}
					}
					player.left = false; player.right = true; player.up = false; player.down = false;
					break;
				case 40: // Down
					if(player.down){
						player.y = player.y + settings.sizes.y;
						if(player.y > (map.length - 1) * settings.sizes.y){
							player.y = (map.length - 1) * settings.sizes.y;
						}
					}
					player.left = false; player.right = false; player.up = false; player.down = true;
					break;
				case 32: // Space
					player.space = true;
					//player.dig();
					break;
			}
		})
		document.addEventListener("keyup", function(e){
			if(e.keyCode == 32){ player.space = false; } // Space
		})
	}
}