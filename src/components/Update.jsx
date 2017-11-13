import React, {Component} from 'react'

export default class Update extends Component {
  render () {
    var style = {color: this.props.hex}
    return (
      this.props.type === "userJoined" || this.props.type === "userTyping"
        ? <p className="italic">{this.props.message}</p>
        : <p><strong style={style}>{this.props.nickname}:</strong> {this.props.message}</p> 
    )
  }
}
