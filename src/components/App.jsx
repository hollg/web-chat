import React, {Component} from 'react'
import openSocket from 'socket.io-client'

import Controls from './Controls.jsx'
import ChatWindow from './ChatWindow.jsx'

// const socket = openSocket('http://localhost:4040')
export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
this.socket = openSocket('https://floating-shelf-53073.herokuapp.com')
  }

  render () {
    return (
      <div className='panda-chat'>
        <ChatWindow socket={this.socket} />
        <Controls socket={this.socket} />
      </div>
    )
  }
}
