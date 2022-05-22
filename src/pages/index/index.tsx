import React, { Component } from 'react'
import Header from 'Components/Header'
import Footer from 'Components/Footer'
import Chart from './components/Chart'
import PromotionCard from './components/PromotionCard'
import ProductCard from './components/ProductCard'
import Account from './components/Account'
import IndexBanner from './components/IndexBanner'
import ProductNews from './components/ProductNews'
import './style.scss'

class IndexPage extends Component {
  render() {
    return (
      <div className='index-page'>
        <div className='head-box'>
          <Header />
        </div>
        <div className='content-box'>
          <div className='left-content'>
            <div className='chart'>
              <Chart />
            </div>
            <div className='promotion-card'>
              <PromotionCard />
            </div>
            <div className='product-card'>
              <ProductCard />
            </div>
          </div>
          <div className='right-content'>
            <div className='account'>
              <Account />
            </div>
            <div className='index-banner'>
              <IndexBanner />
            </div>
            <div className='product-news'>
              <ProductNews />
            </div>
          </div>
        </div>
        <div className='foot-box'>
          <Footer />
        </div>
      </div>
    )
  }
}
export default IndexPage
