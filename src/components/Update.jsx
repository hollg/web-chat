import React, {Component} from 'react'

export default class Update extends Component {
  render () {
    var style = {color: this.props.hex}
    return (
      <p>
        <strong style={style}>{this.props.nickname}:</strong> {this.props.message}
      </p>
    )
  }
}
