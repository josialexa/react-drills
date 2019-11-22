import React, {Component} from 'react'

class Image extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <img
                src={this.props.imageSrc}
                alt={this.props.altText} />
        )
    }
}

export default Image