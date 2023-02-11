const Shimmer=()=>{
    return (
        <> 
        <div className="grid grid-cols-4 mx-16 gap-8 my-16 ">
        {Array(20).fill("").map(e=>
            <div className="shimmerY"> 
            <div className="h-40 border bg-gray-200 animate-pulse " ></div>
                <div className="bg-gray-200 animate-pulse h-4 w-2/3 mt-5">  </div> 
                <div className="bg-gray-200 animate-pulse h-4 w-1/3 mt-3">  </div>
                </div>)}
        </div>
          
        </>
    )

}
export default Shimmer;