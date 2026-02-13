import { useEffect, useState } from "react";
import { Container, Banner, CategoryMenu, ProductsContainer, CategoryButton } from "./styles";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";


export function Menu(){
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    

    const navigate = useNavigate();

    const { search } = useLocation();

    const queryParans = new URLSearchParams(search);


    const [activeCategory, setActiveCategory] = useState(() => {
         const categoryId = +queryParans.get('categoria');

         if(categoryId){
            return categoryId;
         }
          return 0;
    });
        
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

            useEffect(() => {
                if(activeCategory === 0){
                    setFilteredProducts(products);
                } else {
                    const newFilteredProducts = products.filter(
                        (product) => product.category_id === Number(activeCategory),
                    );
                    setFilteredProducts(newFilteredProducts);
                }
            }, [products, activeCategory]);

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
                    <CategoryButton 
                    key={category.id}
                    onClick={() => {
                        navigate({
                            pathname: '/cardapio',
                            search: `?categoria=${category.id}`
                            },
                            {
                                replace: true,
                            },
                        );
                         setActiveCategory(category.id);
                    }}
                       
                    >{category.name}</CategoryButton>
                ))}
            </CategoryMenu>
            <ProductsContainer>
                {filteredProducts.map( product => (
                    <CardProduct product={product} key={product.id} />
                ))}
                <div></div>
                <Button onClick={() => 
                    navigate({
                        pathname: '/',
                            })
                } >Voltar</Button>
            </ProductsContainer>
        </Container>
    );
}