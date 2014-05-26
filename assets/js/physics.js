physics = {
	air: function(){ // Fall down with you stand on air
		if(!(player.y / settings.sizes.y == map.length - 1)){
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
				if(map[y][x][0] === 3){
					if(
						map[y + 1] !== undefined && map[y] !== undefined &&
						map[y][x + 1] !== undefined && map[y][x - 1] !== undefined
					){
						if(map[y][x + 1][0] === 0){
							map[y][x + 1][0] = 3; // map[y][x]
							map[y][x][0] = 0;
						}else if(map[y][x - 1][0] === 0){
							map[y][x - 1][0] = 3; // map[y][x]
							map[y][x][0] = 0;
						}
						if(map[y + 1][x][0] === 0){
							map[y + 1][x][0] = 3; // map[y][x]
							map[y][x][0] = 0;
						}
					}
				}
			}
		}
	},
	ground: function(){ // Don't walk through blocks
		if(
			[1, 2].inBetween(map[player.y / settings.sizes.y][player.x / settings.sizes.x][0])
		){
			player.y = player.y - settings.sizes.y;
		}
	},
	blocks: function(){ // Let blocks fall down
		for(var y = 0; y < map.length; y++){
			for(var x = 0; x < map[y].length; x++){
				if(map[y][x][0] === 1){ // if([1, 2].inBetween(map[y][x][0])){ // Both grass and ground
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
	}
}