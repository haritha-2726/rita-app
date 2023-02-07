import {SiGoogle, SiLinkedin, SiGithub } from 'react-icons/si'
import { GIT_HUB_URL } from '../constants';
const Footer=()=>{
    return(
        <div className="footer">
            <img  className="logo" src="https://rita.com.vn/images/icon/logorita2019.png"/>
            {/* <ul>Customer care
                <li>Order Cancellation</li>
                <li>FAQ</li>
                <li>My Account</li>
                <li>Order & returns</li>
                <li>Contact Us</li>
            </ul> */}
            {/* <div> 
                <h1> Subscribe Us</h1>
                <input type="text" placeholder="enter your email"/>
            </div>
              <h2> Follow Us</h2> */}
              <a href={GIT_HUB_URL}><SiGithub className='githublogo'/> </a>
              <a><SiLinkedin className='githublogo' /></a>
              <a> <SiGoogle className='githublogo'/></a>
            
             
        </div>
    )
    
    
    
}
export default Footer;