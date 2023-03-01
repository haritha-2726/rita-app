import { useState } from "react"
import {HiChevronDown,HiChevronUp} from "react-icons/hi"
import { FAQ } from "../../constants"
const Section =({question,description,isVisible,setIsVisible})=>{
  
    return(
        <div className="flex flex-col shadow rounded-md p-2.5 m-2.5">
            <h4 className="font-semibold text-lg text-title">{question} 
               {
              
                 isVisible?
                 (<span onClick={()=>setIsVisible(false)}> <HiChevronUp className=" cursor-pointer"/></span>)
                 :
                 (<span onClick={()=>setIsVisible(true)}> <HiChevronDown  className=" cursor-pointer"/></span>)
                 
                }   
                
             </h4> 
            {isVisible&&<p  className="text-bio text-base">{description}</p>}
            
        </div>
    )

}


const Help=()=>{
   
    const [VisibleSection,setVisibleSection]=useState(" ")
    return(
        <div className="container">
            <div className="card-container border border-red-400">
      <h1 className="card-container-title pb-5"> FAQ</h1>  
         <Section question={"I want to partner my restaurant with Rita"} 
         description={"partner with us send a Email:rita@food.com "}
         isVisible={VisibleSection==="FAQ1"}
         setIsVisible={()=>setVisibleSection(VisibleSection==="FAQ1"?"":"FAQ1")}
         
         />

         <Section 
        
            question={"Can I edit my order?"} 
            description={"Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents"}
            isVisible={VisibleSection==="FAQ2"}
            
            setIsVisible={()=>setVisibleSection(VisibleSection==="FAQ2"?"":"FAQ2")}
             
         />

        <Section question={"I want to cancel my order"} 
          description={"We will do our best to accommodate your request if the order is not placed to the restaurant . Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed."}
          isVisible={VisibleSection==="FAQ3"}
          setIsVisible={()=>setVisibleSection(VisibleSection==="FAQ3"?"":"FAQ3")}
         />
        
        <Section 
         question={"Will Rita be accountable for quality/quantity?"} 
         description={"Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant."}
         isVisible={VisibleSection==="FAQ4"}
         setIsVisible={()=>setVisibleSection(VisibleSection==="FAQ4"?"":"FAQ4")} 
         />
        
        <Section question={"Do you charge for delivery"} 
         description={"Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. "}
         isVisible={VisibleSection==="FAQ5"}
         setIsVisible={()=>setVisibleSection(VisibleSection==="FAQ5"?"":"FAQ5")}
          />

         </div>
         </div>
    )
}
export default Help;