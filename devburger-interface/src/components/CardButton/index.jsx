import PropTypes from "prop-types";
import { ContainerButton } from "./styles";
import Cart from "../../assets/cart.svg";


export function CardButton({ theme, ...props }) {
    return (
        <ContainerButton {...props} theme={theme}>
            <img src={Cart} alt="carrinho de compras" />
         </ContainerButton>
    )
};

CardButton.propTypes = {
    children: PropTypes.string,
    //theme: PropTypes.oneOf(["primary", "secondary"]),
};