var Car = require('./car').CarClass;
//require('./Car'); подключить  глобальній обїект
//global.Car
var bmw = new Car('BMW');

bmw.logName();
