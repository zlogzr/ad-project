import React, { Component } from 'react'
import './style.scss'

interface Props { }

class App extends Component<Props> {
  render() {
    return (
      <div className='red'>
        Hello, React
        <span>i am Jack</span>
      </div>
    )
  }
}

export default App
