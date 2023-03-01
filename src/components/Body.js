import { useEffect, useState } from "react"
// import  {restaurantList} from "../constants"
import RestrauntCard from "./RestaurantCard"
 import Shimmer from "./Shimmer"
import {Link} from "react-router-dom"
 import useOnline from "../../utils/useOnline"
import { useSelector } from "react-redux"
 
 


function filterData(searchText,restaurants){
   return  restaurants.filter((restaurant) =>
   restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
 );
}

 
const Body=()=>{
  
     const [searchText,setsearchText]=useState("")
     const [allRestaurants,setallRestaurant]=useState([ ])
     const [fillteredRestaurants,setfillteredRestaurant]=useState([ ])
  
      
     
     const favitems=useSelector(store=>store.favsec.items)
    //  console.log(favitems)
      
     
     useEffect(()=>{
           getRestaurents();
     },[])
    async function getRestaurents(){
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json()
    // console.log(json)
    setfillteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setallRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }
     
    const isonline=useOnline();
     if(!isonline){
      return <h1>Check your Network</h1>
    }
     
   if (!allRestaurants) return null;
    
    return allRestaurants?.length === 0 ? (
        <Shimmer/>
      ) : (

          <> 
        <div> 
             <div className="p-4 flex justify-center">
                  <input className="outline-none mob:text-xs p-[8px]  basis-[350px] mob:basis-[270px] h-[30px] rounded-md ring-1 ring-gray bg-gray " type="text" placeholder="Search for restaurant" value={searchText} 
                  onChange= {(e)=>{
                  setsearchText(e.target.value) }}/>
                  <button  className="btn btn--primary basis-[60px] mob:basis-[50px] mob:text-xs ml-2" onClick={()=>{
                  const data=filterData(searchText,allRestaurants)
                  setfillteredRestaurant(data)}}> SEARCH</button> 
              </div>
                 <div  className="flex  flex-row justify-end m-2 pr-4"> 
                   <button><Link to="/fav" className="flex items-center "> FAVOURITES{favitems.length}</Link></button>
                 </div>
             
         </div> 
                   
               <div className="flex flex-wrap gap-5 justify-center">
                   {fillteredRestaurants.map((restaurant) => {
                     return (
                        <Link className="basis-[250px] p-2.5 mb-2.5 mob:basis-[150px]" to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}> 
                        <RestrauntCard props={restaurant}  /></Link>
                          );
                          })}
                 </div>
        </>
    )}
     
export default Body;

 