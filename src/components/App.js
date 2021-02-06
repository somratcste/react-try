import React, { Component } from 'react'
import './App.css';
import EventHandler from "./EventHandler/EventHandler";

class App extends Component {

    render() {
        return (
            <div className="container App">
                <EventHandler />
            </div>
        );
    }
}

export default App;
