import React, { Component, Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Redirect, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Store from 'Store/index'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import 'antd/dist/antd.css'

const IndexPage = lazy(() => import('Pages/index'))
const LoginPage = lazy(() => import('Pages/login'))
const SearchPromotionPage = lazy(() => import('Pages/searchPromotion'))

const allRouters: {}[] = [
  {
    path: '/index',
    exact: false,
    component: IndexPage,
    title: ''
  },
  {
    path: '/searchPromotion',
    exact: false,
    component: SearchPromotionPage,
    title: ''
  },
  {
    path: '/login',
    exact: false,
    component: LoginPage,
    title: ''
  }
]

class AppRouter extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Suspense fallback={<div>正在加载中...</div>}>
          <Router>
            <Provider store={Store}>
              <Switch>
                <Redirect exact from="/" to="/index" />
                {renderRoutes(allRouters)}
              </Switch>
            </Provider>
          </Router>
        </Suspense>
      </ConfigProvider>
    )
  }
}

export default AppRouter
