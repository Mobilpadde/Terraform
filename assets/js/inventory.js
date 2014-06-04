inventory = {
	items: {},
	add: function(item){
		item = Math.round(parseInt(item));
		if(!isNaN(item) && item != 0){
			if(inventory.items[item] == undefined){
				inventory.items[item] = 1;
			}else{
				inventory.items[item]++;
			}
		}
		inventory.show();
	},
	remove: function(item){
		if(inventory.items[item] == 1){
			delete inventory.items[item];
		}else if(inventory.items[item] == undefined){
			inventory.show();
			player.place(false);
		}else{
			inventory.items[item]--;
		}
	},
	show: function(){
		inventoryUser.innerHTML = "";
		for(i in inventory.items){
			var elm = document.createElement("li");
			elm.style.background = settings.colours.scheme[i][0];
			elm.title = settings.colours.scheme[i][1];
			elm.innerText = inventory.items[i];
			elm.dataset.thing = i;
			inventoryUser.appendChild(elm);
		}
		inventory.select();
	},
	select: function(){
		var items = inventoryUser.getElementsByTagName("li");
		for(var i = 0; i < items.length; i++){
			items[i].addEventListener("click", function(e){
				if(this.className == "selected"){
					this.className = "";
				}else{
					if(inventoryUser.getElementsByClassName("selected")[0]){
						inventoryUser.getElementsByClassName("selected")[0].className = "";
					}
					this.className = "selected";
				}
			})
		}
	}
}