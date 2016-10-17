import React, { Component } from 'react';

class CommonLinks extends React.Component
{
	render()
	{
		return (
			<div>
				<nav className="navbar navbar-default">
	                <div className="container-fluid">
	                    <div className="navbar-header">
	                        <a className="navbar-brand" href="index.html">Home</a>
	                    </div>
	                    <ul className="nav navbar-nav">
	                        <li><a href="View/ViewEmployee.html">View Employee</a></li>
	                        <li><a href="View/DeleteEmployee.html">Delete Employee</a></li>
	                        <li><a href="View/UpdateEmployee.html">Update Employee</a></li>
	                        <li><a href="View/SearchEmployee.html">Search Employee</a></li>
	                    </ul>
	                </div>
            	</nav>
			</div>
		)
	}
}
export default CommonLinks;