function unique(arr) {
  /* ваш код */
}

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];


strings.sort();
console.log(strings);



var rezult = {};

for(k in strings){
var element=strings[k];
var count=0;

		function Counting(element){   //Функція що рахує кількість повторів
		for(i=0;i<strings.length;i++){
  	  	if (element===strings[i]) {count=count+1;
  	  					
  	  						}else{count=count;}
    	}; 
     
    	return(count);
		};

strings.splice(k, Counting(element)-1);

};

console.log(strings);
