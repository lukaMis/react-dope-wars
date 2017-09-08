
import React from 'react'

import logo from '../assets/images/logo.svg'

const App = (props) => {
  return (
    <div className="App">
      <div className="App-header" 
        onClick={props.clickHandler}>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        I was clicked {props.count}
      </p>
    </div>
  )
}

export default App
