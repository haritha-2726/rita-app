import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
 import { BiHomeSmile, BiInfoCircle, BiMailSend, BiCartAlt, BiLogInCircle, BiLogOutCircle } from "react-icons/bi"
 import { IoIosHelpBuoy } from "react-icons/io";
 import {TbDiscount2} from  "react-icons/tb"
  

  


 export const Title=()=>(
    <a href="/">
     <img className="hover:animate-bounce h-20" alt="logo" src="https://rita.com.vn/images/icon/logorita2019.png"/>
     </a>
);

 export const HeaderComponent=()=>{
      const isOnline=useOnline()
    return (
          <div className="flex justify-between items-center border border-b-red-200 shadow ">
            <Title/>
            <div>
                <ul className="flex">
                    <li className="px-4 font-semibold  hover:text-red-400 "> <Link to="/" className="flex items-center gap-1"><span><BiHomeSmile/></span>Home</Link> </li>  
                    <li className="px-4 font-semibold  hover:text-red-400"><Link to="/About" className="flex items-center"> <span><BiInfoCircle/></span> About</Link></li>
                    <li className="px-4 font-semibold  hover:text-red-400"><Link to="/Offers" className="flex items-center"><span><TbDiscount2/></span>Offers </Link></li>
                    <li className="px-4 font-semibold  hover:text-red-400"><Link to="/Help" className="flex items-center"> <span><IoIosHelpBuoy/></span>Help</Link></li>
                    <li className="px-4 font-semibold  hover:text-red-400"><Link to="/Cart" className="flex items-center"> <span><BiCartAlt/></span> Cart </Link></li>
                    <li className="px-4 font-semibold  hover:text-red-400"> <Link to="/Login" className="flex items-center"> <button className=""> {isOnline?"Logout":"Login"}</button></Link></li> 
                </ul>
            </div>
         </div>
     
    )
    } 
   
   
     

