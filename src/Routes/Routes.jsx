import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../LayOuts/Main";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import DashBoard from "../LayOuts/dashBoard";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "menu",
        element: <Menu></Menu>
      },
      {
        path: "order/:category",
        element: <Order></Order>
      },
      {
        path: "blog",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      {
        path: 'myCart',
        element:<MyCart></MyCart>

      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>

      }
    ]
  }
]);


const Routes = () => {
  return (
    <div>

    </div>
  );
};

export default Routes;