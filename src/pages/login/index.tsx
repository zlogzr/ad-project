import React, { Component } from 'react'
import { DatePicker } from 'antd'

interface Props { }

class LoginPage extends Component<Props> {
  render() {
    return (
      <div className='red'>
        Hello, React
        <span>Here is login page</span>
        <DatePicker />
      </div>
    )
  }
}

export default LoginPage
