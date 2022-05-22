import React, { Component } from 'react'
import { Select, DatePicker, Button } from 'antd'
import { RouteComponentProps } from 'react-router-dom'
import Header from 'Components/Header'
import Footer from 'Components/Footer'
import DataTrend from 'Components/DataTrend'
import PromotionCard from './components/PromotionCard'
import ProductCard from './components/ProductCard'
import Account from './components/Account'
import IndexBanner from './components/IndexBanner'
import ProductNews from './components/ProductNews'
import './style.scss'

const { Option } = Select

interface Props extends RouteComponentProps {

}

interface States {
}

class IndexPage extends Component<Props, States> {
  render() {
    const { history } = this.props
    return (
      <div className='index-page'>
        {/* 头部 */}
        <div className='head-box'>
          <Header history={history} />
        </div>
        <div className='content-box'>
          <div className='left-content'>
            {/* 数据展示 */}
            <div className='chart-area'>
              <div className='header-box'>
                <div className='title'>数据趋势</div>
                <div className='select-area'>
                  <Select
                    defaultValue='0'
                    style={{ width: 120 }}
                    size='small'
                  >
                    <Option value='0'>全部推广产品</Option>
                    <Option value='1'>搜索推广</Option>
                    <Option value='2'>一站式推广</Option>
                    <Option value='3'>合约推广</Option>
                    <Option value='4'>知识营销</Option>
                  </Select>
                  <DatePicker
                    size='small'
                    style={{ marginLeft: 10 }}
                    placeholder='请选择日期'
                  />
                </div>
              </div>
              <DataTrend />
            </div>
            <div className='promotion-card'>
              <PromotionCard history={history} />
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
            {/* 品牌推广 */}
            <div className='right-footer-area'>
              <div className='title'>品牌推广</div>
              <div className='btns'>
                <div className='label'>热门产品：</div>
                <Button size='small' style={{ marginRight: 10 }}>品牌专区</Button>
                <Button size='small'>巨屏广告</Button>
              </div>
            </div>
            <div className='right-bottom-img'>
              <img src='assets/imgs/right-bg.png' alt='' />
            </div>
          </div>
        </div>
        {/* 底部 */}
        <div className='foot-box'>
          <Footer />
        </div>
      </div>
    )
  }
}
export default IndexPage
