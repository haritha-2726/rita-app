import { useState } from "react";
import { IMG_CDN_URL } from "../constants";
import { useSelector,useDispatch } from "react-redux";
import { additem } from "../utils/cartslice";
 

const MenuItem = ({item}) => {

  const { id, name, description, price, cloudinaryImageId } = item; 
  const [itemcount,setitemCount]=useState(0)
  const dispatch=useDispatch();
  
  const handleadditem=(item)=>{
    dispatch(additem(item))
    setitemCount(itemcount+1)
  }
  function handleremoveitem(){
    const upadtedcount=(itemcount>0)?itemcount-1:0
    setitemCount(upadtedcount)
  }
   

  return (
     <div className="flex justify-between basis-[848px] max-h-[250px] p-5 border-b border-gray" key={id}>
        <div className="flex flex-col basis-[400px]"  >
            <h2 className="font-bold text-lg w-3/5">{name}</h2>
            <p>{(price > 0) ? Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR'}).format(price/100 ): " " }</p>
            <h3 className="mt-3.5 leading-5 text-gray-desc w-4/5 text-base overflow-hidden ">{description}</h3> 
        </div>
        <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
         {cloudinaryImageId && <img className="w-[118px] h-[96px]" src={ IMG_CDN_URL  + cloudinaryImageId } alt={item?.name}/> }
           <div className="flex justify-evenly items-center p-2 border border-gray-150  w-[100px] m-2.5">
              <button className=" text-gray-600" onClick={()=>handleremoveitem()}>-</button>
              <span className=" text-green-600"> {itemcount}</span>
              <button className=" text-green-600" onClick={()=>handleadditem(item)}>+</button>
           </div>
        </div>
  <hr></hr>
     </div>
  )
}

export default MenuItem;