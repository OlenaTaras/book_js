"use strict";


var rezult=0;

var salaries={
	  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

for (var k in salaries) {
		rezult=+salaries[k]+parseInt(rezult);
 	
	//rezult+=parseInt(salaries[k]);
};

console.log(rezult);


