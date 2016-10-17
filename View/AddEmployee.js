import React from 'react';
import ReactDOM from 'react-dom';


import Button from '../Components/Button';
import DangerButton from '../Components/DangerButton'; 
import CommonLinks from '../Components/CommonLinks';
import Label from '../Components/Label';
import InputText from '../Components/InputText';
import InputTextSearch from '../Components/InputTextSearch';


import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class AddEmployee extends React.Component {
	constructor() 
	{
		super();
			this.state = 
			{ 
				val : 'hello',
			 	'label' : "HELLO"
			};

			this.ahandleClick = this.ahandleClick.bind(this);
	}

	ahandleClick()
	{
		alert()
	}
   render() {
      return (
        <div> 
        	<h1>ADD</h1>       
    		<div className="form-horizontal">
	            <div className="form-group"> 
		        	<Label label = "Employee No. "/>
		        	<InputTextSearch className="form-control" ID = "Employee_id"  inputType="text" placeholder="Employee Id"/>		        	
		        	<Button label = "SEARCH" />
		        </div>	
		        
		        <div className="form-group"> 	
		        	<Label label = "Firstname"/>
		        	<InputText className="form-control" ID = "firstname"  inputType="text" placeholder="Firstname"/>
	            </div>

	            <div className="form-group"> 	
		        	<Label label = "Lastname "/>
		        	<InputText className="form-control" ID = "lastnames"  inputType="text" placeholder="Lastname"/>
	            </div>
	            <div className="form-group"> 	
		        	<Label label = "Position "/>
		        	<InputText className="form-control" ID = "position"  inputType="text" placeholder="Position"/>
	            </div>
	            <div className="form-group"> 	
		        	<Label label = "Salary "/>
		        	<InputText className="form-control" ID = "salary"  inputType="number" placeholder="Salary"/>
	            </div>	            

	            <div className="form-group">
					<div className="col-sm-offset-2 col-sm-3">
						<Button id="submitUpdate" className="btn-success btn-lg btn-default" label="SUBMIT"/>
					</div>.
					<div className="col-sm-3">
						<Button  className="btn-danger btn-lg btn-default" label="Cancel" />
					</div>
              	</div>
	        </div>

	         
        </div>
      )
   }
}

export default AddEmployee;