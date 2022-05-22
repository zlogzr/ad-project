import React, { Component } from 'react'
import { MenuItemInfoType } from './types'

interface Iprops {
  isActive?: Boolean
  onClick?: (url: string) => void
  menuItemInfo: MenuItemInfoType
}

class MenuItem extends Component<Iprops> {
  handleMenuClick = (url: string) => {
    const { onClick } = this.props
    if (onClick) {
      onClick(url)
    }
  }

  render() {
    const { menuItemInfo } = this.props
    return (
      <div className='header-menuItem-component-box'>
        <div className='menu-item-title' onClick={() => { this.handleMenuClick(menuItemInfo.url) }}>
          {menuItemInfo.name}
          {menuItemInfo.menuChildren.length > 0 && (<span className='arrow-icon'></span>)}
        </div>
        {/* hover 时显示 */}
        <div className='bottom-line'></div>
        {/* 选中时显示 */}
        {
          menuItemInfo.isActive && (<div className='bottom-line-active'> </div>)
        }
        {/* hover 时显示下拉 */}
        {
          menuItemInfo.menuChildren.length > 0 && (
            <div className='menu-children-box'>
              {
                menuItemInfo.menuChildren.map((menuChild, index) => (
                  <div
                    className='menu-child'
                    key={`menu-child${index.toString()}`}
                  >
                    <span onClick={() => { this.handleMenuClick(menuChild.url) }}>{menuChild.label}</span>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    )
  }
}

export default MenuItem
