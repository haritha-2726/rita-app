import { IMG_CDN_URL } from "../../constants"

const Favitem=({name,cuisines,cloudinaryImageId})=>{
    return(
        <div className="hover:border-gray-300 hover:border-[2px] border-radius   w-[350px]">
            <img src={IMG_CDN_URL + cloudinaryImageId }/>
            <h2>{name}</h2>
            <h3 className="text-[#686b78] text-xs">{cuisines.join(" , ")}</h3>
        </div>
    )
    

}
export default Favitem;