import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu/OurMenu";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
       {
        path:"/",
        element: <Home/> ,

       },
       {
        path:"/menu",
        element:<OurMenu/>,
       },
       {
        
       }

      ]
    },
  ]);