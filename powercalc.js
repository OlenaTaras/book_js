function Calculator(){

	this.addMethod = function(name, func){
		this.name=name;
		this.func=func;

	};
	this.calculate = function(str){
		var arr=str.split(this.name);
		var rezult= function(arr){
			return arr[0];
			console.log(rezult);
		};
		

		
	}
};




var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
console.log(powerCalc.calculate("2 * 3"));