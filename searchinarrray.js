arr = ["test", 2, 1.5, false];

var result;

function find(array, value){

	
 if (value in array){return array.indexOf(value);}
 	else{return array.indexOf(value);}; 
};	





console.log(find(arr, "test")); // 0
console.log(find(arr, 2)); // 1
console.log(find(arr, 1.5)); // 2

console.log(find(arr, 0)); // -1