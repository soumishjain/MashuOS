import React from 'react'
import MainWindow from './MainWindow'
import './Resume.scss'

const Resume = () => {
  return (
    <MainWindow>
        <div className='resume-window'>
            <embed src="/MyResume.pdf" frameborder="0"></embed>
        </div>
    </MainWindow>
  )
}

export default Resume
