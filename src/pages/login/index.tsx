import React from 'react'
import Header from 'Components/Header'
import './style.scss'

const LoginPage = (props: { history: any }) => (
  <div className='login-component-box'>
    <Header history={props.history} />
    <span className='content'>Here is login page</span>
  </div>
)

export default LoginPage
