import $ from './js/selector.js'
import openSocket from 'socket.io-client'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'

import './sass/style.scss'

const socket = openSocket('http://localhost:4040')
socket.emit("log", {
    message: "React is a-go"
})

ReactDOM.render(<App />, $('#root'))

