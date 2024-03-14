import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Landing from "./pages/Landingpage/landing"
import Signup from "./pages/Signup/signup"
import Signin from "./pages/Signin/signin"
import Getstarted from "./pages/Getstarted/getstarted"



const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
  { path: "/getstarted", element: <Signup /> },
  {path: "/getstarted/signup", element: <Getstarted />}
//   {path: "/upcomingmovies", element: },
//   {path: "/topratedmovies", element: },
//   {path: "/popularmovies", element:}
])
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App