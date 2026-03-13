import { Navigate, Content, HeaderLink, Options, Profile, Logout, LinkContainer, Container } from "./styles";
import { UserCircleIcon, ShoppingCartIcon } from '@phosphor-icons/react'
import{ useNavigate, useResolvedPath } from 'react-router-dom';
import {useUser} from '../../hooks/UserContext';

export function Header() {
const navigate = useNavigate();
const{ logout, userInfo } = useUser();

const { pathname } = useResolvedPath();

function logoutUser(){
    logout();
    navigate('/login');

}

console.log(userInfo);
    return (
        <Container>
            <Content>
            <Navigate>
                <div>
                    <HeaderLink to="/" $isActive={pathname === "/"}>Home</HeaderLink>
                    <hr></hr>
                    <HeaderLink to="/cardapio" $isActive={pathname === "/cardapio"}>Cardapio</HeaderLink>
                </div>
            </Navigate>
            <Options>
                <Profile>
                    <UserCircleIcon size={24} color="${(props) => props.theme.white}" />
                    <div>
                        <p>
                            Olá, <span>{ userInfo?.name }</span>
                        </p>
                        <Logout onClick={logoutUser}>sair</Logout>
                    </div>
                </Profile>
                <LinkContainer>
                    <ShoppingCartIcon size={24} color="${(props) => props.theme.white}" />
                    <HeaderLink to="/carrinho">Carrinho</HeaderLink>
                </LinkContainer>
            </Options>
          
            </Content>
        </Container>
    );
}