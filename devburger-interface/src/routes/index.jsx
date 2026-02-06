import { createBrowserRouter } from "react-router-dom";
import { Login } from "../containers/login";
import { Register } from "../containers/register";
import { Home } from "../containers/home";
import { Menu } from "../containers/menu";


export const router = createBrowserRouter([
     {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/cadastro",
        element: <Register />
    },

    {
        path: "/cardapio",
        element: <Menu />
    },
    
    
]);