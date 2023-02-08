import {SiGoogle, SiLinkedin, SiGithub } from 'react-icons/si'
import { GIT_HUB_URL } from '../../constants';
const Footer=()=>{
    return(
        <div>
        <div className="flex mob:flex-col bg-[#001F]  justify-around items-center w-full shadow h-10  text-blue-dark text-center leading-[3.5rem] bottom-0 fixed z-40">
            <img  className=" w-[70px]" src="https://rita.com.vn/images/icon/logorita2019.png"/>
              <a className="text-white" href={GIT_HUB_URL}><SiGithub className='githublogo'/> </a>
              <a className="text-white"><SiLinkedin className='githublogo' /></a>
              <a className="text-white"> <SiGoogle className='githublogo'/></a>
              </div>
             
        </div>
    )
    
    
    
}
export default Footer;