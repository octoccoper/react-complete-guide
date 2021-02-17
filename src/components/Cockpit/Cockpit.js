import React from 'react';

const cockpit = (props) => {
    return (
        <div className="Cockpit">
            <h1>{props.headline}</h1>
            <button onClick={props.clicked}>Toggle person list</button>
        </div>
    );
}

export default cockpit;