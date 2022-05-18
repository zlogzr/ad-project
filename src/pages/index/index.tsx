import React, { useEffect } from 'react'
import axios from 'axios'
import Utils from 'Utils/index'
import './style.scss'

const IndexPage = () => {
  useEffect(() => {
    axios.get('/ad/index/gray').then((res) => {
      console.log('res', res.data)
    }).catch((error) => {
      console.log(error)
    })
    console.log(Utils.getUrlParams('id'))
  }, [])
  return (
    <div className='index-page'>
      <div className='head-box'>head</div>
      <div className='content-box'>
        <div className='left-content'>
          <div className='chart'>chart</div>
          <div className='promotion-card'>promotion card</div>
          <div className='product-card'>product card</div>
        </div>
        <div className='right-content'>
          <div className='account'>account</div>
          <div className='index-banner'>index banner</div>
          <div className='product-news'>product news</div>
        </div>
      </div>
      <div className='foot-box'>foot</div>
    </div>
  )
}
export default IndexPage
