player = { 
	x: settings.sizes.x, 
	y: 0, 
	left: false, 
	right: false, 
	up: false, 
	down: false, 
	space: false,
	type: 0,
	colour: settings.colours.player[Math.floor(settings.colours.player.length * Math.random())],
	dig: function(){
		if(player.space){
			if(player.left){
				if(map[player.y / settings.sizes.y][player.x / settings.sizes.x - 1] !== undefined){
					inventory.add(map[player.y / settings.sizes.y][player.x / settings.sizes.x - 1][0]);
					map[player.y / settings.sizes.y][player.x / settings.sizes.x - 1][0] = 0;
					if(map[player.y / settings.sizes.y + 1][player.x / settings.sizes.x - 1] !== undefined){
						map[player.y / settings.sizes.y + 1][player.x / settings.sizes.x - 1][1] = new Date().getTime();
					}
				}
			}
			if(player.right){
				if(map[player.y / settings.sizes.y][player.x / settings.sizes.x + 1] !== undefined){
					inventory.add(map[player.y / settings.sizes.y][player.x / settings.sizes.x + 1][0])
					map[player.y / settings.sizes.y][player.x / settings.sizes.x + 1][0] = 0;
					if(map[player.y / settings.sizes.y + 1][player.x / settings.sizes.x + 1] !== undefined){
						map[player.y / settings.sizes.y + 1][player.x / settings.sizes.x + 1][1] = new Date().getTime();
					}
				}
			}
			if(player.up){
				if(map[player.y / settings.sizes.y - 1][player.x / settings.sizes.x] !== undefined){
					inventory.add(map[player.y / settings.sizes.y - 1][player.x / settings.sizes.x])
					map[player.y / settings.sizes.y - 1][player.x / settings.sizes.x][0] = 0;
					if(map[player.y / settings.sizes.y][player.x / settings.sizes.x] !== undefined){
						map[player.y / settings.sizes.y][player.x / settings.sizes.x][1] = new Date().getTime();
					}
				}
			}
			if(player.down){
				if(map[player.y / settings.sizes.y + 1] !== undefined){
					inventory.add(map[player.y / settings.sizes.y + 1][player.x / settings.sizes.x][0])
					map[player.y / settings.sizes.y + 1][player.x / settings.sizes.x][0] = 0;
					if(map[player.y / settings.sizes.y + 2][player.x / settings.sizes.x] !== undefined){
						map[player.y / settings.sizes.y + 2][player.x / settings.sizes.x][1] = new Date().getTime();
					}
				}
			}
		}
	},
	keys: function(){
		document.addEventListener("keydown", function(e){
			var kc = e.keyCode;
			if(kc == 65 || kc == 37){ player.left 	= true };
			if(kc == 87 || kc == 38){ player.up 	= true };
			if(kc == 68 || kc == 39){ player.right 	= true };
			if(kc == 83 || kc == 40){ player.down 	= true };
			if(kc == 32)			{ player.space 	= true };
		})
		document.addEventListener("keyup", function(e){
			var kc = e.keyCode;
			if(kc == 65 || kc == 37){ player.left 	= false };
			if(kc == 87 || kc == 38){ player.up 	= false };
			if(kc == 68 || kc == 39){ player.right 	= false };
			if(kc == 83 || kc == 40){ player.down 	= false };
			if(kc == 32)			{ player.space 	= false };
		})
	},
	movement: function(){
		if(player.left){
			player.x = player.x - settings.sizes.x;
			if(player.x < 0){
				player.x = 0;
			}
			if(
				map[player.y / settings.sizes.y][player.x / settings.sizes.y][0] != 0 &&
				map[player.y / settings.sizes.y][player.x / settings.sizes.y][0] != 3
			){
				player.x = player.x + settings.sizes.x;
			}
		}
		if(player.right){
			player.x = player.x + settings.sizes.x;
			if(player.x > (map[0].length - 1) * settings.sizes.x){
				player.x = (map[0].length - 1) * settings.sizes.x;
			}
			if(
				map[player.y / settings.sizes.y][player.x / settings.sizes.y][0] != 0 &&
				map[player.y / settings.sizes.y][player.x / settings.sizes.y][0] != 3
			){
				player.x = player.x - settings.sizes.x;
			}
		}
		if(player.up){
			/*
			player.y = player.y - settings.sizes.y * 2;
			if(player.y < 0){
				player.y = 0;
			}*/
			if(player.left && 
				(
					map[player.y / settings.sizes.y - 1][player.x / settings.sizes.x - 1][0] == 0 ||
					map[player.y / settings.sizes.y - 1][player.x / settings.sizes.x - 1][0] == 3
				)
			){
				player.y = player.y - settings.sizes.y * 2;
				player.x = player.x - settings.sizes.x;
			}
			if(player.right && 
				(
					map[player.y / settings.sizes.y - 1][player.x / settings.sizes.x + 1][0] == 0 ||
					map[player.y / settings.sizes.y - 1][player.x / settings.sizes.x + 1][0] == 3
				)
			){
				player.y = player.y - settings.sizes.y * 2;
				player.x = player.x + settings.sizes.x;
			}
		}
		if(player.down){
			player.y = player.y + settings.sizes.y;
			if(player.y > (map.length - 1) * settings.sizes.y){
				player.y = (map.length - 1) * settings.sizes.y;
			}
			if(
				map[player.y / settings.sizes.y][player.x / settings.sizes.y][0] != 0 &&
				map[player.y / settings.sizes.y][player.x / settings.sizes.y][0] != 3
			){
				player.y = player.y - settings.sizes.y;
			}
		}
	}/*
	move: function(){
		document.addEventListener("keydown", function(e){
			switch(e.keyCode){
				case 37: // Left
					if(player.left){
						player.x = player.x - settings.sizes.x;
						if(player.x < 0){
							player.x = 0;
						}/*
						if(
							map[player.y / settings.sizes.y][player.x / settings.sizes.y][0] != 0 &&
							map[player.y / settings.sizes.y][player.x / settings.sizes.y][0] != 3
						){
							player.x = player.x + settings.sizes.x;
						}*
					}
					player.left = true; player.right = false; player.up = false; player.down = false;
					break;
				case 38: // Up
					if(player.up){
						player.y = player.y - settings.sizes.y * 2;
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
						}/*
						if(
							map[player.y / settings.sizes.y][player.x / settings.sizes.y][0] != 0 &&
							map[player.y / settings.sizes.y][player.x / settings.sizes.y][0] != 3
						){
							player.x = player.x - settings.sizes.x;
						}*
					}
					player.left = false; player.right = true; player.up = false; player.down = false;
					break;
				case 40: // Down
					if(player.down){
						player.y = player.y + settings.sizes.y;
						if(player.y > (map.length - 1) * settings.sizes.y){
							player.y = (map.length - 1) * settings.sizes.y;
						}/*
						if(
							map[player.y / settings.sizes.y][player.x / settings.sizes.y][0] != 0 &&
							map[player.y / settings.sizes.y][player.x / settings.sizes.y][0] != 3
						){
							player.y = player.y - settings.sizes.y;
						}*
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
	}*/
}