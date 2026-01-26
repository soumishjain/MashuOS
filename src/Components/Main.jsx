import React from 'react'
import Dock from './Dock'
import Nav from './Nav'
import MainWindow from './Windows/MainWindow'

const Main = () => {
  return (
    <div className='main'>
      <Nav />
      <Dock />

      <MainWindow />
    </div>
  )
}

export default Main
