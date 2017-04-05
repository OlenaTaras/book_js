var arr=[];


var elem = CreateArray();

var sum =0;

function Sum(array){
  	for(i=0;i<array.length;i++){
  	sum=sum+arr[i]
    };
    return sum;
  };
 
function CreateArray(){

 elem = prompt("title");
 if (elem ==="1"){alert(Sum(arr));
                }else{
 arr.push(elem);
elem = CreateArray();
return elem
};


};

