crafting = {
	patterns: {
		5: [
			2, 2, 2,
			2, 2, 2,
			2, 2, 2
		],
		4: [
			2, 3
		]
	},
	craft: function(){
		var arr = new Array(),
			items = document.getElementById("craftingTable").getElementsByTagName("li");
		for(var i = 0; i < items.length; i++){
			arr.push(items[i].dataset.thing);
		}
		for(var i in crafting.patterns){
			if(arr.equals(crafting.patterns[i])){
				/*for(var j = 0; j < arr.length; j++){
					inventory.remove(arr[j]);
				}*/
				inventory.add(i);
				inventory.show();
				crafting.empty();
				break;
			}
		}
	},
	select: function(){
		var items = document.getElementById("craftingTable").getElementsByTagName("li");
		for(var i = 0; i < items.length; i++){
			items[i].addEventListener("click", function(e){
				var selected = document.getElementsByClassName("selected")[0];
				if(selected){
					this.innerText = selected.innerText;
					this.style.cssText = selected.style.cssText;
					this.title = selected.title;
					this.dataset.thing = selected.dataset.thing;
					this.className = "chosen";
				}
			})
		}
	},
	empty: function(){
		document.getElementById("craftingTable").innerHTML = "";
		for(var i = 0; i < 9; i++){
			document.getElementById("craftingTable").appendChild(document.createElement("li"));
		}
		crafting.select();
	}
}