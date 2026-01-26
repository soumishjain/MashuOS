import React from 'react'
import { Rnd } from 'react-rnd'
import "./MainWindow.scss"

const MainWindow = () => {
  return (
    <Rnd>
        <div className='window'>
            <div className="top">
                <div className="dots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>
            </div>
            <div className="windowsec">
                <h1>Hellooo</h1>
            </div>
        </div>
    </Rnd>
  )
}

export default MainWindow
