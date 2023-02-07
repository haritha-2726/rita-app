import React from 'react'
import {useEffect,useState} from "react"
 import {SiGithub} from "react-icons/si"
 import { GIT_HUB_URL } from '../constants'
// import {Component} from "react"

   
const About = () => {
  const [getInfo,setGetInfo]=useState()
  useEffect(()=>{
      getAboutInfo()
  },[])
  async function getAboutInfo(){
    const data=await fetch("https://api.github.com/users/haritha-2726")
    const json=await data.json()
    console.log(json)
    
   
    setGetInfo(json)
    
   }
  return (
    <div className='aboutsec'>
      <div className='profilesection'> 
      <img  className="profilephoto"src={getInfo?.avatar_url}/>
      <h1>{getInfo?.name}</h1>
      <p>{getInfo?.bio}</p>
      <p>Location:{getInfo?.location}</p>
      <a  href={GIT_HUB_URL}><SiGithub className="githublogo"/></a>
      </div>
    </div>
  )
}
// class About extends Component{

//   render() {
//     return <h1>About US</h1>
//   }  
  

// }

export default About;
