import React, { Component } from 'react'
import axios from 'axios'
import './style.scss'

interface Props { }

class IndexPage extends Component<Props> {
  componentDidMount() {
    axios.get('/ad/index/gray').then((res) => {
      console.log('res', res.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  render() {
    return (
      <div className='index-page'>
        <span>Here is index page</span>
      </div>
    )
  }
}

export default IndexPage
