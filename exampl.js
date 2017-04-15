var a="global";

function b(){
	console.log(a);
	a ="local";
	console.log(a);
};
b();