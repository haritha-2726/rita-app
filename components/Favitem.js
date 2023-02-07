import { IMG_CDN_URL } from "../constants"

const Favitem=({name,cuisines,cloudinaryImageId})=>{
    return(
        <div className=" card">
            <img src={IMG_CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines}</h3>
        </div>
    )
    

}
export default Favitem;