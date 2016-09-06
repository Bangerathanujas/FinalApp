var React=require('react');
var View=React.createClass({
  getInitialState:function(){
    return({empid:''});
  },
handleID:function(event){
this.setState({empid:event.target.value})
},
searchValues:function(){
  $.ajax({
        url: '/searchById',
        dataType: 'json',
        type: 'PUT',
        data:this.state,
  
        success: function(response)
        {
        //   this.setState({status:response.message});
        //  console.log(response.message);
console.log("success update");

        }.bind(this),
        error: function(xhr, status, err) {
          console.error(err.toString());
        }.bind(this)
      });
},
render:function(){
  return(
  <div>
  <form  className="form-horizontal">
        <div className="form-group">
          <div className="col-lg-12">
            <div className="col-lg-10">
            <input className="form-control" id="empid"  onChange={this.handleID} placeholder="Employee Id" type="text"/>
            </div>
            <div className="col-lg-2">
          <button type="button" className="btn btn-success" onClick={this.searchValues}>Search</button>
            </div>
            </div>
        </div>
        </form>
        </div>
      );
      }
});
module.exports=View
