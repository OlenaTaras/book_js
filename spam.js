var str = 'yesviagra';
var text='viaGra';


function checkSpam(text){
	
		var rezult=text.toLowerCase();
		if (~str.indexOf(rezult)) {return true} else {return false};
};

console.log(checkSpam(text));