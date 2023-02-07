import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
 

 export const Title=()=>(
    <a href="/">
     <img className="logo" alt="logo" src="https://rita.com.vn/images/icon/logorita2019.png"/>
     </a>
);

 export const HeaderComponent=()=>{
      const isOnline=useOnline()
       
    return (
         
        <div className="header">
            <Title/>
            <div className="navitems">
                <ul>
                    <li className="focus"> <Link to="/">Home</Link> </li>  
                    <li className="focus"><Link to="/About">About</Link></li>
                    <li className="focus"><Link to="/Contact">Contact</Link></li>
                    <li className="focus"><Link to="/Login">Login</Link></li>
                    <li className="focus"><Link to="/Help">Help</Link></li>
                     {/* <li className={isOnline? "online":"offline"}>●</li> */}
                     {/* <h1 className="focus">{isOnline?"✅":"❗️"}</h1> */}
                     <li className="focus">{isOnline?"✅":"❗️"}</li>
                </ul>
            </div>
        </div>
    )
    } 
   
   
     

