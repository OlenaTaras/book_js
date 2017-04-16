function filterRangeInPlace(arr, a, b){	
	for(k in arr){
		if(arr[k]<a||arr[k]>b){
			arr.splice(k,1);
		};
	};
console.log(arr)
};


arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4)