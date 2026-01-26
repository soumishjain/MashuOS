import React from 'react'
import MainWindow from './MainWindow'
import "./github.scss"
import githubData from "../../assets/githubData.json"

const GitCard = ({data = {id:1,image:"",title: "",description:"",tags:[],demoLink:"",repoLink:""}}) => {
    return <div className='card'>
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>
        <div className='tags'>
            {data.tags.map(tag => {
                return <p>{tag}</p>
            })}
        </div>
        <div className='urls'>
            <a href={data.demoLink}>DemoLink</a>
            <a href={data.repoLink}>RepoLink</a>
        </div>
    </div>
}

const Github = () => {
  return (
    <MainWindow>
        <div className='cards'>
             {githubData.map(project => {
            return <GitCard data={project}/>
        })}
        </div>
    </MainWindow>
  )
}

export default Github
