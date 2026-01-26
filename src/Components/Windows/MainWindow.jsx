import React from 'react'
import { Rnd } from 'react-rnd'
import "./MainWindow.scss"

const MainWindow = ({children}) => {
  return (
    <Rnd
    default={{
        width:"40vw",
        height:"40vh",
        x:200,
        y:200
    }}
    >
        <div className='window'>
            <div className="top">
                <div className="dots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>
            </div>
            <div className="windowsec">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MainWindow
