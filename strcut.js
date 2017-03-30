var str='Вот, что мне хотелось бы сказать на эту тему:';
var maxlength=7;

function truncate(str, maxlength){
	if(str.length<maxlength){return str}else{
			str=str.substring(0,maxlength)+"...";
		return str}
};



console.log(truncate(str, maxlength));