import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Reader from "./pages/reader";
import Home from "./pages/home";
import Imprint from "./pages/imprint"
import Privacy from "./pages/privacypolicy"
import TermsOfUse from "./pages/termsofuse"

const router = createBrowserRouter([
  { path: "/termsofuse", element: <TermsOfUse /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/imprint", element: <Imprint /> },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
  { path: "/reader", element: <Reader /> },
  { path: "/", element: <Home /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
