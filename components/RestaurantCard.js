
 import {IMG_CDN_URL} from "../constants"
 import { AiFillStar } from "react-icons/ai";
const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    slaString,
    avgRating,
    costForTwoString
  }) => {
    const buttonStyle = {
      backgroundColor: avgRating == "--" ? "#fff" : parseFloat(avgRating) < 4.0 ? "#db7c38":"#48c479",
      color : isNaN(avgRating)? "#535665" : "#fff"
    }
    return (
      <div className="card">
        <img 
        src={IMG_CDN_URL+cloudinaryImageId }/>
        <h2>{name}</h2>
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
       
        <div>

        </div>
      </div>
      
    );
  };

  export default RestrauntCard;