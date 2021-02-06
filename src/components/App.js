import React, { Component } from 'react'
import './App.css';
import First from "./First/First";

class App extends Component {
    state = {
        persons: [
            {name: 'nazmul'},
            {name: 'hossain'}
        ]
    }
    render() {
        return (
            <div className="App">
                {this.state.persons.map( (person, index) => {
                    return <First key={index} name={person.name} />
                } )}
            </div>
        );
    }
}

export default App;
