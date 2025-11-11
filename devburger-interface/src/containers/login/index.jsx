import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Container } from "./styles";
import Logo from "../../assets/Logo.svg";
import { Title, LeftContainer, RightContainer, Form, InputContainer } from "./styles";
import { Button } from "../../components/Button";

export function Login() {

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data);

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
                 <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                       <label htmlFor="email">Email</label>
                       <input {...register("email")}/>
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="senha">Senha</label>
                        <input  {...register("password")}  />
                    </InputContainer>
                    <br></br>
                    <Button type="submit">Entrar</Button>
                 </Form>
                 <br></br>
                 <p>
                    Não possui Conta? <a> Criar aqui </a>
                 </p>
            </RightContainer>
        </Container>
    )
};