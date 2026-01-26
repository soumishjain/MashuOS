import React from 'react'
import Dock from './Dock'
import Nav from './Nav'
import Github from './Windows/Github'

const Main = () => {
  return (
    <div className='main'>
      <Nav />
      <Dock />
      <Github />
    </div>
  )
}

export default Main
