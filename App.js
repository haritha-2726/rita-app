import React, { Children } from "react";
import  ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { Title ,HeaderComponent} from "./components/Header";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
 import About from "./components/About";
 import ErrorPage from "./components/Errorpage";
 import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaruantMenu";


 const AppLayout=()=>{
    return(
        <> 
        <HeaderComponent/>
        <Outlet/>
        <Footer/>

        </>
        
    )

 }
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
                {
                    path:"/about",
                    element:<About/>,
                },
                {
                    path:"/contact",
                    element:<Contact/>,
                },
                {
                    path:"/restaurant/:resId",
                    element:<RestaurantMenu  />,
                },
            

        ]
    },
     

]);


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)