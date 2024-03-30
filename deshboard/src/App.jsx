import Home from "./pages/Home";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Home />}
     
    >
     
    </Route>
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
