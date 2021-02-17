import React from 'react';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.clicked}><b>Name:</b> {props.name}</p>
            <p><b>Age:</b> {props.age}</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.value} type="text"/>
        </div>
    );
}

export default person;