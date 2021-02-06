import React, {Component} from 'react'

class Book extends Component {

    state = {
        isEditable: false
    }

    keyPressHandler = (event) => {
        if (event.key === 'Enter'){
            this.setState({
                isEditable: false
            })
        }
    }

    render() {
        let output = this.state.isEditable ?
            <input onKeyPress={this.keyPressHandler} onChange={(event) => this.props.changeHandler(this.props.book.id, event.target.value)}
                   type="text" placeholder="Enter name" value={this.props.book.name}/> :
            <p>{this.props.book.name}</p>
        return (
            <li className="list-group-item d-flex">
                {output}
                <span className="ml-auto">{this.props.book.price}</span>
                <div className="mx-4">
                    <span style={{cursor: "pointer"}} className="mx-2"
                          onClick={() => this.setState({isEditable: true})}>
                        <i className="fas fa-edit"></i>
                    </span>
                    <span style={{cursor: "pointer"}} onClick={() => this.props.deleteHandler(this.props.book.id)}>
                        <i className="fas fa-trash"></i>
                    </span>
                </div>
            </li>
        )
    }
}

export default Book