function Accumulator(startingValue){
	this.value=startingValue;
	this.read=function(){
		this.value+=+prompt('Enter the number');;
		 return this.value;
		
	};
};

var accumulator = new Accumulator(1);


accumulator.read();
accumulator.read();
console.log(accumulator.value);