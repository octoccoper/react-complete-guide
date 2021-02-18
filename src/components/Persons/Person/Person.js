import React, { Component } from 'react';

class Person extends Component {

    render() {
        console.log('[Person.js] rendering element');
           return (
        <div className="Person">
            <p onClick={this.props.clicked}>
                <b>Name:</b> {this.props.name}
            </p>
            <p>
                <b>Age:</b> {this.props.age}
            </p>
            <p>{this.props.children}</p>
            <input 
                onChange={this.props.changed} 
                value={this.props.value} 
                type="text"/>
        </div>
    ); 
    }

}

export default Person;