import { createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import DashBoard from "./pages/DashBoard";
import Guest from "./pages/Guest";
import Login from "./pages/Login";
import Delete from "./Delete";


export const routes = createBrowserRouter([
     {
          path: '/',
          element: <Auth />,
          children: [
               {
                    path: '/dashboard',
                    element: <DashBoard />
               },
               {
                    path: '/delete',
                    element: <Delete />
               }
          ]

     },
     {
          path: '/',
          element: <Guest />,
          children: [
               {
                    path: '/login',
                    element: <Login />
               }
          ]
     }
])