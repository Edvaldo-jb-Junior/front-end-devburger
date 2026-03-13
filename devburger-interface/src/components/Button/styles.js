import Styled from "styled-components";

export const ContainerButton = Styled.button`
    width: 100%;
    max-width: 350px;
    border: none;
    height: 52px;
    border-radius: 5px;
    color: #ffffff;
    background-color: ${(props) => props.theme.purple};
    font-family: "Road Rage", sans-serif;
    font-size: 30px;

    &:hover {
        background-color: ${(props) => props.theme.secondDarkPurple};
        border: 1px dashed #fff
    }

`