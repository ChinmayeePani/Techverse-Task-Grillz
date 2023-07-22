import React from 'react'
import './Topbar.css'
import { topbarMenu } from '../../constants'

const Topbar = () => {


  return (
    <div className='topbar'>
      <div className='topbar_left'>
        <img src='./logo.svg' alt='logo' />
        <nav className='menu'>
          {topbarMenu.map((menuItem, i) => {
            return (
              <button key={i} className='nav_items'>
                {menuItem}
              </button>
            )
          })}
        </nav>
      </div>
      <div className='topbar_right'>
        <div class='avatar_with_badge'>
          <img src='./userpic.png' alt='avatar' className='menu_avatar' />
          <div />
        </div>
        <button className='profile_select'>
          User
          <img src='./caret-down.svg' alt='caret-down' />
        </button>
      </div>
    </div>
  )
}

export default Topbar
