import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Footer from "../Pages/Shared/Footer/Footer";
import Menu from "../Pages/Home/Menu/Menu";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        }
        
      ]
    },
  ]);