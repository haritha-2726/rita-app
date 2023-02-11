import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { IMG_CDN_URL } from "../../constants"
import { additem, removeitem ,clearCart} from "../../utils/cartslice"


const Cart=()=>{

    const cartitems=useSelector((store)=>store.cart.items)
    const totalPrice = cartitems.reduce((acc, item) => acc + ((item?.defaultPrice || item?.price) / 100), 0);
       

    return(
        
      <div className='container flex flex-col'>
      <div className='flex justify-between m-5'>
      <h1 className='text-xl mt-2.5 text-title font-bold '>Cart Items</h1>
      <button className='w-[80px] rounded-md bg-red text-black'>Clear Cart</button>

      </div>
      <div className='flex'>
        <div className="flex flex-col justify-evenly w-[70%] m-5">
              { Object.values(cartitems).map( item => 
              <div className="flex justify-between basis-[848px] max-h-[150px] p-5 border-b border-gray" key={item.id}>
              <div className="flex flex-col basis-[400px]">
                <h3 className="font-bold text-lg w-3/5">{item.name}</h3>
                <p className="mt-1 text-base font-normal">{(item.price > 0) ?
                  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR'}).format(item.price/100 ): " " } </p>
                <p className="mt-3.5 leading-5 text-gray-desc w-4/5 text-base overflow-hidden ">{item.description}</p>
              </div>
              <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
                { item.cloudinaryImageId  && <img className="w-[118px] h-[96px]" src={IMG_CDN_URL + item.cloudinaryImageId } alt={item?.name}/> }
                 
                 
              </div>
              
             </div>
              )}
              <div className="flex justify-between items-center border-black border-t-2 font-medium pt-2 mt-2">
                        <div>TO PAY</div>
                        <div>&#8377; {totalPrice}</div>
                    </div>
               
        </div>
        </div>
        </div>

        
    )
     
}
 
export default Cart