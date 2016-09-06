var React=require('react');
var {Link}=require('react-router');
var Navbar=React.createClass({
  render:function(){
    return(
      <div>
      <div className="container-fluid">
      <ul className="nav navbar-nav">
    <li>  <Link to='/home'>Home</Link></li>
    <li>  <Link to='/Manageparticipant'>Manageparticipant</Link></li>
    <li>  <Link to='/view'>View</Link></li>
      </ul>
      </div>
      </div>
    );
  }
});
module.exports=Navbar
