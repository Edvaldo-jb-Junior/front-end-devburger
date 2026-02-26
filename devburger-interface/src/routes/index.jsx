import { createBrowserRouter } from "react-router-dom";
import { Login } from "../containers/login";
import { Register } from "../containers/register";
import { Home } from "../containers/home";
import { Menu } from "../containers/menu";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export const router = createBrowserRouter([
     {
        path: "/",
        element: (
             <>
            <Header/>
            <Home />
            <Footer />
        </>
        ),
       
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
        element: (
             <>
            <Header/>
            <Menu />
        </>
        ),
    },
    
    
]);