

var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
console.log(isNumeric(menu[2]));

function multiplyNumeric(obj){
	for (var k in obj){
		if (isNumeric(obj[k])==true){

		obj[k]=obj[k]*2;}
		else {
			obj[k]=obj[k];
		}
	}

	return obj;
};

console.log(multiplyNumeric(menu));
