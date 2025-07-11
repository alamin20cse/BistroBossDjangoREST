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
import Login from "./pages/Login";
import AuthProvider from "./pages/AuthProvider/AuthProvider";
import SignUp from "./pages/SignUp";


import {
  QueryClient,
  QueryClientProvider,
 
} from '@tanstack/react-query'
import Dashboard from "./pages/Dashboard/Dashboard";
import Cart from "./pages/Dashboard/Cart";
import AllUsers from "./pages/Dashboard/AllUsers";
import AddItems from "./pages/AddItems";
import ManageItems from "./pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "./pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "./pages/Dashboard/Payment/Payment";
const queryClient = new QueryClient()

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
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      }
    ]
  },
  {
    path:"/dashboard",
    element:<Dashboard></Dashboard>,
    children:[

      // user
      {
        path:'cart',
        element:<Cart></Cart>

      },
      {
        path:'payment',
        element:<Payment></Payment>
      },

      // admin

      {
        path:'users',
        element:<AllUsers></AllUsers>
      },
      {
        path:'addItems',
        element:<AddItems></AddItems>
      },
      {
        path:"manageItems",
        element:<ManageItems></ManageItems>
      },
      {
        path:'updateItem/:id',
        element:<UpdateItem></UpdateItem>,
        loader:({params})=>fetch(`http://127.0.0.1:8000/api/menu/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AuthProvider>
   

    <QueryClientProvider client={queryClient}>
     
     <HelmetProvider>
     <RouterProvider router={router} />
   </HelmetProvider>
    </QueryClientProvider>



  </AuthProvider>
  </React.StrictMode>
);
