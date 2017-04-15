var leader = {
  name: "Василий Иванович",
  age: 35
};


var str = JSON.stringify(leader);

	console.log(str);

///next task;

	var leader = {
  name: "Василий Иванович"
};

var soldier = {
  name: "Петька"
};

leader.soldier = soldier;
soldier.leader = leader;





var team = [leader, soldier];

console.log(team);
//var str = JSON.stringify(team);