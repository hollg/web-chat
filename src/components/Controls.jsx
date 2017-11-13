import React, {Component} from 'react'

export default class Controls extends Component {
  constructor (props) {
    super(props)

    this.state = {
      message: '',
      isTyping: [false, false]
    }

    this.emitMessage = this.emitMessage.bind(this)
    this.updateMessage = this.updateMessage.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
  }

  render () {
    return (
      <div className='controls'>
        <textarea className='message' type='text' placeholder='message' value={this.state.message} onChange={this.updateMessage} onKeyUp={this.onKeyPress} />
        <button className='send' onClick={this.emitMessage}>Send</button>
      </div>
    )
  }

  componentDidUpdate () {
    if (this.state.isTyping[0] && !this.state.isTyping[1]) {
      this.props.socket.emit('startTyping', {
        message: ' is typing...',
        nickname: this.props.nickname,
        hex: this.props.hex
      })
      this.state.isTyping[1] = true
    } else if (!this.state.isTyping[0]) {
      this.props.socket.emit('stopTyping', {
        nickname: this.props.nickname
      })
    }
  }

  onKeyPress (event) {
    console.log('key pressed')
    switch (event.keyCode) {
      case 13:
        this.emitMessage()
        break
    }

    if (!this.state.isTyping[0]) {
      this.setState({
        isTyping: [true, false]
      })
    }

    if (this.state.message.length === 0) {
      this.setState({
        isTyping: [false, false]
      })
    }
  }

  emitMessage () {
    this.props.socket.emit('chat', {
      message: this.state.message,
      nickname: this.props.nickname,
      hex: this.props.hex
    })
    this.setState({
      message: '',
      isTyping: [false, false]
    })
  }

  updateMessage (event) {
    this.setState({
      message: event.target.value
    })
  }
}
