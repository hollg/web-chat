import React, {Component} from 'react'
import ValidationError from './ValidationError.jsx'

export default class SignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      nickname: '',
      validationError: ''
    }

    this.emitNickname = this.emitNickname.bind(this)
    this.updateNickname = this.updateNickname.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
  }
  render () {
    return (
      <div className='panda-chat'>
        <h1>Choose a nickname</h1>
        {this.state.validationError && <ValidationError errorMessage={this.state.validationError}/> }
        <input className='nickname' type='text' placeholder='nickname' onChange={this.updateNickname} onKeyDown={this.onKeyDown} />
        <button onClick={this.emitNickname}>
            Submit
        </button>
      </div>
    )
  }

  componentDidMount () {
    this.props.socket.on('validationError', (data) => {
      this.setState({validationError: data.errorMessage})
    })
  }
  onKeyDown (event) {
    switch (event.keyCode) {
      case 13:
        this.emitNickname()
        break
    }
  }

  updateNickname (event) {
    this.setState({nickname: event.target.value})
  }

  emitNickname () {
    this.props.socket.emit('nickname', {
      nickname: this.state.nickname
    })
  }
}
