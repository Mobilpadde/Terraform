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
	},
	show: function(){
		inventoryUser.innerHTML = "";
		for(i in inventory.items){
			var elm = document.createElement("li");
			elm.style.background = settings.colours.ground[i][0];
			elm.title = settings.colours.ground[i][1];
			elm.innerText = inventory.items[i];
			inventoryUser.appendChild(elm);
		}
	},
	select: function(){
		var items = inventoryUser.getElementsByTagName("li");
		for(var i = 0; i < items.length; i++){
			items[i].addEventListener("click", function(e){
				if(inventoryUser.getElementsByClassName("selected")[0]){
					inventoryUser.getElementsByClassName("selected")[0].className = "";
				}
				this.className = "selected";
			})
		}
	}
}