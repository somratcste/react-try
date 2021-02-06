import React, { Component } from 'react'
import './App.css';
import Books from "./Books/Books";

class App extends Component {

    state = {
        books: [
            {
                name: 'JavaScript',
                price: 20,
                id: 1
            }, {
                name: 'React',
                price: 10,
                id: 2
            }, {
                name: 'Redux',
                price: 20,
                id: 3
            }, {
                name: 'Java',
                price: 20,
                id: 4
            }
        ]
    }

    deleteHandler = (id) => {
        let newBooks = this.state.books.filter(book => book.id !== id)
        this.setState({
            books: newBooks
        })
    }

    render() {
        return (
            <div className="container App">
                <Books deleteHandler={this.deleteHandler.bind(this)} books={this.state.books} />
            </div>
        );
    }
}

export default App;
