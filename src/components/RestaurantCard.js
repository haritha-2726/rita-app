
 import {IMG_CDN_URL} from "../../constants"
 import { AiFillStar,AiFillHeart } from "react-icons/ai";
 import {CiHeart} from "react-icons/ci"
 import {TbDiscount2} from  "react-icons/tb"
 
import { useState } from "react";
import { additem } from "../../utils/favouriteslice";
import { useDispatch } from "react-redux";

const RestrauntCard = ({props,setRestaurants}) => {
  const {name,cuisines,cloudinaryImageId,slaString,avgRating,costForTwoString,aggregatedDiscountInfo}=props.data
  

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
      <div className="hover:border-red-100  transition-transform  hover:scale-110  hover:border-[2px] border-radius basis-[250px]"> 
      <button onClick={(e)=>handleadditem(e)}> <CiHeart/></button>  
        <img src={IMG_CDN_URL+cloudinaryImageId }/>
        <h2 >{name}</h2>
        <h3 className="text-[#686b78] text-xs">{cuisines.join(" , ")}</h3>
        <div className="flex mt-4 justify-between items-center text-xs pb-2.5 font-semibold mob:flex-col mob:items-start"> 
        <div className="flex items-center h-5 w-11 gap-1 py-0 px-1" style={buttonStyle}>
            <AiFillStar /><span className="">{avgRating}</span>
          </div>
          <div className="text-[#686b78]">.</div>
          <div className="text-[#686b78]">  
        <h5>{slaString}</h5>
        </div>
        <div className="text-[#686b78]">.</div>
        <div> 
        <h6 className="text-[#686b78]">{costForTwoString} </h6>
        
        </div>
        </div>
        <span className="pl-1 text-sm text-amber-800 flex items-center gap-1">< TbDiscount2 className="text-xl"/>{aggregatedDiscountInfo?.shortDescriptionList?.[0]?.meta}</span>
        <div>
       
        </div>
         
      </div>
      
    );
  };

  export default RestrauntCard;