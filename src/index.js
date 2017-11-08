import $ from './js/selector.js'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './components/App.jsx'

import './sass/style.scss'

ReactDOM.render(
    <App />, $('#root'))
