var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];



function compareage(person1,person2){
	return person1.age-person2.age
};


console.log(people.sort(compareage));