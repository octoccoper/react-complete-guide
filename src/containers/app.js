import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {

   const [personState, setPersonState]  = useState({
        persons: [
            { name: 'Grogo', age: 50 },
            { name: 'Letice', age: 150 },
            { name: 'Cappucin', age: 100 }
        ],
        otherState: 'eating frogs'
    })

    console.log("personState",personState);

    console.log("setPersonState",setPersonState);


    const [stateElem, stateFunc] = useState('some new data');

    const switchPersonHandler = () => {
        setPersonState(
            {
              persons: [
                { name: 'Grogo', age: 50 },
                { name: 'Quagga', age: 148 },
                { name: 'Cappucino', age: 101 }
            ],
            otherState: 'dancing with wolves'
            }
          );
    }

        return (
          <div className="App">
            <h1>Welcome to React project: functional style</h1>
            <button onClick={switchPersonHandler}>Switch person</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age}>Hobbies: {personState.otherState}</Person>
            <Person name={personState.persons[1].name} age={personState.persons[1].age}></Person>
            <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
          </div>
        );
    
}

export default app;