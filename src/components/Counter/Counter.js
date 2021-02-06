import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 10,
            color: 'black'
        }
    }

    increase = () => {
        this.setState({
            count: this.state.count + 1
        })
        this.getColor()
    }

    decrease = () => {
        this.setState({
            count: this.state.count - 1
        })
        this.getColor()
    }

    getColor = () => {
        if (this.state.count <= 5) {
            this.setState({
                color: 'red'
            })
        } else if (this.state.count > 5 && this.state.count < 15) {
            this.setState({
                color: 'black'
            })
        } else if (this.state.count >= 15) {
            this.setState({
                color: 'green'
            })
        }
    }

    render() {
        return (
            <div>
                <h1 style={{ color: this.state.color }}>
                    <span onClick={ this.decrease }> - </span>
                    {this.state.count}
                    <span onClick={ this.increase }> + </span>
                </h1>
            </div>
        )
    }
}

export default Counter