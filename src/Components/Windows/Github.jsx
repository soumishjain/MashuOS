import React from 'react'
import MainWindow from './MainWindow'
import githubData from "../../assets/githubData.json"
import './github.scss'

const Gitcard = ({data = {id:1,image:"",title:"",description:"",tags:[],repoLink:"",demoLink:""}}) => {
    return <div className='card'>
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <div className='tags'>
            {data.tags.map(tag => (
                <p>{tag}</p>
            ))}
        </div>
        <div className='urls'>
            <a href={data.repoLink}></a>
            <a href={data.demoLink}></a>
        </div>
    </div>
}

const Github = () => {
  return (
    <MainWindow>
        <div className="cards">
            {githubData.map(project => {
                return <Gitcard data={project}/>
            })}
        </div>
    </MainWindow>
  )
}

export default Github
