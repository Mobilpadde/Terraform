player = { 
	x: settings.sizes.x * 7, 
	y: settings.sizes.y * 7,
	left: false, 
	right: false, 
	up: false, 
	down: false, 
	space: false,
	map: false,
	type: 0,
	colour: settings.colours.player[Math.floor(settings.colours.player.length * Math.random())],
	pplace: false,
	place: function(bool){
		if(bool != undefined){
			player.pplace = bool;
		}
		var place = document.getElementById("placeDig");
		if(player.pplace){
			place.innerText = "Placing Activated";
		}else{
			place.innerText = "Digging Activated";
		}
		return player.pplace;
	},
	dig: function(){
		if(player.space){
			if(!player.place){
				inventory.show();
				crafting.empty();
			}
			if(player.left){
				if(
					map[player.y / settings.sizes.y] !== undefined &&
					map[player.y / settings.sizes.y][player.x / settings.sizes.x - 1] !== undefined
				){
					if(player.place()){
						var elm = document.getElementsByClassName("selected")[0];
						inventory.remove(elm.dataset.thing);
						elm.innerText = parseInt(elm.innerText) - 1;
						map[player.y / settings.sizes.y][player.x / settings.sizes.x - 1][0] =  elm.dataset.thing;
					}else{
						inventory.add(map[player.y / settings.sizes.y][player.x / settings.sizes.x - 1][0]);
						map[player.y / settings.sizes.y][player.x / settings.sizes.x - 1][0] = 0;
						if(
							map[player.y / settings.sizes.y + 1] !== undefined &&
							map[player.y / settings.sizes.y + 1][player.x / settings.sizes.x - 1] !== undefined
						){
							map[player.y / settings.sizes.y + 1][player.x / settings.sizes.x - 1][1] = new Date().getTime();
						}
					}
				}
			}
			if(player.right){
				if(
					map[player.y / settings.sizes.y] !== undefined &&
					map[player.y / settings.sizes.y][player.x / settings.sizes.x + 1] !== undefined
				){
					if(player.place()){
						var elm = document.getElementsByClassName("selected")[0];
						inventory.remove(elm.dataset.thing);
						elm.innerText = parseInt(elm.innerText) - 1;
						map[player.y / settings.sizes.y][player.x / settings.sizes.x + 1][0] = elm.dataset.thing;
					}else{
						inventory.add(map[player.y / settings.sizes.y][player.x / settings.sizes.x + 1][0])
						map[player.y / settings.sizes.y][player.x / settings.sizes.x + 1][0] = 0;
						if(
							map[player.y / settings.sizes.y + 1] !== undefined &&
							map[player.y / settings.sizes.y + 1][player.x / settings.sizes.x + 1] !== undefined
						){
							map[player.y / settings.sizes.y + 1][player.x / settings.sizes.x + 1][1] = new Date().getTime();
						}
					}
				}
			}
			if(player.up){
				if(
					map[player.y / settings.sizes.y - 1] !== undefined &&
					map[player.y / settings.sizes.y - 1][player.x / settings.sizes.x] !== undefined
				){
					if(player.place()){
						var elm = document.getElementsByClassName("selected")[0];
						inventory.remove(elm.dataset.thing);
						elm.innerText = parseInt(elm.innerText) - 1;
						map[player.y / settings.sizes.y - 1][player.x / settings.sizes.x][0] = elm.dataset.thing;
					}else{
						inventory.add(map[player.y / settings.sizes.y - 1][player.x / settings.sizes.x])
						map[player.y / settings.sizes.y - 1][player.x / settings.sizes.x][0] = 0;
						if(
							map[player.y / settings.sizes.y] !== undefined &&
							map[player.y / settings.sizes.y][player.x / settings.sizes.x] !== undefined
						){
							map[player.y / settings.sizes.y][player.x / settings.sizes.x][1] = new Date().getTime();
						}
					}
				}
			}
			if(player.down){
				if(
					map[player.y / settings.sizes.y + 1] !== undefined && 
					map[player.y / settings.sizes.y + 1][player.x / settings.sizes.x] !== undefined
				){
					if(player.place()){
						var elm = document.getElementsByClassName("selected")[0];
						inventory.remove(elm.dataset.thing);
						elm.innerText = parseInt(elm.innerText) - 1;
						map[player.y / settings.sizes.y + 1][player.x / settings.sizes.x][0] = elm.dataset.thing;
					}else{
						inventory.add(map[player.y / settings.sizes.y + 1][player.x / settings.sizes.x][0])
						map[player.y / settings.sizes.y + 1][player.x / settings.sizes.x][0] = 0;
						if(
							map[player.y / settings.sizes.y + 2] !== undefined &&
							map[player.y / settings.sizes.y + 2][player.x / settings.sizes.x] !== undefined
						){
							map[player.y / settings.sizes.y + 2][player.x / settings.sizes.x][1] = new Date().getTime();
						}
					}
				}
			}
		}
	},
	keys: function(){
		document.addEventListener("keydown", function(e){
			var kc = e.keyCode;
			if(kc == 65 || kc == 37){ player.left 	= true }; // arrow left
			if(kc == 87 || kc == 38){ player.up 	= true }; // arrow up
			if(kc == 68 || kc == 39){ player.right 	= true }; // arrow right
			if(kc == 83 || kc == 40){ player.down 	= true }; // arrow down
			if(kc == 32)			{ player.space 	= true }; // sapce
			if(kc == 73)			{ player.colour =  settings.colours.player[Math.floor(settings.colours.player.length * Math.random())]}; // i
			if(kc == 77){
				if(player.map){
					player.map = false;
				}else{
					player.map = true;
				}
			}; // m
			if(kc == 80){
				if(player.place()){
					player.place(false);
				}else{
					player.place(true);
				}
			}; // p
		})
		document.addEventListener("keyup", function(e){
			var kc = e.keyCode;
			if(kc == 65 || kc == 37){ player.left 	= false };
			if(kc == 87 || kc == 38){ player.up 	= false };
			if(kc == 68 || kc == 39){ player.right 	= false };
			if(kc == 83 || kc == 40){ player.down 	= false };
			if(kc == 32)			{ player.space 	= false };
			if(kc == 67)			{ crafting.craft() };
		})
	},
	movement: function(){
		if(player.left){
			player.x = player.x - settings.sizes.x;
			if(player.x < 0){
				player.x = 0;
			}
			if(map[player.y / settings.sizes.y] !== undefined && map[player.y / settings.sizes.y][player.x / settings.sizes.y] !== undefined){
				if(
					map[player.y / settings.sizes.y][player.x / settings.sizes.y][0] != 0 &&
					map[player.y / settings.sizes.y][player.x / settings.sizes.y][0] != 3
				){
					player.x = player.x + settings.sizes.x;
				}
			}
		}
		if(player.right){
			player.x = player.x + settings.sizes.x;
			if(player.x > (map[0].length - 1) * settings.sizes.x){
				player.x = (map[0].length - 1) * settings.sizes.x;
			}
			if(map[player.y / settings.sizes.y] !== undefined && map[player.y / settings.sizes.y][player.x / settings.sizes.y] !== undefined){
				if(
					map[player.y / settings.sizes.y][player.x / settings.sizes.y][0] != 0 &&
					map[player.y / settings.sizes.y][player.x / settings.sizes.y][0] != 3
				){
					player.x = player.x - settings.sizes.x;
				}
			}
		}
		if(player.up){
			if(player.left && map[player.y / settings.sizes.y - 1][player.x / settings.sizes.x - 1] !== undefined &&
				(
					map[player.y / settings.sizes.y - 1][player.x / settings.sizes.x - 1][0] == 0 ||
					map[player.y / settings.sizes.y - 1][player.x / settings.sizes.x - 1][0] == 3
				)
			){
				player.y = player.y - settings.sizes.y * 2;
				player.x = player.x - settings.sizes.x;
			}
			if(player.right && map[player.y / settings.sizes.y - 1][player.x / settings.sizes.x + 1] !== undefined &&
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
	}
}