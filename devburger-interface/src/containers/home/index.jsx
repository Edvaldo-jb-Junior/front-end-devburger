
import { OfferCarousel } from "../../components/OfferCarousel";
import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { Banner, Container}  from "./styles";
import { useUser } from "../../hooks/userContext";


export function Home(){
    console.log(useUser());
    return(
        <main>
            <Banner>
               <h1>Bem-vindo!</h1>
            </Banner>
            <Container>
                <CategoriesCarousel />
                <OfferCarousel />
            </Container>
        </main>
    );
}