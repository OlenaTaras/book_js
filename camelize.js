var string='';


function camelize(str){
	var arr=str.split('-');
	
	for(k in arr){
	
	string=string+arr[k].charAt(0).toUpperCase()+arr[k].slice(1);
	
};
console.log(string);

};



var str='-dear-hello-olena';

camelize(str);