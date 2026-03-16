import {  Routes, Route } from "react-router-dom";

import { Cart, Checkout, Home, Login, Menu, Register, CompletePayment, Orders, NewProducts, EditProdutcs, Products} from "../containers";
import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";



export function Router(){
    return(
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/cardapio" element={<Menu />} />
                <Route path="/carrinho" element={<Cart />} />
                <Route path="/checkout" element={<Checkout/>} />
                <Route path="/complete" element={<CompletePayment/>} />
            </Route>

            <Route path="/admin" element={<AdminLayout/>}>
                <Route path="/admin/pedidos" element={<Orders />}/>
                <Route path="/admin/novo-produto" element={<NewProducts />}/>
                <Route path="/admin/editar-produto" element={<EditProdutcs />}/>
                <Route path="/admin/produtos" element={<Products />}/>
            </Route>

           <Route path="/Login" element={<Login />} />

           <Route path="/cadastro" element={<Register />} />

        </Routes>
    )
}

