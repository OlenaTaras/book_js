

	var rnd = Math.random();
	//var rezult=Math.sqrt(rnd)+6*rnd;


function Random(min, max) {
	var rezult=rnd+min;
		if (rezult<max) {
			return rezult;
		}else{return max-rezult;};
	};



console.log(Random(0.2,1.3));