// If in bewteen two numbers
Array.prototype.inBetween = function(num){
	if(num >= this[0] && num <= this[1]){
		return true;
	}
	return false;
}

// Compare two arrays
Array.prototype.equals = function (array) {
    for(var i = 0; i < this.length; i++){
        if(this[i] != array[i]){
            return false;
        }
    }
    return true;
}