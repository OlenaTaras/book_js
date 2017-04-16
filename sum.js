function sum(a){
	var currentSum=0;

	function f(a){
		currentSum+=a;
		return f;
	};
	f.toString = function() {
    return currentSum;
};

	

return f};



console.log(sum(5)(1));
