

function Car(carName){
	this.carName = carName || 'unknown name';
}
Car.prototype.logName = function(){
	console.log('carName is', this.carName);
};

/*
module.exports = {
	Car: Car
};
*/

module.exports.carClass = Car;

//global.Car=Car; сделать обїект Car глобальнім