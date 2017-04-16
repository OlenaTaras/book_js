var arr = [-2,-1,0,1];


var partSum=[];

for(i=0;i<arr.length;i++){
	 array=arr.slice(0,i+1);


			 partSum[i]=array.reduce(function(prev,current){
				return prev+current;
			},0);
};


console.log(partSum)