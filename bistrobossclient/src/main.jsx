import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeMain from "./pages/HomeMain";
import Home from "./pages/Home";
import { HelmetProvider } from "react-helmet-async";
import Menu from "./pages/Menu/Menu";
import Order from "./pages/Order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeMain></HomeMain>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/menu',
        element:<Menu></Menu>
      },
      {
        path:'/order',
        element:<Order></Order>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <HelmetProvider>
     <RouterProvider router={router} />
   </HelmetProvider>
  </React.StrictMode>
);
