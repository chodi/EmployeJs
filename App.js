import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class App extends Component {
  render() 
  {
    return (
    	<div>
    		<h1>Employee</h1>
    		<nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">Home</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="addEmployee">ADD</Link> </li>
                        <li><Link to="Update">EDIT</Link> </li>
                        <li><Link to="Delete">DELETE</Link></li>
                    </ul>
                </div>
        	</nav> 
		    {this.props.children}
	    </div> 
  
  )}
}
export default App;