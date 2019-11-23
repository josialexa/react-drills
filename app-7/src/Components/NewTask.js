import React, {Component} from 'react'

class NewTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: '',
            tasks: []
        }
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    handleClick() {

        this.props.new(this.state.input)

        this.setState({
            input: ""
        })
    }

    render() {
        return(
            <div>
                <input
                    onChange={e => this.handleChange(e)}
                    value={this.state.input}></input>
                <button
                    onClick={() => this.handleClick()}>Add</button>
            </div>
        )
    }
}

export default NewTask