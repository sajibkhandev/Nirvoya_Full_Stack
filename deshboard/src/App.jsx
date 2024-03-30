import Home from "./pages/Home";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import OtpRegistration from "./pages/OtpRegistration";

const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route
      path="/"
      element={<Home />}
    >
    </Route>
    <Route
      path="/otp"
      element={<OtpRegistration />}
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
