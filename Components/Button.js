import React, { Component } from 'react';

class Button extends Component {
  render() 
  {
    return (
    	<div className="col-sm-3">
	    	<button
	        className={ this.props.className}
	        onClick={this.props.handleClick}>{this.props.label}</button>
		</div>
        )
  }
}

export default Button;