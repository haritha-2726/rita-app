
 import {IMG_CDN_URL} from "../constants"
 import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { additem } from "../utils/favouriteslice";
import { useDispatch } from "react-redux";

const RestrauntCard = ({props,setRestaurants}) => {
  const {name,cuisines,cloudinaryImageId,slaString,avgRating,costForTwoString}=props.data

  const dispatch=useDispatch()
  
    const buttonStyle = {
      backgroundColor: avgRating == "--" ? "#fff" : parseFloat(avgRating) < 4.0 ? "#db7c38":"#48c479",
      color : isNaN(avgRating)? "#535665" : "#fff"
    }
    const [isfav,setisfav]=useState(false)
    const markFavourite=(event)=>{
      setRestaurants(props);
      setisfav(!isfav)
      event.preventDefault();
    }

    const handleadditem=(event)=>{
      dispatch(additem(props))
      event.preventDefault()
    }
     
    return (
      <div className="card">
        <span className={isfav?"mark-fav-icon":""} onClick={(e)=>{markFavourite(e)}}>&#x2764;</span> 
        <img src={IMG_CDN_URL+cloudinaryImageId }/>
        
        <h2 className="name">{name}</h2>
        <h3>{cuisines.join(" , ")}</h3>
        <div className="card-details"> 
        <div className="rating" style={buttonStyle}>
            <AiFillStar /><span>{avgRating}</span>
          </div>
          <div className="dot">.</div>
          <div className="mins">  
        <h5>{slaString} mins</h5>
        </div>
        <div className="dot">.</div>
        <div> 
        <h6 className="cost">{costForTwoString} </h6>
       
        </div>
         
        </div>
        <button onClick={(e)=>handleadditem(e)}>Add to Fav</button>
        <div>
       
        </div>
         
      </div>
      
    );
  };

  export default RestrauntCard;