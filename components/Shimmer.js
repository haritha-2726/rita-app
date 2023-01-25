const Shimmer=()=>{
    return (
        <> 
        <div className="restaurant-listX">
        {Array(20).fill("").map(e=><div className="shimmerY">  
            <div className="shimmer"></div>
                <div className="shimmerX">  </div> 
                <div className="shimmerZ">  </div>
                </div>)}
        </div>
          
        </>
    )

}
export default Shimmer;