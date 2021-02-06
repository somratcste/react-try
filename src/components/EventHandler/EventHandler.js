import React, { Component } from 'react'

class EventHandler extends Component {

    state = {
        name: ''
    }

    clickHandler = (event) => {
        alert("hello")
    }

    inputHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <div className="my-3">
                <input onChange={this.inputHandler} value={this.state.name} type="text" placeholder="Enter your name" />
                <button className="btn btn-primary" onClick={this.clickHandler}>Click Me</button>

                {this.state.name ? <p>Hello Mr, {this.state.name}</p> : '' }
            </div>
        )
    }
}

export default EventHandler