inventory = {
	items: {},
	add: function(item){
		item = Math.round(item);
		if(!isNaN(item) && item != 0){
			if(inventory.items[item] == undefined){
				inventory.items[item] = 1;
			}else{
				inventory.items[item]++;
			}
		}
	},
	remove: function(item){
		if(inventory.items[item] == 1){
			delete inventory.items[item];
		}else{
			inventory.items[item]--;
		}
	}
}