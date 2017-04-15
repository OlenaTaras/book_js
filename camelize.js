function camelize(str){
	var arr=str.split('-');
	console.log(arr);
	var string='';
	for(i=0;i<arr.lenght;i++){
		
	var element=(arr[i])[0];
		var array=arr[i].split('');
		
	array.splice(0,1,element.toUpperCase());
	string=string+array.join('');


};

console.log(string);
};



var str='background-color';

camelize(str);