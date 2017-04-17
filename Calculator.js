
function Calculator(string){
		var str=string;
	if(str.indexOf('+')!=-1){
							var arr=str.split('+');
							this.caclulate = function(){
											return parseInt(arr[0],10)+parseInt(arr[1],10);
							};
}	
	else{
					var arr=str.split('-');
					
					
					this.caclulate = function(){

					return parseInt(arr[0],10)-parseInt(arr[1],10);
			};
		};
	

	
};

var calc= new Calculator('7-8');
console.log(calc.caclulate());
