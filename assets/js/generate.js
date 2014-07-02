generate = {
	map: function(width, height, callback){
		startTime = Date.now()
		this.map = new Array();
		this.ground = {y: false, x: 0};
		this.tmp = {y: false, x: false, random: false};
		this.volcano = {missing: true, x: 0, y: 0}

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

		// Create mountains and volcanoes
		for(var i = 0; i < 10; i++){
			this.tmp.mountainHeight = Math.floor(Math.random() * 8)
			if(this.tmp.mountainHeight){
				this.tmp.y = this.ground.y - this.tmp.mountainHeight
				this.tmp.x = Math.floor((this.map[0].length - this.tmp.mountainHeight) * Math.random()) + this.tmp.mountainHeight

				if(this.tmp.y < this.ground.y){
					var extra = 0
					this.tmp.mountainTop = (Math.floor(Math.random() * 2) == 0 ? 1 : 3)
					for(var y = 0; y < this.tmp.mountainHeight; y++){
						if(this.map[y + this.tmp.y] !== undefined){
							for(var x = 0; x < this.tmp.mountainTop + extra; x++){
								if(this.map[y + this.tmp.y][Math.round(x + this.tmp.x - extra / 2)] !== undefined){
									if(!((x == this.tmp.mountainTop + extra - 1 || x == 0) && Math.floor(Math.random() * 6) == 0)){
										this.map[y + this.tmp.y][Math.round(x + this.tmp.x - extra / 2)][0] = 2
									}
								}
							}
							extra += 2
						}
					}
				}
				if(this.volcano.missing && this.tmp.mountainHeight > 6){
					this.volcano.missing = false
					this.volcano.x = this.tmp.x
					this.volcano.y = this.tmp.y
				}
			}
		}
		if(!this.volcano.missing){
			for(var y = this.volcano.y; y <= this.map.length; y++){
				if(this.map[y] !== undefined && this.map[y][this.volcano.x] !== undefined){
					if(y == this.volcano.y){
						this.map[y][this.volcano.x][0] = 0
					}else{
						this.map[y][this.volcano.x][0] = 3
					}
				}
			}
		}

		// We need water, sir!
		for(var y = this.ground.y + 1; y < this.map.length; y++){
			for(var x = 0; x < this.map[0].length; x++){
				if(this.map[y] !== undefined && this.map[y][x] !== undefined && this.map[y][x][0] == 0 && ~~(Math.random() * 11) == 0){
					this.map[y][x][0] = 3
				}
			}
		}

		callback();
		console.log("Generation complete (%fms)", Date.now() - startTime)
		return this.map;
	}
}