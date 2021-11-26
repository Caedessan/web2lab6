var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:admin@admongobd.yq3ym.mongodb.net/ADmongoBD?retryWrites=true&w=majority');
console.log("mongodb connect...")
module.exports=mongoose;
