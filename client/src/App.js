import './App.css';
import Log from './Front_Page/Login';
import Register from './Front_Page/Register';
import User from './getuser/user';
import Adduser from './adduser/Adduser';
import Update from "./updateproduct/Update";
import Home from "./Front_Page/Home";
import Admin from "./Front_Page/Admin";
import Product from './products/product';
import Add_prooducts from './products/Add_prooducts';
import View_products from './products/View_products';
import Payment from './Front_Page/PaymentPage'; 
import AddToCart from './Front_Page/AddToCart';
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";

// ✅ Simple function to check login
const isLoggedIn = () => {
  return !!localStorage.getItem("user");
};

// ✅ Get user data (for role check)
const getUser = () => {
  return JSON.parse(localStorage.getItem("user")) || {};
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Log />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: isLoggedIn() ? <Home /> : <Navigate to="/" />,
  },
  {
    path: "/admin",
    element: isLoggedIn() && getUser().role === "admin" ? (
      <Admin />
    ) : (
      <Navigate to="/" />
    ),
  },
  {
    path: "/user",
    element: isLoggedIn() ? <User /> : <Navigate to="/" />,
  },
  {
    path: "/products",
    element: isLoggedIn() ? <Product /> : <Navigate to="/" />,
  },
  {
    path: "/add_products",
    element: isLoggedIn() ? <Add_prooducts /> : <Navigate to="/" />,
  },
  {
    path: "/all_products",
    element: isLoggedIn() ? <View_products /> : <Navigate to="/" />,
  },
  {
    path: "/add",
    element: isLoggedIn() ? <Adduser /> : <Navigate to="/" />,
  },
  {
    path: "/update/:id",
    element: isLoggedIn() ? <Update /> : <Navigate to="/" />,
  },
  {
    path: "/payment",
    element: isLoggedIn() ? <Payment /> : <Navigate to="/" />,
  },
  {
    path: "/addtocart",
    element: isLoggedIn() ? <AddToCart /> : <Navigate to="/" />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
