function f(x) {
  console.log( arguments.length ? 1 : 0)}; 


f(undefined);
f();

var arr=[];
function sum(){
	for(i=0;i<arguments.length;i++){
		arr[i]=arguments[i];
	};
	var rezult=arr.reduce(function(prev,current){return prev+current})
	console.log(rezult)
};
sum(1,2,4);