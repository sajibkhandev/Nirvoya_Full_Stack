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
