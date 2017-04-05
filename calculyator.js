var a=5;
var b=6;

function Calculator(){
	
	this.sum = a+b;

	this.mul = a*b;
};


var calculator = new Calculator();




console.log(calculator.sum);

