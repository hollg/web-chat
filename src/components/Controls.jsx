import React, {Component} from 'react'

export default class Controls extends Component {
  constructor (props) {
    super(props)

    this.state = {
      message: ''
    }

    this.emitMessage = this.emitMessage.bind(this)
    this.updateMessage = this.updateMessage.bind(this)
  }

  render () {
    return (
      <div className='controls'>
        <input className='message' type='text' placeholder='message' value={this.state.message} onChange={this.updateMessage} />
        <button className='send' onClick={this.emitMessage}>Send</button>
      </div>
    )
  }

  emitMessage () {
    this.props.socket.emit('chat', {
      message: this.state.message,
      nickname: this.props.nickname,
      hex: this.props.hex
    })
    this.setState({
      message: ''
    })
  }

  updateMessage (event) {
    this.setState({
      message: event.target.value
    })
  }
}
