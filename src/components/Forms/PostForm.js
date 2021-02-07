import React, { Component } from 'react'
import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const initialState = {
            title: '',
            body: '',
            userId: 112,
            isSubmitted: false,
            error: false
        }

class PostForm extends Component {

    constructor() {
        super();
        this.myFrom = React.createRef()
    }

    state = initialState

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}/posts`, {
                title: this.state.title,
                body: this.state.body,
                userId: this.state.userId
            })
            .then(response => {
                console.log(response)
                this.myFrom.current.reset()
                this.setState({
                    ...initialState,
                    isSubmitted: true,
                    error: false
                })
            })
            .catch(error => {
                this.setState({
                    error: true,
                    isSubmitted: false
                })
                console.log(error)
            })
    }

    render() {
        return (
            <form ref={this.myFrom} onSubmit={this.submitHandler}>
                <input type="text" className="form-control" name="title" value={this.state.title} placeholder="Enter your title"
                    onChange={this.changeHandler}/>
                <textarea className="form-control" name="body" value={this.state.body} placeholder="Enter your body"
                    onChange={this.changeHandler}/>
                <button type="submit" className="btn btn-success">Submit</button>
                {this.state.isSubmitted && <p> Form Submitted Successfully! </p>}
                {this.state.error && <p> Something Wrong! </p>}
            </form>
        )
    }
}

export default PostForm