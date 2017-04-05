var rezult=[];




function filterRange(arr, a, b){
	for (i=0;i<arr.length;i++){
			if (a[i]<b) {rezult.push(a[i]);}

	};

	console.log(rezult);

};








var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
// теперь filtered = [5, 4, 3]
// arr не изменился
console.log(filtered);