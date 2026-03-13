import { createBrowserRouter } from "react-router-dom";
import { Header, Footer } from "../components";
import { Cart, Checkout, Home, Login, Menu, Register, CompletePayment } from "../containers";


export const router = createBrowserRouter([
     {
        path: "/",
        element: (
             <>
            <Header/>
            <Home/>
            <Footer/>
        </>
        ),
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/cadastro",
        element: <Register/>
    },

    {
        path: "/cardapio",
        element: (
             <>
                <Header/>
                <Menu/>
            </>
        ),
    },
     {
        path: "/carrinho",
        element: 
            <>
                <Header/>
                <Cart/>
            </>
    },

 {
        path: "/checkout",
        element:
            <Checkout/>
       
    },
     {
        path: "/complete",
        element: <CompletePayment/>
    },

    
    
]);