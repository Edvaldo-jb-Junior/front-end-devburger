
import { OfferCarousel } from "../../components/OfferCarousel";
import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { Banner, Container}  from "./styles";


export function Home(){

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