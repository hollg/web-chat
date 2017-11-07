import React, {Component} from 'react'

import Update from './Update.jsx'

export default class ChatWindow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      updates: []
    }
  }

  render () {
    return (
      <div className='chat-window'>
        <h1>Good and nice webchat</h1>
        <div className='output'>
          {this.state.updates.map((update, i) => 
            <Update key={i} name={update.name} message={update.message} hex={update.hex}/>)}
        </div>
      </div>
    )
  }

  componentDidMount () {
    this.props.socket.on('chat', data => {
      var joined = this.state.updates.concat({
        name: data.name,
        message: data.message,
        hex: data.hex})
      this.setState({updates: joined})
    })
  }
    }
