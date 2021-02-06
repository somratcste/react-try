import React, { Component } from 'react'
import './App.css';
import axios from "axios";

class App extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        let {posts} = this.state
        if (posts.length === 0) {
            return <h1 style={{ textAlign: "center" }}>Loading... </h1>
        } else {
            return (
                <div className="container">
                    <ul className="list-group">
                        {posts.map(post => {
                            return <li className="list-group-item" key={post.id}>{post.title}</li>
                        })}
                    </ul>
                </div>
            )

        }
    }
}

export default App;
