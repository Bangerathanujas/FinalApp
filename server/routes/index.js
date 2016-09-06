var express = require('express');
var Employee=require('../models/employee');
var router = express.Router();

/* GET home page. */
router.post('/submitValues',function(request,response){
  console.log("hai");
  console.log(request.body);
  var employee=new Employee(request.body);
  employee.save(function(err,success){
    if(err){
      console.log(err);
    }
    else{
      console.log("data saved");
      response.send(request.body);
    }
  });
});

router.get('/getValues',function(req,res,next){
  console.log("inside get");
//res.send({message:"hello its get"});
Employee.find(function(err,allData){
  if(err){
    console.log("error ");
  }
  else{
    res.send(allData);
  }

});
});

router.put('/searchById',function(req,res,next){
  console.log('hai');
  console.log(req.body);
 Employee.findOne( {'empcode' : req.body.empid }, function(err, updateData){
   if(err){
     console.log(err);

   }else{
console.log(updateData);




}
});
});






module.exports = router
