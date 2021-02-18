import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Salut'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate, snapshot:',snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering');

        return this.props.persons.map((person, index) => {  
        
            return <Person 
                            name={person.name} 
                            age={person.age}
                            key={person.id}
                            value={person.name}
                            clicked={()=> this.props.clicked( index )} 
                            changed={(event) => this.props.changed(event,person.id)}/>
        })
    }
}

export default Persons;