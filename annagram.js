function sorted(a, b) {
  if(a == b){
  	return false}else{return true
  	 };
  	};




var arr = ["воз", "киборг", "корсет", "зов", "гробик", "костер", "сектор"];
var word=[];
for(k in arr){
word[k]=arr[k].split('');
word[k].sort();
word[k]=word[k].join('');
};

word.sort(sorted);

console.log(word);


var rezult = {};

for(k in word){
var element=word[k];
var count=0;

		function Counting(element){   //Функція що рахує кількість повторів
		for(i=0;i<word.length;i++){
  	  	if (element===word[i]) {count=count+1;
  	  					
  	  						}else{count=count;}
    	}; 
     
    	return(count);
		};

word.splice(k, Counting(element)-1);

};

console.log(word);


