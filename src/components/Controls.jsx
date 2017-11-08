import React, {Component} from 'react'

export default class Controls extends Component {
  constructor (props) {
    super(props)

    this.state = {
      nickname: '',
      message: '',
      hex: ''
    }

    this.emitMessage = this.emitMessage.bind(this)
    this.updateNickname = this.updateNickname.bind(this)
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

  componentDidMount () {
    this.props.socket.on('hex', data => {
      this.setState({hex: data.hex})
    })
  }

  emitMessage () {
    this.props.socket.emit('chat', {
      message: this.state.message,
      nickname: this.props.nickname,
      hex: this.state.hex
    })
    this.setState({
      message: ''
    })
  }

  updateNickname (event) {
    this.setState({
      nickname: event.target.value
    })
  }

  updateMessage (event) {
    this.setState({
      message: event.target.value
    })
  }
}
