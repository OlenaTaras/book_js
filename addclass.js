var obj = {
  className: 'open menu'
};

function addClass(obj, cls){
	var arr=obj.className.split(" ");
	for(key in arr){
		if(!key===cls){
		arr.push(cls)};
		break;
	};
	var str=arr.join(' ');
	obj.className=str;

	console.log(obj);
};

addClass(obj, "open");

//console.log(obj);