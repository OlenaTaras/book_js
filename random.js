

	var rnd = Math.random();
	var rezult=Math.sqrt(rnd)+6*rnd;


function Random(max) {

		if (rezult<max) {
			return rezult;
		}else{return rezult-Math.ceil(rezult)*max};};



console.log(Random(2));