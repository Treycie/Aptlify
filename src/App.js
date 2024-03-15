import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Landing from "./pages/Landingpage/landing"
import Signup from "./pages/Signup/signup"
import Signin from "./pages/Signin/signin"
import Getstarted from "./pages/Getstarted/getstarted"
import Moviedetail from "./pages/Moviedetail/moviedetail"



const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },

  { path: "/getstarted", element: <Signup /> },
  { path: "/getstarted/signup", element: <Getstarted /> },
  //   {path: "/upcomingmovies", element: },
  //   {path: "/topratedmovies", element: },
  //   {path: "/popularmovies", element:}

  { path: "/getstarted", element: <Getstarted /> },
  { path: "/moviedetail", element: <Moviedetail /> }

])
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App