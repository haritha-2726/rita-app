import React, { Children } from "react";
import  ReactDOM from "react-dom/client";
 import Footer from "./src/components/Footer"
import Body from "./src/components/Body";
import { Title ,HeaderComponent} from "./src/components/Header";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
 import About from "./src/components/About";
 import ErrorPage from "./src/components/Errorpage";
 import Contact from "./src/components/Contact"
import RestaurantMenu from "./src/components/RestaruantMenu";
import Help from "./src/components/Help";
import Login from "./src/components/Login";
import { Provider } from "react-redux";
import store from "./utils/store";
import Favouriteitems from "./src/components/Favouriteiems";
import Cart from "./src/components/Cart";


 const AppLayout=()=>{
    return(
        <> 
      
         <Provider store={store}> 
        <HeaderComponent/>
        <Outlet/>
        <Footer/>
        </Provider>

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
                {
                    path:"/help",
                    element:  <Help/>,
                },
                {
                    path:"/login",
                    element:<Login/>,
                },
                {
                    path:"/fav",
                    element:<Favouriteitems/>
                },
                {
                    path:"/Cart",
                    element:<Cart/>
                },
            

        ]
    },
     

]);


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)