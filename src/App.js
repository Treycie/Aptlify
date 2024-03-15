import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Landing from "./pages/Landingpage/landing"
import Signup from "./pages/Signup/signup"
import Signin from "./pages/Signin/signin"
import Getstarted from "./pages/Getstarted/getstarted"
import Topratedmovies from "./pages/Topratedmovies/Topratedmovies"
import Upcomingmovies from "./pages/Upcomingmovies/Upcomingmovies"



const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
  { path: "/getstarted", element: <Getstarted /> },
  { path: "/topratedmovies", element: <Topratedmovies /> },
  {path: "/upcomingmovies", element: <Upcomingmovies/>}
])
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App