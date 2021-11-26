var User=require('./user');
var user=new User('Denys','Tkhoriv');
console.log('firstname: '+user.first);
console.log('lastname: '+user.last);
user.fullName();
