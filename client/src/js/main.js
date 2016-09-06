var React = require('react');
var ReactDOM = require('react-dom');
var {browserHistory,Route,Router,IndexRoute}=require('react-router');
var Manageparticipant= require('./component/Manageparticipant');
var Home= require('./component/Home');
var View= require('./component/View');

var Navbar= require('./component/Navbar');



 var MainComponent=React.createClass({

   render:function(){



     return(
<div>

       <Navbar/>
<br/>
<h1>   heloo</h1>
{this.props.children}
</div>
     );
   }

 });
ReactDOM.render(<Router history={browserHistory}>
  <Route path="/" component={MainComponent}>
    <IndexRoute  component={Home}/>
  <Route path="/home" component={Home}/>
  <Route path="/Manageparticipant" component={Manageparticipant}/>
  <Route path="/view" component={View}/>
  </Route>
  </Router>
  ,document.getElementById('mail'));
