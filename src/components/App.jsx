import React, {Component} from 'react'
import openSocket from 'socket.io-client'

import ChatPage from './ChatPage.jsx'
import SignUp from './SignUp.jsx'


export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nickname: '',
      hex: ''
    }
    //this.socket = openSocket('https://garys-chat-api.herokuapp.com/')
    this.socket = openSocket('http://localhost:4040')
  }

  render () {
    return (
      this.state.nickname
        ? <ChatPage socket={this.socket} nickname={this.state.nickname} hex={this.state.hex}/>
        : <SignUp socket={this.socket} />
    )
  }

  componentDidMount () {
    this.socket.on('nickname', data => {
      this.setState({nickname: data.nickname})
    })
    this.socket.on('hex', data => {
      this.setState({hex: data.hex})
    })
  }
}
