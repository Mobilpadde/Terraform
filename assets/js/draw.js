draw = {
	tile: function(x, y, arr, border){
		if(border){
			ctx.fillStyle = "#000";
			ctx.fillRect(x - settings.sizes.x / 8, y - settings.sizes.y / 8, settings.sizes.x + settings.sizes.x / 4, settings.sizes.y + settings.sizes.y / 4);
		}
		ctx.fillStyle = settings.colours.ground[arr[0]];
		ctx.fillRect(x, y, settings.sizes.x, settings.sizes.y);
	},
	map: function(){
		c.width = map[0].length * settings.sizes.x;
		c.height = map.length * settings.sizes.y;
		for(var y = 0; y < map.length; y++){
			for(var x = 0; x < map[y].length; x++){
				var time = new Date().getTime();
				if(map[y][x][0] == 2 && map[y - 1][x][0] == 0 && map[y - 2][x][0] == 0 && time - map[y][x][1] > 10000){
					map[y][x][0] = 1; // Make it grow
				}
				draw.tile(settings.sizes.x * x, settings.sizes.y * y, map[y][x]);
			}
		}

		ctx.fillStyle = player.colour;
		ctx.fillRect(player.x, player.y, settings.sizes.x, settings.sizes.y);

		ctx.fillStyle = "#000";
		if(player.right){
			ctx.fillRect(
				player.x + settings.sizes.x - settings.sizes.x / 5, 
				player.y + settings.sizes.y / 2 - (settings.sizes.y / 5) / 2, 
				settings.sizes.x / 5, 
				settings.sizes.y / 5
			);
		}
		if(player.left){
			ctx.fillRect(
				player.x - settings.sizes.x + settings.sizes.x, 
				player.y + settings.sizes.y / 2 - (settings.sizes.y / 5) / 2, 
				settings.sizes.x / 5, 
				settings.sizes.y / 5
			);
		}
		if(player.up){
			ctx.fillRect(
				player.x + settings.sizes.x / 2 - (settings.sizes.x / 5) / 2, 
				player.y - settings.sizes.y + settings.sizes.y, 
				settings.sizes.x / 5, 
				settings.sizes.y / 5
			);
		}
		if(player.down){
			ctx.fillRect(
				player.x + settings.sizes.x / 2 - (settings.sizes.x / 5) / 2, 
				player.y + settings.sizes.y - settings.sizes.y / 5, 
				settings.sizes.x / 5, 
				settings.sizes.y / 5
			);
		}
	}
}