import styled from "styled-components"; 

export const ContainerButton = styled.button`
    background-color: ${(props) => props.theme.purple};
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: none;
    color: #ffffff;

    &:hover{
        background-color: ${(props) => props.theme.secondDarkPurple};
    }
`;