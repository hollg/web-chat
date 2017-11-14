import React, {Component} from 'react'

export default class ValidationError extends Component {
    render () {
        return(
            <p className="validation-error">
            {this.props.errorMessage}
            </p>
        )
    }
}