import React, { Component } from 'react'
import { UserOutlined } from '@ant-design/icons'
import { MENU_INDEX_CONFIG } from 'Common/constants/menu'
import MenuItem from './MenuItem'
import './style.scss'

interface IProps {
  history?: any
}

interface IStates { }

class Header extends Component<IProps, IStates> {
  handleClick = (url: string) => {
    const { history } = this.props
    if (history) {
      history.push(url)
    }
  }

  render() {
    const userName = 'zlog'
    return (
      <div className='header-component-box'>
        <div className='left'>
          <div className='logo'></div>
          <div className='menu'>
            {
              MENU_INDEX_CONFIG.map((menuItem, index) => (
                <MenuItem
                  menuItemInfo={menuItem}
                  key={`menu${index.toString()}`}
                  onClick={(url: string) => { this.handleClick(url) }}
                />
              ))
            }
          </div>
        </div>
        <div className='user-info'>
          <UserOutlined />
          <span className='user-name'>{userName}</span>
        </div>
      </div>
    )
  }
}

export default Header
