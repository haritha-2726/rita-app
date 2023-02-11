 import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";
import Shimmer from "./Shimmer";
import { AiFillStar } from "react-icons/ai";
import { items_list } from "../../constants";
 
import { useDispatch, useSelector } from "react-redux";
import { additem } from "../../utils/cartslice";
import MenuItem from "../Menuitem";
 




const RestaruantMenu=()=>{
    const {resId}=useParams()
    const [restaurant,setrestaurant]=useState("");
    const [searchMenu,setSearchMenu]=useState([])
    const [menuItems, setMenuItems] = useState([]);
    const [itemcount,setitemcount]=useState(0)
    const dispatch=useDispatch()
     
      
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
     function handleaddiem(item){
      dispatch(additem(item))
      setitemcount(itemcount+1) 
     }
     function handleremoveitem(){
      const upadte=(itemcount>0)?itemcount-1:0;
      setitemcount(upadte)
     }

    return !restaurant?(<Shimmer/>):(
         
      <div className=" ">   
        <div className="flex bg-[#001F3F]  basis-full  p-2.5 mb-2.5   ">
            <img  className=" w-[550px] m-8  pl-[250px] mob:w-[130px] mob:[81px]"src={IMG_CDN_URL+restaurant.cloudinaryImageId}/>
               <div className = "flex flex-col justify-center " >
                  <h1 className =" text-white text-3xl font-light "> { restaurant.name } </h1>
                     <div className=" flex  text-white gap-3 mob:text-xs mob:font-normal"> 
                        <p className="flex items-center"><AiFillStar/> <span className="tostyle">{restaurant.avgRating}</span></p> 
                        <p>|</p>
                        <h3> { restaurant?.costForTwoMsg } </h3>
                        <p>|</p>
                        <h4>{restaurant?.cuisines?.join(",") } </h4>
                      </div>
                  
                </div>
                  
          </div>
          <div className=" flex  justify-center"> 
              <input className="  outline-none mob:text-xs p-[8px]  m-3 basis-[150px] mob:basis-[270px] h-[30px] rounded-md ring-1 ring-gray bg-gray" type="text" placeholder="Search for dishes... " value={searchMenu} onChange={(e)=>setSearchMenu(e.target.value)}/>
              <button onClick={()=> {searchitem(searchMenu,restaurant)}}>Search</button>
          </div>
          <div className="flex justify-center ">
                <div className="p-5 items-center">
                     <h1 className="font-bold text-lg">Recommended</h1>
                      <p className="mt-3.5 w-3/5 text-gray-desc text-sm"> { Object.keys(menuItems).length } ITEMS</p>
                </div>
                <div>
                    { Object.values(restaurant?.menu?.items).map( item => 
                    <MenuItem  key={item.id} item={item} />
            )}
                </div>
          </div>     
      </div>
        
  
        
         
    )
}
export default RestaruantMenu