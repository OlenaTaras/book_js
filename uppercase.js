var str="петя";


function ucFirst(str) {
		
	str=str[0].toUpperCase()+str.substr(1);
	 return str;
};

console.log(ucFirst(str));