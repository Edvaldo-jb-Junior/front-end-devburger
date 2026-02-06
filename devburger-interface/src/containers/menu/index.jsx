import { useEffect, useState } from "react";
import { Container, Banner, CategoryMenu, ProductsContainer, CategoryButton } from "./styles";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";


export function Menu(){
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

        useEffect(() => {
            async function loadCategories() {
                const { data } = await api.get("/categories");
                
                const nweCategories = [{id:0, name:'Todas'} ,...data];

                setCategories(nweCategories);
                
            } 

            async function loadProdcts() {
                        const { data } = await api.get("/products");
                        
                        const newProducts = data
                        .map((product) => ({
                             currencyValue: formatPrice(product.price),
                            ...product,}));
            
                        setProducts(newProducts);
                        
                    } 
            loadCategories();
            loadProdcts();
            }, []);

    return(
        <Container>
            <Banner>
               <h1>O MELHOR 
                <br/>
                HAMBURGUER 
                <br/> 
                ESTÁ AQUI
                <br/>
                <span>Esse cardápio está irresitível!</span>
                </h1>
                
            </Banner>
            <CategoryMenu>
                {categories.map( category => (
                    <CategoryButton key={category.id}>{category.name}</CategoryButton>
                ))}
            </CategoryMenu>
            <ProductsContainer>
                {products.map( product => (
                    <CardProduct product={product} key={product.id}/>
                ))}
            </ProductsContainer>
        </Container>
    );
}