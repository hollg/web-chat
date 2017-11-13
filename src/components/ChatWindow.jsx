import React, {Component} from 'react'

import Update from './Update.jsx'

export default class ChatWindow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      updates: [],
      usersTyping: []
    }
  }

  render () {
    return (
      <div className='chat-window' ref={(div) => {
        this.messageList = div
      }
        }>
        <div className='output'>
          {this.state.updates.map((update, i) =>
            <Update key={i} nickname={update.nickname} message={update.message} hex={update.hex} type={update.type}/>)}
          {this.state.usersTyping.map((user, i) =>
            <Update key={i} nickname={user.nickname} message={user.message} hex={user.hex} type={user.type}/>)}
        </div>
      </div>
    )
  }

  componentDidMount () {
    this.props.socket.on('chat', data => {
      var joined = this.state.updates.concat({
        nickname: data.nickname,
        message: data.message,
        hex: data.hex,
        type:"chat"})
      this.setState({updates: joined})
    })

    this.props.socket.on('userJoined', data => {
      let joined = this.state.updates.concat([{
        message: `${data.nickname} joined the chat`,
        hex: data.hex,
        type: 'userJoined'
      }])

      this.setState({updates: joined})
    })

    this.props.socket.on('userStartTyping', data => {
      let joined = this.state.usersTyping.concat([{
        nickname: data.nickname,
        message: `${data.nickname} is typing ...`,
        hex: data.hex,
        type: "userTyping"
      }])

      this.setState({usersTyping: joined})
    })

    this.props.socket.on('userStopTyping', data => {
      let modified = this.state.usersTyping.filter((user) => user.nickname !== data.nickname)

      this.setState({usersTyping: modified})
    })
  }

  componentDidUpdate () {
    this.scrollToBottom()
  }

  scrollToBottom () {
    const scrollHeight = this.messageList.scrollHeight
    const height = this.messageList.clientHeight
    const maxScrollTop = scrollHeight - height
    this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0
  }
}
