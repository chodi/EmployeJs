import React, { Component } from 'react';

class InputTextSearch extends React.Component
{   
   render() 
   {
      return (
         <div className="col-sm-7">
            <input placeholder={this.props.placeholder}
            className={ this.props.className }
            id={ this.props.ID }
            type={ this.props.inputType } />
         </div>
      );
   }
}

export default InputTextSearch;