import PropTips from 'prop-types';
import { Container, CardImage } from './styles';
import { CardButton } from '../CardButton';
import { useCart } from '../../hooks/CartContext';


export function CardProduct({product}) {
   const { putProdutInCart } = useCart();

    return (
        <Container>
            <CardImage src={product.url} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
            </div>
           <CardButton onClick={ ()=> putProdutInCart(product)}></CardButton>
        </Container>
      
    )
}

CardProduct.prototype = {
    product: PropTips.object.isRequired,
}