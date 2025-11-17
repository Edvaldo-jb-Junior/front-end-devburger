import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

import { api } from "../../services/api";
import { Container } from "./styles";
import Logo from "../../assets/Logo.svg";
import { Title, LeftContainer, RightContainer, Form, InputContainer } from "./styles";
import { Button } from "../../components/Button";


export function Register() {

const schema = yup
  .object({
    name: yup.string()
    .required('O nome é obrigatorio'),
    email: yup.string()
    .email('Digite um e-mail válido')
    .required('O email é obrigatório'),
    password: yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('digite uma senha'),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'As senhas devem corresponder')
    .required('Confirme sua senha'),
  })
  .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = async (data) => {
   const  response = await toast.promise(
    api.post('/users', {
      name: data.name,
      email: data.email,
      password: data.password,
      
    }),
    {
      pending: 'Verificando seus dados...',
      success: 'Cadastro realizado com sucesso! ',
      error: 'Ops! algo deu errado! tente novamente. '
    },
   );
  
    console.log(response);
    
  };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo DevBurger" />
            </LeftContainer>
            <RightContainer>
                <Title>Criar Conta</Title>

                 <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                       <label htmlFor="name">Nome</label>
                       <input {...register("name")}  type="text" id="email" />
                       <p>{errors?.name?.message}</p>
                    </InputContainer>

                    <InputContainer>
                       <label htmlFor="email">Email</label>
                       <input {...register("email")}  type="email" id="email" />
                       <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="senha">Senha</label>
                        <input  {...register("password")} type="password" id="senha" />
                        <p>{errors?.passowd?.message}</p>
                    </InputContainer>

                     <InputContainer>
                        <label htmlFor="senha">Confirmar senha</label>
                        <input  {...register("confirmPassword")} type="password" id="senha" />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>
                    <br></br>
                    <Button type="submit" theme="primary">Cadastrar</Button>
                 </Form>
                 <br></br>
                 <p>
                    Já possui conta? <a> Criar aqui </a>
                 </p>
            </RightContainer>
        </Container>
    )
};