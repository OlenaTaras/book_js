

var user={name: 'Vasya'};






function isEmpty(user){
	for (k in user) {
		return false;
	};
return true;
	//if(count == 0){return true;}else{return false;};
};




console.log(isEmpty(user));

delete user.name;



console.log(isEmpty(user));