 var array = [];


function makeBuffer(value){
	return {
		Next:  function(value){
			array.push(value);
			return array;
		},
	
		Reset: function(){
			array = [];
			return array;
		}
		
	};

};




var buffer = makeBuffer();





console.log(buffer.Next('Hi'));


console.log(buffer.Next('Hello'));

buffer.Reset();

console.log(buffer.Next());
