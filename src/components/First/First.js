import React, { Component } from 'react'

class First extends Component {
    render() {
        return (
            <div>
                <h1>Name : {this.props.name}</h1>
            </div>
        )
    }
}

export default First