import React, { Component } from 'react';
import '../containers/App.css';

import Persons from '../components/Persons/Persons';
import '../components/Persons/Person/Person.css';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    console.log('[App.js] constructor worked');
    super(props);
  }

  state = {
      persons: [
      { id:'unic-id1', name: 'Grogo', age: 50 },
      { id:'unic-id2', name: 'Letice', age: 150 },
      { id:'unic-id3', name: 'Cappucin', age: 100 },
      { id:'unic-id4', name: 'Cappucino', age: 1001 }
  ],
    showPerson: false
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[App.js] getSnapshotBeforeUpdate');
    return { message: 'App'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('[App.js] componentDidUpdate, snapshot:',snapshot);
  }

  componentDidMount () {
    console.log('[App.js] componentDidMount');
  }

  changeNameHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === personId;
    });

    const person = this.state.persons[personIndex];

    person.name = event.target.value;

    const persons = [...this.state.persons];  
    
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  showPersonList = () => {

    const showingPersonList = this.state.showPerson;
    
    this.setState({showPerson: !showingPersonList});

  }

  removePersonHandler = (personIndex) => {

      const persons = [...this.state.persons];

      persons.splice(personIndex, 1);

      this.setState({persons: persons});

  }

  render = () => {

    let personsList = null;

    console.log('[App.js] render');

    if(this.state.showPerson) {
      personsList = (
        <div>
          <Persons
              persons={this.state.persons}
              clicked={this.removePersonHandler}
              changed={this.changeNameHandler} />
        </div>
      )
    } else {
      personsList;
    }

    return (
      <div className="App">
        <Cockpit 
            headline={"Managing personal"}
            clicked={this.showPersonList} />
        {personsList}
      </div>
    );

  }
}

export default App;
