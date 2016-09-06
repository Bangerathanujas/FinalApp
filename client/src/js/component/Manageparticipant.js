var React=require('react');
var Employeelist=require('./Employeelist');
var Manageparticipant=React.createClass({
  getInitialState:function()
{
return({wave:"wave5",name:"",email:"",phone:"",git:"",empcode:"",empdes:"",empdept:"",skills:"",exp:"",allData:[],update:[]});
},
  handleSelect:function (event) {
    console.log(event.target.value);
    this.setState({wave:event.target.value});
  },
  handleName:function (event) {
    console.log(event.target.value);
    this.setState({name:event.target.value});
  },
  handleEmail:function (event) {
    console.log(event.target.value);
    this.setState({email:event.target.value});
  },
  handlePhone:function (event) {
    console.log(event.target.value);
    this.setState({phone:event.target.value});
  },
  handleGit:function (event) {
    console.log(event.target.value);
    this.setState({git:event.target.value});
  },
  handleEmpcode:function (event) {
    console.log(event.target.value);
    this.setState({empcode:event.target.value});
  },
  handleEmpdes:function (event) {
    console.log(event.target.value);
    this.setState({empdes:event.target.value});
  },
  handleEmpdept:function (event) {
    console.log(event.target.value);
    this.setState({empdept:event.target.value});
  },
  handleSkills:function (event) {
    console.log(event.target.value);
    this.setState({skills:event.target.value});
  },
  handleExp:function (event) {
    console.log(event.target.value);
    this.setState({exp:event.target.value});
  },
  submitValues:function(){
    console.log(this.state);
    $.ajax({
         url: '/submitValues',
         dataType: 'json',
         contentType: "application/json",
         type: 'POST',
         data: JSON.stringify({wave:this.state.wave,name:this.state.name,email:this.state.email,phone:this.state.phone,git:this.state.git,empcode:this.state.empcode,empdes:this.state.empdes,empdept:this.state.empdept,skills:this.state.skills,exp:this.state.exp}),

   success: function(data)
   {
     this.setState({update:data});
     console.log("Success");

   }.bind(this),

   error: function(xhr, status, err) {
     console.error("Error.."+err.toString());
   }.bind(this)
  });

  },
  render:function(){
    return(
      <div>
  <form  className="form-horizontal">
        <div className="form-group">
          <div className="col-lg-12">
            <div className="col-lg-2">
            <p>Wave ID</p>
            </div>
            <div className="col-lg-10">
            <select  value="wave5" id="menu" onChange={this.handleSelect} class="selectpicker">
              <option value="wave5">Wave5</option>
              <option  value="wave4">Wave4</option>
              <option  value="wave3">Wave3</option>
              <option  value="wave2">Wave2</option>
              <option value="wave1"  >Wave1</option>
              <option  value="wave6">Wave6</option>
            </select>
            </div>
            </div>
        </div>
            <div className="form-group">
              <div className="col-lg-12">
                <div className="col-lg-2">
                <p>Name</p>
                </div>
                <div className="col-lg-10">
                <input className="form-control" id="Name"  onChange={this.handleName} placeholder="Name" type="text"/>
                </div>
                </div>
            </div>
            <div className="form-group">
              <div className="col-lg-12">
                <div className="col-lg-2">
                <p>Email</p>
                </div>
                <div className="col-lg-10">
                <input className="form-control" id="Email" onChange={this.handleEmail} placeholder="Email" type="text"/>
                </div>
                </div>
            </div>
            <div className="form-group">
              <div className="col-lg-12">
                <div className="col-lg-2">
                <p>Phone</p>
                </div>
                <div className="col-lg-10">
                <input className="form-control" id="Phone" onChange={this.handlePhone} placeholder="Phone" type="text"/>
                </div>
                </div>
            </div>
            <div className="form-group">
              <div className="col-lg-12">
                <div className="col-lg-2">
                <p>git URL</p>
                </div>
                <div className="col-lg-10">
                <input className="form-control" id="url"  onChange={this.handleGit} placeholder="url" type="text"/>
                </div>
                </div>
            </div>
            <div className="form-group">
              <div className="col-lg-12">
                <div className="col-lg-2">
                <p>Employee Code</p>
                </div>
                <div className="col-lg-10">
                <input className="form-control" id="empcode" onChange={this.handleEmpcode} placeholder="empcode" type="text"/>
                </div>
                </div>
            </div>
            <div className="form-group">
              <div className="col-lg-12">
                <div className="col-lg-2">
                <p>Employee Designation</p>
                </div>
                <div className="col-lg-10">
                <input className="form-control" id="empdes" onChange={this.handleEmpdes} placeholder="empdes" type="text"/>
                </div>
                </div>
            </div>
            <div className="form-group">
              <div className="col-lg-12">
                <div className="col-lg-2">
                <p>Employee Department</p>
                </div>
                <div className="col-lg-10">
                <input className="form-control" id="empdept" onChange={this.handleEmpdept} placeholder="empdept" type="text"/>
                </div>
                </div>
            </div>
            <div className="form-group">
              <div className="col-lg-12">
                <div className="col-lg-2">
                <p>Skills</p>
                </div>
                <div className="col-lg-10">
                <textarea className="form-control" id="Message"  onChange={this.handleSkills} placeholder="Message" ></textarea>
                </div>
                </div>
            </div>
            <div className="form-group">
              <div className="col-lg-12">
                <div className="col-lg-2">
                <p>Experience</p>
                </div>
                <div className="col-lg-10">
                <input className="form-control" id="exp" onChange={this.handleExp} placeholder="exp" type="text"/>
                </div>
                </div>
            </div>
            <button type="button" className="btn btn-success" onClick={this.submitValues}>Submit</button>

          </form>
          <h1>hello</h1>
<Employeelist adata={this.state.allData}/>
          </div>
        );
      },
componentDidMount:function(){
  $.ajax({
       url: '/getValues',
       type: 'GET',
       dataType: 'json',
       success: function(response)
       {
        //  this.setState({status:response});


        console.log(response);
        this.setState({allData:response});
         console.log(this.state.allData);
          console.log("success");
       }.bind(this),
       error: function(xhr, status, err) {
         console.error(err.toString());
       }.bind(this)
     });
},
});
module.exports=Manageparticipant
