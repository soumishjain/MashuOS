import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import MainWindow from './MainWindow'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {atelierDuneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import "./Note.scss"

const Note = () => {
    const [markdown,setmarkdown] = useState(null)

    useEffect(() => {
        fetch("/note.txt")
        .then(res => res.text())
        .then(text => setmarkdown(text))
    },[])
  return (
    <div>
      <MainWindow>
        <div className="note-window">
            {markdown ? <SyntaxHighlighter style={atelierDuneDark} language='typescript' >{markdown}</SyntaxHighlighter> : <p>Loading...</p>}
        </div>
      </MainWindow>
    </div>
  )
}

export default Note