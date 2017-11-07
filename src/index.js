import $ from './js/selector.js'
import openSocket from 'socket.io-client'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'

import './sass/style.scss'

ReactDOM.render(<App />, $('#root'))
