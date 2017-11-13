import React, {Component} from 'react'

export default class SignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      nickname: ''
    }

    this.emitNickname = this.emitNickname.bind(this)
    this.updateNickname = this.updateNickname.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
  }
  render () {
    return (
      <div className='panda-chat'>
        <h1>Choose a nickname</h1>
        <input className='nickname' type='text' placeholder='nickname' onChange={this.updateNickname} onKeyDown={this.onKeyDown} />
        <button onClick={this.emitNickname}>
            Submit
        </button>
      </div>
    )
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
