var React=require('react');
var Employees=React.createClass({
  render:function (){
      //console.log(this.props.bd);
      return(
        <div className="list-group-item">

        <div className="container-fluid">
           <div className="row">
               <div className="col-lg-1">
          {this.props.w}
               </div>
               <div className="col-lg-1">
              {this.props.n}
                   </div>
               <div className="col-lg-1">
             {this.props.em}
               </div>
               <div className="col-lg-1">
          {this.props.p}
               </div>
               <div className="col-lg-1">
              {this.props.g}
                   </div>
               <div className="col-lg-1">
             {this.props.ec}
               </div>
               <div className="col-lg-1">
          {this.props.edes}
               </div>
               <div className="col-lg-1">
              {this.props.edept}
                   </div>
               <div className="col-lg-1">
             {this.props.s}
               </div>
               <div className="col-lg-1">
          {this.props.e}
               </div>

           </div>
        </div>
    </div>

      );
    }
});
module.exports=Employees
