var arr=[-1, 2, 3, -9, 11];
var Summa=0;
var numArray=[];


function GetPatialSumma(n){
	for(i=0;i<n;i++){
		Summa+=arr[i];
	};
	return Summa;
};



function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
};


for(i=1;i<arr.length+1;i++){
	numArray.push(GetPatialSumma(i));
};


console.log(numArray);

console.log(getMaxOfArray(numArray));
