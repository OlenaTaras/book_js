var str ='$120';
var n=str.length;

function extractCurrencyValue(str) {
			str=str.slice(-n+1)
	
	return str;
}

console.log(extractCurrencyValue(str));