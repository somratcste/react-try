import React, { Component } from 'react'
import './App.css';
import PostForm from "./Forms/PostForm";

class App extends Component {

    render() {
        return (
            <div className="App container">
                Welcome to React
                <PostForm />
            </div>
        )
    }
}

export default App;
