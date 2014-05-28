draw = {
	tile: function(x, y, arr, border){
		if(border){
			ctx.fillStyle = "#000";
			ctx.fillRect(x - settings.sizes.x / 8, y - settings.sizes.y / 8, settings.sizes.x + settings.sizes.x / 4, settings.sizes.y + settings.sizes.y / 4);
		}
		if(arr !== undefined){
			ctx.fillStyle = settings.colours.ground[arr[0]];
			ctx.fillRect(x, y, settings.sizes.x, settings.sizes.y);
		}else{
			ctx.fillStyle = settings.colours.ground[4];
			ctx.fillRect(x, y, settings.sizes.x, settings.sizes.y);
		}
	},
	map: function(){
		c.width = map[0].length * settings.sizes.x;
		c.height = map.length * settings.sizes.y;
		if(player.map){
			for(var y = 0; y < map.length; y++){
				for(var x = 0; x < map[y].length; x++){
					draw.tile(settings.sizes.x * x, settings.sizes.y * y, map[y][x]);
				}
			}
		}else{
			for(var y = (player.y / settings.sizes.y) - 7; y <= (player.y / settings.sizes.y) + 7; y++){
				for(var x = (player.x / settings.sizes.x) - 7; x <= (player.x / settings.sizes.x) + 7; x++){
					draw.tile(settings.sizes.x * x, settings.sizes.y * y, map[y][x]);
				}
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