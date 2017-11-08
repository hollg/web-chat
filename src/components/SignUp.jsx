import React, {Component} from 'react'

export default class SignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      nickname: ''
    }

    this.emitNickname = this.emitNickname.bind(this)
    this.updateNickname = this.updateNickname.bind(this)
  }
  render () {
    return (
      <div className="panda-chat">
        <h1>Choose a nickname</h1>
        <input className="nickname" type='text' placeholder='nickname' onChange={this.updateNickname} />
        <button onClick={this.emitNickname}>
            Submit
        </button>
      </div>
    )
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
