import React, {Component} from 'react'

export default class Controls extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      message: '',
      hex: ''
    }

    this.emitMessage = this.emitMessage.bind(this)
    this.updateName = this.updateName.bind(this)
    this.updateMessage = this.updateMessage.bind(this)
  }

  render () {
    return (
      <div className='controls'>
        <input className='name' type='text' placeholder='name' onChange={this.updateName} />
        <input className='message' type='text' placeholder='message' value={this.state.message} onChange={this.updateMessage} />
        <button className='send' onClick={this.emitMessage}>Send</button>
      </div>
    )
  }

  componentDidMount() {
    this.props.socket.on('hex', data => {
      this.setState({hex: data.hex})
    })
  }
  emitMessage () {
    this.props.socket.emit('chat', {
      message: this.state.message,
      name: this.state.name,
      hex:  this.state.hex
    })
    this.setState({
      message: ''
    })
  }

  updateName (event) {
    this.setState({
      name: event.target.value
    })
  }

  updateMessage (event) {
    this.setState({
      message: event.target.value
    })
  }
}
