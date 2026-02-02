import React from 'react'
import Dock from './Dock'
import Nav from './Nav'
import Github from './Windows/Github'
import Note from './Windows/Note'
import Resume from './Windows/Resume'
import Spotify from './Windows/Spotify'
import Cli from './Windows/Cli'

const Main = () => {
  return (
    <div className='main'>
      <Nav />
      <Dock />
      <Github />
      <Note />
      <Resume />
      <Spotify />
      <Cli />
    </div>
  )
}

export default Main
