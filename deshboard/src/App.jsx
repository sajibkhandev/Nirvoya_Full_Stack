import Home from "./pages/Dashboard";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import OtpRegistration from "./pages/OtpRegistration";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import ChangePassword from "./pages/ChangePassword";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import AddCategory from "./pages/AddCategory";
import AddSubCategory from "./pages/AddSubCategory";
import ViewCategory from "./pages/ViewCategory";
import AddProduct from "./pages/AddProduct";
import ViewProduct from "./pages/ViewProduct";
import AddVariant from "./pages/AddVariant";
import AddDiscount from "./pages/AddDiscount";

const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route
      path="/"
      element={<Registration />}
    >
    </Route>
    <Route
      path="/otp/:email/:otp"
      element={<OtpRegistration />}
    >
    </Route>
    <Route
      path="/login"
      element={<Login />}
    >
    </Route>
    <Route
      path="/forgetpassword"
      element={<ForgetPassword />}
    >
    </Route>
    <Route
      path="/changepassword/:token"
      element={<ChangePassword />}
    >
    </Route> 
    <Route
      path="/dashboard"
      element={<Dashboard />}
    >
       <Route
      path="category"
      element={<AddCategory />}
    >
    </Route>  
    <Route
      path="subcategory"
      element={<AddSubCategory />}
    >
    </Route>  
    <Route
      path="viewcategory"
      element={<ViewCategory />}
    >
    </Route> 
     <Route
      path="product"
      element={<AddProduct />}
    >
    </Route> 
     <Route
      path="viewproduct"
      element={<ViewProduct />}
    >
    </Route> 
     <Route
      path="variant"
      element={<AddVariant />}
    >
    </Route> 
     <Route
      path="adddiscount"
      element={<AddDiscount />}
    >
    </Route> 


    </Route>
   </>
  )
);

function App() {
  return (
    <>
    
    <RouterProvider router={router} />

    </>
  )
}

export default App
