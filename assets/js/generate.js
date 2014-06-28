generate = {
	map: function(width, height, callback){
		this.map = new Array();
		this.ground = {y: false, x: 0};
		this.tmp = {y: false, x: false, random: false};

		for(var y = 0; y < Math.floor(height / settings.sizes.y); y++){
			var tmpMap = new Array();
			for(x = 0; x < Math.floor(width / settings.sizes.x); x++){
				if(y < Math.floor(height / settings.sizes.y) / 3){
					tmpMap.push([0, 0]);
					this.ground.y = y + 1;
				}else{
					tmpMap.push([2, 0]);
				}
			}
			this.map.push(tmpMap);
		}

		// Make some caves
		for(var i = 0; i < (Math.floor(height / settings.sizes.y) * Math.floor(width / settings.sizes.x)) * 0.07; i++){
			this.tmp.y = Math.floor(Math.random() * Math.floor(height / settings.sizes.y)) + this.ground.y + 1;
			this.tmp.x = Math.floor(this.map[0].length * Math.random());

			if(Math.round(Math.random() * 6)){
				for(var x = 0; x < Math.floor(Math.random() * (7 - 3) + 3); x++){
					if(this.map[this.tmp.y] !== undefined && this.map[this.tmp.y][this.tmp.x + x] !== undefined){
						this.map[this.tmp.y][this.tmp.x + x][0] = 0;
					}
				}
			}else{
				for(var y = 0; y < Math.floor(Math.random() * (7 - 3) + 3); y++){
					if(this.map[this.tmp.y + y] !== undefined && this.map[this.tmp.y + y][this.tmp.x] !== undefined){
						this.map[this.tmp.y + y][this.tmp.x][0] = 0;
					}
				}
			}
		}

		// Create mountains
		for(var i = 0; i < 10; i++){
			this.tmp.random = Math.floor(Math.random() * 8)
			if(this.tmp.random){
				this.tmp.y = this.ground.y - this.tmp.random
				this.tmp.x = Math.floor((this.map[0].length - this.tmp.random) * Math.random()) + this.tmp.random

				if(this.tmp.y < this.ground.y){
					var extra = 0
					for(var y = 0; y < this.tmp.random; y++){
						if(this.map[this.tmp.y + y] !== undefined){
							for(var x = 0; x < 3 + extra; x++){
								if(this.map[this.tmp.y + y][this.tmp.x + x] !== undefined){
									this.map[y + this.tmp.y][x + this.tmp.x - extra / 2][0] = 2
								}
							}
							extra += 2
						}
					}
				}
			}
		}

		// We need water, sir!
		for(var i = 0; i < 20; i++){
			this.tmp.y = Math.floor(Math.random() * Math.floor(height / settings.sizes.y) + (this.ground.y + 4));
			this.tmp.x = Math.floor((this.map[0].length - 4) * Math.random());

			switch(Math.round(Math.random() * 2)){
				case 0:
					for(var y = 0; y < 3; y++){
						if(this.map[this.tmp.y + y] !== undefined){
							for(var x = 0; x < 4; x++){
								if(this.map[this.tmp.y + y][this.tmp.x + x] !== undefined){
									this.map[this.tmp.y + y][this.tmp.x + x][0] = 3;
								}
							}
						}
					}
					break;
				case 1:
					for(var y = 0; y < 3; y++){
						if(this.map[this.tmp.y + y] !== undefined){
							for(var x = 0; x < 5; x++){
								if(this.map[this.tmp.y + y][this.tmp.x + x] !== undefined){
									this.map[this.tmp.y + y][this.tmp.x + x][0] = 3;
								}
							}
						}
					}
					break;
				case 2:
					for(var y = 0; y < 4; y++){
						if(this.map[this.tmp.y + y] !== undefined){
							for(var x = 0; x < 4; x++){
								if(this.map[this.tmp.y + y][this.tmp.x + x] !== undefined){
									this.map[this.tmp.y + y][this.tmp.x + x][0] = 3;
								}
							}
						}
					}
					break;
			}
		}

		callback();
		return this.map;
		//player.x = Math.floor(this.map[0].length * Math.random()); // Wat?
	}
}