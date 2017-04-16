var arr = ["Есть", "жизнь", "на", "Марсе"];
/*
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
};
*/
var transform=arr.map(function(item){return item.length

});
console.log(transform)
