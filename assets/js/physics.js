physics = {
	air: function(){ // Fall down with you stand on air
		if(
			!(player.y / settings.sizes.y == map.length - 1) &&
			map[(player.y + settings.sizes.y) / settings.sizes.y] !== undefined &&
			map[(player.y + settings.sizes.y) / settings.sizes.y][player.x / settings.sizes.x] !== undefined &&
			map[player.y / settings.sizes.y] !== undefined &&
			map[player.y / settings.sizes.y][player.x / settings.sizes.x] !== undefined
		){
			if(
				map[(player.y + settings.sizes.y) / settings.sizes.y][player.x / settings.sizes.x][0] === 0 && 
				map[player.y / settings.sizes.y][player.x / settings.sizes.x][0] === 0
			){
				player.y = player.y + settings.sizes.y;
			}
		}
	},
	water: function(){ // Water physics, yay
		for(var y = 0; y < map.length; y++){
			for(var x = 0; x < map[y].length; x++){
				if(map[y][x][0] == 3){
					if(
						map[y + 1] !== undefined && map[y] !== undefined &&
						map[y][x + 1] !== undefined && map[y][x - 1] !== undefined
					){
						if(map[y][x + 1][0] == 0){
							map[y][x + 1][0] = 3; // map[y][x][0];
							map[y][x][0] = 0;
						}else if(map[y][x - 1][0] == 0){
							map[y][x - 1][0] = 3; // map[y][x][0];
							map[y][x][0] = 0;
						}
						if(map[y + 1][x][0] == 0){
							map[y + 1][x][0] = 3; // map[y][x][0];
							map[y][x][0] = 0;
						}
					}
				}
			}
		}
	},
	blocks: function(){ // Let blocks fall down
		for(var y = 0; y < map.length; y++){
			for(var x = 0; x < map[y].length; x++){
				if(map[y][x][0] == 4){ // only sand
					if(
						map[y + 1] !== undefined && map[y] !== undefined &&
						map[y][x + 1] !== undefined && map[y][x - 1] !== undefined
					){
						if(map[y + 1][x][0] === 0){
							map[y + 1][x][0] = map[y][x][0];
							map[y][x][0] = 0;
						}
					}
				}
			}
		}
	},
	grass: function(){
		for(var y = 0; y < map.length; y++){
			for(var x = 0; x < map[y].length; x++){
				var time = new Date().getTime();
				if(map[y][x][0] == 2 && map[y - 1][x][0] == 0 && map[y - 2][x][0] == 0 && time - map[y][x][1] > 10000){
					map[y][x][0] = 1; // Make it grow
				}
			}
		}		
	}
}