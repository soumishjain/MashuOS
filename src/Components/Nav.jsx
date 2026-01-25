import React from 'react'
import DateTime from './DateTime'
import './Nav.scss'

const Nav = () => {
  return (
    <div className='nav'>
      <div className="left">
        <div className="icon"><i class="ri-apple-fill"></i></div>
        <p className='name'>Soumis Jain</p>
        <p>File</p>
        <p>Windows</p>
        <p>Terminal</p>
      </div>
      <div className="right">
        <div className='icon'><i class="ri-wifi-fill"></i></div>
        <DateTime />
      </div>
    </div>
  )
}

export default Nav
