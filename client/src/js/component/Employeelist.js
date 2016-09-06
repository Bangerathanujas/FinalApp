var React=require('react');
var Employees=require('./Employees');
var Employeelist=React.createClass({
  render:function(){
    //console.log(this.props.p2);

    var msg= this.props.adata.map(function(l){




        return(
  <Employees w={l.wave} n={l.name} em={l.email}  p={l.phone}
    g={l.git}
    ec={l.empcode}
    edes={l.empdes}
    edept={l.empdept}
    s={l.skills}
    e={l.exp} ></Employees>
    );


  });
    return(
      <div>
      {msg}
      </div>
    );
  }
});
module.exports=Employeelist
