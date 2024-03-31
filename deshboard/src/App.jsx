import Home from "./pages/Home";
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

const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route
      path="/"
      element={<Home />}
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
