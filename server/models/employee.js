var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var employee=new Schema({
  wave:String,
    name:String,
    email:String,
    phone:String,
    git:String,
    empcode:String,
    empdes:String,
    empdept:String,
    skills:String,
    exp:String
});
module.exports=mongoose.model('Employee',employee);
