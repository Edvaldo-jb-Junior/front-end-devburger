import { Container } from "./styles";
import Logo from "../../assets/Logo.svg";
import { Title, LeftContainer, RightContainer, Form, InputContainer } from "./styles";
import { Button } from "../../components/Button";

export function Login() {
    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo DevBurger" />
            </LeftContainer>
            <RightContainer>
                <Title>Óla seja bem vindo ao <span>Dev Burguer!</span>
                <br></br>
                 Acesse com seu <span>Login e senha </span>
                 </Title>
                 <Form>
                    <InputContainer>
                       <label htmlFor="email">Email</label>
                       <input type="email" id="email" />
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" />
                    </InputContainer>
                    <br></br>
                    <Button Type="button" theme="primary">Entrar</Button>
                 </Form>
                 <br></br>
                 <p>
                    Não possui Conta? <a> Criar aqui </a>
                 </p>
            </RightContainer>
        </Container>
    )
};