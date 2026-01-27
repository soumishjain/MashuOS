import React from 'react'
import Dock from './Dock'
import Nav from './Nav'
import Github from './Windows/Github'
import Note from './Windows/Note'

const Main = () => {
  return (
    <div className='main'>
      <Nav />
      <Dock />
      <Github />
      <Note />
    </div>
  )
}

export default Main
