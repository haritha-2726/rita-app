 import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import { AiFillStar } from "react-icons/ai";
import { items_list } from "../constants";
 




const RestaruantMenu=()=>{
    const {resId}=useParams()
    const [restaurant,setrestaurant]=useState("");
    const [searchMenu,setSearchMenu]=useState([])
    const [menuItems, setMenuItems] = useState([]);
    useEffect(()=>{
       getRestaurantInfo()
    },[])
    async function getRestaurantInfo(){
        const data=await fetch(items_list+resId)
        const json=await data?.json()
        //  console.log(json?.data)
         setrestaurant(json?.data)
         setMenuItems(json?.data?.menu?.items);
    }

    function  searchitem(searchMenu,restaurant){
      let result = {};
      Object.keys(restaurant.menu.items).map((d) => {
       if(restaurant?.menu?.items[d]?.name?.includes(searchMenu)) {
          result[d] = restaurant.menu.items[d];
       }
      })
      setMenuItems(result);
   }
    return !restaurant?(<Shimmer/>):(
         
        <div className="restaurant-menu"> 
          
        <div className="cardfooter">
          <img  className="restaurant-img"src={IMG_CDN_URL+restaurant.cloudinaryImageId}/>
          <div className = "tobemiddle" >
                  <h1 className = "restaurant-name"> { restaurant.name } </h1>
                  <div className="tobestyle"> 
                    <p className="tosylestar"><AiFillStar/> <span className="tostyle">{restaurant.avgRating}</span></p> 
                    <p>|</p>
                    <h3 className = "restaurant-cost" > { restaurant?.costForTwoMsg } </h3>
                   <p>|</p>
                    <h4 className = "restaurant-cusine">{restaurant?.cuisines?.join(",") } </h4>
                     
                    </div>
           </div>
        </div>

        <div className="searchinput"> 
          <input type="text" placeholder="searchItem" value={searchMenu} onChange={(e)=>setSearchMenu(e.target.value)}/>
          <button onClick={()=> {searchitem(searchMenu,restaurant)}}>Search</button>
        </div>
         
        
        <div className="menuCard">
               <div className="menu-count">
                    <h1>Recommended</h1>
                    <p className="menulength"> { Object.keys(menuItems).length } ITEMS</p>
                  </div>
            <p>{Object.values(menuItems).map((item)=>(
                
                <div  key={item?.id}>  
                    <h2  key={item.id}> {item.name}</h2>
                    <p >{(item?.price > 0) ?
                  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR'}).format(item?.price/100 ): " " } </p>
                   <p>{item?.description}</p> 
                   <div className="menuimg">
                   {item?.cloudinaryImageId  && <img className="menu-item-img" src={ IMG_CDN_URL  + item?.cloudinaryImageId } alt={item?.name}/> }
                <button className="menuaddbtn" onClick={()=>{}}> ADD +</button>   
                
              </div>
              <hr></hr>
              </div> 
            ))}
            </p> 
            
        </div>
        <hr></hr>
        </div>
        
         
    )
}
export default RestaruantMenu