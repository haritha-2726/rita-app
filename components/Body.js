import { useEffect, useState } from "react"
import  {restaurantList} from "../constants"
import RestrauntCard from "./RestaurantCard"
import Shimmer from "./Shimmer" 
import {Link} from "react-router-dom"

function filterData(searchText,restaurants){
   return  restaurants.filter((restaurant) =>
   restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
 );


}

const Body=()=>{
  
     const [searchText,setsearchText]=useState("")
     const [allRestaurants,setallRestaurant]=useState([ ])
     const [fillteredRestaurants,setfillteredRestaurant]=useState([ ])
     
     useEffect(()=>{
           getRestaurents();
     },[])
   async function getRestaurents(){
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json()
    // console.log(json)
    setfillteredRestaurant([]);
    setallRestaurant([]);
   }
   if (!allRestaurants) return null;
    return allRestaurants?.length !== 0 ? (
        <Shimmer/>
      ) : (
          <> 

         <div className="boxX">
            <input className="box" type="text" placeholder="Search for restaurant" value={searchText} 
             onChange= {(e)=>{
               setsearchText(e.target.value)  

             }}
            />
            <button  className="button"onClick={()=>{
              const data=filterData(searchText,allRestaurants)
                 setfillteredRestaurant(data)
                }}>SEARCH</button> 
              
            
         </div> 
            
    <div className="restaurant-list">
            {fillteredRestaurants.map((restaurant) => {
              return (
                <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}> 
               <RestrauntCard {...restaurant.data}/></Link>
            );
           })}
        </div>
        </>
    )}
     
export default Body;
