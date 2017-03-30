"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
var max=0;
var obj;

function isEmpty(obj){
	for(var k in obj){return true;}
		return false;
};


console.log(isEmpty(salaries));

	for (var k in salaries){
		if (max<salaries[k]){
			max = salaries[k];}
			else{max=max;};

	};
	console.log(max);

