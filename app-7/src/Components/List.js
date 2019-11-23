import React, {Component} from 'react'
import Todo from './Todo'

class List extends Component {
    render() {
        return (
            <div>
                {this.props.todos.map((v, i) => <Todo key={i} todo={v} />)}
            </div>
        )
    }
}

export default List