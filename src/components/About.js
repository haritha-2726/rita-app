import React from 'react'
import {useEffect,useState} from "react"
 import {SiGithub} from "react-icons/si"
 import { GIT_HUB_URL } from '../../constants'
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
    <div className= "container flex justify-around mob:flex-col">
      <div className="card-container w-[30%] border border-red-400 h-2/4 mob:w-auto">
        <div className='flex flex-col mb-6'>     
           <h1 className="card-container-title flex justify-center ">About Me</h1>
           <div className='flex justify-center items-center  m-2'> 
           <img  className="rounded-full w-[150px] h-[150px] flex justify-center items-center"src={getInfo?.avatar_url}/>
           </div>
           <h1 className='flex justify-center'>{getInfo?.name}</h1>
       </div> 
          <p className='text-gray-500 text-base  items-center'>{getInfo?.bio}</p>
          {/* <p>Location:{getInfo?.location}</p> */}
          <a  className='flex items-center justify-center' href={GIT_HUB_URL}><SiGithub className="githublogo"/></a>
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
