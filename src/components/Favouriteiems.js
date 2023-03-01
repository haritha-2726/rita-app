import { useSelector } from "react-redux";
import Favitem from "./favitem";
import { Link } from "react-router-dom";
 
 
 const Favouriteitems=()=>{
    const favitems=useSelector(store=>store.favsec.items)
    console.log(favitems)
     return(
        <div className="flex  gap-4"> 
     <h1>Favorite items-{favitems.length}</h1>
      <Link> {favitems.map(items=> <Favitem  key={items.id} {...items.data}/>)}</Link>
      
     </div>
     )
 }
 export default Favouriteitems;