import React, { useEffect } from 'react';

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        return () => {
            console.log('[Cockpit.js] useEffect cleanup work'); 
        }
    }, [props.persons]);

    return (
        <div className="Cockpit">
            <h1>{props.headline}</h1>
            <button onClick={props.clicked}>Toggle person list</button>
        </div>
    );
}

export default cockpit;