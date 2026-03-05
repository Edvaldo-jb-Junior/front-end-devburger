import styled from 'styled-components';
import Texture from "../../assets/background-cart.svg";
import Background from "../../assets/background-login.svg";

export const Container = styled.footer`
    width: 100%;
     background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
    ), url('${Background}');
    min-height: 100vh;
    `;

export const Banner = styled.div`
    background: url(${Texture});
    background-size: cover;
    background-position: center;
    background-color: #1f1f1f;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 180px;

    img{
        height: 140px;
       
    }
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 12px;
    color: #61a120;
    text-align: center;
    position: relative;

    &::after{
        position: absolute;
        content: "";
        width: 56px;
        height: 4px;
        background-color: #61a120;
        left: calc(50% - 28px);
        bottom: 0;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 28%;
    max-width: 1800px;
    padding: 40px;
    margin: 0 auto;
    gap: 24px;
`;
