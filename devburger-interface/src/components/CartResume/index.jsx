import { Container, Wrapper} from './styles';
import { Button } from '../Button';

export function CartResume() {
    return (
        <Wrapper>
        <Container>
            <div className="container-top">
                <h2 className='title'>Resumo do Pedido</h2>
                <p className='items'>Itens</p>
                <p className='items-price'>R$ 20,00</p>
                <p className='delivery-tax'>Taxa</p>
                <p className='delivery-taz-price'>R$ 5,00</p>
            </div>
            <div className="container-bottom">
                <p>total</p>
                <p>R$ 25,00</p>
            </div>
        </Container>
        <Button>Finalizar Pedido</Button>
        </Wrapper>
    )
};