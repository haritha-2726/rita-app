import { useSelector } from "react-redux";
import Favitem from "./favitem";
import { restaurantList } from "../constants";
 
 const Favouriteitems=()=>{
    const favitems=useSelector(store=>store.favsec.items)
     return(
        <div> 
     <h1>Favorite items-{favitems.length}</h1>
     {favitems.map(items=> <Favitem  key={items.id} {...items[0]}/>)}
      
     
     </div>
     )
 }
 export default Favouriteitems;