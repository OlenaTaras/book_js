var arr = ["HTML", "JavaScript", "CSS"];
var newarr =[];

for(k in arr){
	newarr[k]=arr[k];
};

newarr.sort();
console.log(newarr);