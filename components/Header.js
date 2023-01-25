import { Link } from "react-router-dom";

 export const Title=()=>(
    <a href="/">
   
     <img className="logo" alt="logo" src="https://rita.com.vn/images/icon/logorita2019.png"/>
     </a>
);

 export const HeaderComponent=()=>{
    return (
        <div className="header">
            <Title/>
            <div className="navitems">
                <ul>
                    <li className="focus"> <Link to="/">Home</Link> </li>  
                    <li className="focus"><Link to="/About">About</Link></li>
                    <li className="focus"><Link to="/Contact">Contact</Link></li>
                    <li className="focus"><Link to="/Contact">Cart</Link></li>
                </ul>
            </div>
        </div>
    )
    } 
