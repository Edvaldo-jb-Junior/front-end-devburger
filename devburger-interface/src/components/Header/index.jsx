import { Navigate, Content, HeaderLink, Options, Profile, Logout, LinkContainer, Container } from "./styles";

import { UserCircleIcon, ShoppingCartIcon } from '@phosphor-icons/react'

export function Header() {
    return (
        <Container>
            <Content>
            <Navigate>
                <div>
                    <HeaderLink>Home</HeaderLink>
                    <HeaderLink>Menu</HeaderLink>
                </div>
            </Navigate>
            <Options>
                <Profile>
                    <UserCircleIcon size={24} color="#fff" />
                    <div>
                        <p>
                            Olá, <span>Junior</span>
                        </p>
                        <Logout>sair</Logout>
                    </div>
                </Profile>
                <LinkContainer>
                    <ShoppingCartIcon size={24} color="#fff" />
                    <HeaderLink>Carrinho</HeaderLink>
                </LinkContainer>
            </Options>
          
            </Content>
        </Container>
    );
}