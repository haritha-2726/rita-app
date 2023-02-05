import { useEffect, useState } from "react"
// import  {restaurantList} from "../constants"
import RestrauntCard from "./RestaurantCard"
import Shimmer from "./Shimmer" 
import {Link} from "react-router-dom"
 import DynamicPage from "./DynamicPage"
 import useOnline from "../utils/useOnline"
 import useLocalStorage from "../utils/useLocalStorage"
 


function filterData(searchText,restaurants){
   return  restaurants.filter((restaurant) =>
   restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
 );
}

 
const Body=()=>{
  
     const [searchText,setsearchText]=useState("")
     const [allRestaurants,setallRestaurant]=useState([ ])
     const [fillteredRestaurants,setfillteredRestaurant]=useState([ ])
     const [isfav,setisfav]=useState(false)
     const [favRestaurants, setFavRestaurants] = useLocalStorage("fav");
     
      
     
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
    const addFavourite=(props)=>{
      // debugger
      if(!favRestaurants.find(restaurant=>restaurant.data.id===props.data.id)){
        setFavRestaurants([...favRestaurants,props]);
      }else{
        const modifiedRes=favRestaurants.filter((restaurant)=>restaurant.data.id!== props.data.id);
        setFavRestaurants(modifiedRes);
      }
    }
    const showFavouriteRestaurents=()=>{
      // debugger
      if(isfav){
        setfillteredRestaurant(allRestaurants)
      }else{
        // debugger
        if(favRestaurants.length===0){
          setfillteredRestaurant(favRestaurants)

        }else{
          setfillteredRestaurant(favRestaurants)
        }
      }
        setisfav(!isfav)
    }
     

   if (!allRestaurants) return null;
    
    return allRestaurants?.length === 0 ? (
        <Shimmer/>
      ) : (
          <> 
   {/* <DynamicPage/> */}
         <div className="boxX">
            <input className="box" type="text" placeholder="Search for restaurant" value={searchText} 
             onChange= {(e)=>{
               setsearchText(e.target.value)  
         
             }}
            />
            <button  className="button"onClick={()=>{
              
              const data=filterData(searchText,allRestaurants)
             
                 setfillteredRestaurant(data)}}> SEARCH</button> 
         </div> 
         
          <div>
            
            <button onClick= {()=> {showFavouriteRestaurents()}}>FAVOURITES</button>
             
          </div>
          
       
            
    <div className="restaurant-list">
            {fillteredRestaurants.map((restaurant) => {
              return (
                <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}> 
       
               <RestrauntCard props={restaurant} setRestaurants={addFavourite}/></Link>
            );
           })}
        </div>
        </>
    )}
     
export default Body;

 