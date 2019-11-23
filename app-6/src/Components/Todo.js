import React, {Component} from 'react'

class Todo extends Component {

    render() {
        return (
            <div>
                {this.props.todos.map((v, i) => <p key={i}>{v}</p>)}
            </div>
        )
    }
}

export default Todo