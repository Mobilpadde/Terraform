draw = {
	tile: function(x, y, arr, border){
		if(border){
			ctx.fillStyle = "#000";
			ctx.fillRect(x - settings.sizes.x / 8, y - settings.sizes.y / 8, settings.sizes.x + settings.sizes.x / 4, settings.sizes.y + settings.sizes.y / 4);
		}
		if(arr !== undefined){
			ctx.fillStyle = settings.colours.scheme[arr[0]][0];
			ctx.fillRect(x, y, settings.sizes.x, settings.sizes.y);
		}else{
			ctx.fillStyle = settings.colours.scheme[5];
			ctx.fillRect(x, y, settings.sizes.x, settings.sizes.y);
		}
	},
	map: function(){
		//if(player.map){
			/*for(var i = 0; i < holder.length; i++){
				holder[i].style.display = "none";
			}*/
			c.width = map[0].length * settings.sizes.x;
			c.height = map.length * settings.sizes.y;
			for(var y = 0; y < map.length; y++){
				for(var x = 0; x < map[y].length; x++){
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
		/*}else{
			var offset = 14;
			for(var i = 0; i < holder.length; i++){
				holder[i].style.display = "block";
			}
			c.width = settings.sizes.x * (offset + 8);
			c.height = settings.sizes.y * (offset + 8);
			var i = 0;
			for(var y = (player.y / settings.sizes.y) - offset; y <= (player.y / settings.sizes.y) + offset; y++){
				j = 0;
				for(var x = (player.x / settings.sizes.x) - offset; x <= (player.x / settings.sizes.x) + offset; x++){
					if(map[y] !== undefined && map[y][x] !== undefined){
						draw.tile(settings.sizes.x * j, settings.sizes.y * i, map[y][x]);
					}
					j++;
				}
				i++;
			}
			ctx.fillStyle = player.colour;
			ctx.fillRect(offset * settings.sizes.x, offset * settings.sizes.y, settings.sizes.x, settings.sizes.y);

			ctx.fillStyle = "#000";
			if(player.right){
				ctx.fillRect(
					offset * settings.sizes.x + settings.sizes.x - settings.sizes.x / 5, 
					offset * settings.sizes.y + settings.sizes.y / 2 - settings.sizes.y / 5 + (settings.sizes.y / 5) / 2,
					settings.sizes.x / 5, 
					settings.sizes.y / 5
				);
			}
			if(player.left){
				ctx.fillRect(
					offset * settings.sizes.x, 
					offset * settings.sizes.y + settings.sizes.y / 2 - settings.sizes.y / 5 + (settings.sizes.y / 5) / 2, 
					settings.sizes.x / 5, 
					settings.sizes.y / 5
				);
			}
			if(player.up){
				ctx.fillRect(
					offset * settings.sizes.x + settings.sizes.x / 2 - settings.sizes.x / 5 + (settings.sizes.x / 5) / 2, 
					offset * settings.sizes.y,
					settings.sizes.x / 5, 
					settings.sizes.y / 5
				);
			}
			if(player.down){
				ctx.fillRect(
					offset * settings.sizes.x + settings.sizes.x / 2 - settings.sizes.x / 5 + (settings.sizes.x / 5) / 2, 
					offset * settings.sizes.y + settings.sizes.y - settings.sizes.y / 5,
					settings.sizes.x / 5, 
					settings.sizes.y / 5
				);
			}
		}*/
	}
}