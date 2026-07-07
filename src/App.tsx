import { createBrowserRouter, RouterProvider } from "react-router";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Page3 from "./pages/page3";
import Home from "./pages/home";

const router = createBrowserRouter([
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
  { path: "/page3", element: <Page3 /> },
  { path: "/", element: <Home /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
