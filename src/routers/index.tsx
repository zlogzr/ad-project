import React, { Component } from 'react'
import { HashRouter as Router, Redirect, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import 'antd/dist/antd.css'

import IndexPage from 'pages/index'
import LoginPage from 'pages/login'

const allRouters = [
  {
    path: '/index',
    exact: false,
    component: IndexPage,
    title: '',
  },
  {
    path: '/login',
    exact: false,
    component: LoginPage,
    title: '',
  },
]

class AppRouter extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Router>
          <Switch>
            <Redirect exact from='/' to='/index' />
            {renderRoutes(allRouters.map((item) => ({ ...item, key: item.path })))}
          </Switch>
        </Router>
      </ConfigProvider>
    )
  }
}

export default AppRouter
