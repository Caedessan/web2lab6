
const mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:admin@ADmongoBD.yq3ym.mongodb.net/ADmongoBD?retryWrites=true&w=majority',{
  keepAlive: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
mongoose.set('useFindAndModify', false);
console.log("Connect with db...")
module.exports=mongoose;
