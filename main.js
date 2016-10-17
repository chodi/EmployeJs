import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AddEmployee from './View/AddEmployee';
import DeleteEmployee from './View/DeleteEmployee';
import UpdateEmployee from './View/UpdateEmployee';

import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

const app = document.getElementById('app');


ReactDOM.render((<Router history={browserHistory}>
	   <Route path="/" component={App}> 
		   <Route path="addEmployee" component={AddEmployee}></Route>
		   <Route path="Update" component={UpdateEmployee}> </Route>
		   <Route path="Delete" component={DeleteEmployee}> </Route>
	   </Route>
   </Router>)
	
, app)