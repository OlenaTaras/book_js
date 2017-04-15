var arr=[];
var n;


function GetArray(n){
	for(i=0;i<n;i++){
	arr.push(i);
};
};

function DeleteFromArray(z){

		for(j=0;j<arr.length;j++){
				if(arr[j]==z){
					
				arr.splice(j,1);
			};
					};
		};

GetArray(12);


for(i=2;i<arr.length;i++){
	var p=arr[i];
	while(2*Math.log(p)<Math.log(arr.length)){
						var z=p*i;
						DeleteFromArray(z);	
						i++;
	};
};




console.log(arr);



