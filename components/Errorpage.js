import { useRouteError } from "react-router-dom";
const ErrorPage=()=>{
    const err=useRouteError();

    return(
         
        <div className="page">
        <div className="Errorpage">
            <img src="https://media.istockphoto.com/id/1375946831/vector/sad-face-emoji-icon-with-long-shadow-on-blank-background-flat-design.jpg?s=612x612&w=0&k=20&c=k5hF22mj50mWYtJbR63FFJUvLFpGr8LLtpTbsXOULC0=" className="images"/>    
            <h2> {err.status}Page not found</h2>
            <p>Page you are looking doesn't exit</p>
        </div>
        </div>
    
    )

}
export default ErrorPage;