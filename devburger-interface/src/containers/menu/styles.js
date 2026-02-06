import styleds from "styled-components"; 
import Background from "../../assets/background-login.svg";
import BannerHamburguer from "../../assets/background_menu.svg";
import { Link } from "react-router-dom";


export const Container = styleds.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;

     background: linear-gradient(
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.2)
        ),
        url('${Background}');
`;

export const Banner = styleds.div`
    display: flex;
    align-items: center;
    justify-content: center;

    
    background: url('${BannerHamburguer}');
    background-size: cover;
    background-position: center;
    background-color: #1f1f1f;
    width: 100%;
    height: 300px;

    h1{
        font-family: "Road Rage", sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: #f4f4f4;
        position: absolute;

        right: 20%;
        
        span{
            display: block;
            color: #f4f4f4;
            font-size: 24px;}
        }
`;

export const CategoryMenu = styleds.div`
    display: flex;
    justify-content: center;
    gap: 60px;
    margin-top: 30px;
   
`;

export const CategoryButton = styleds(Link)`
    text-decoration: none;
    cursor: pointer;
    background: nome;
    color: #9758a6;
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border-bottom: 3px solid #9758a6;
   
`;

export const ProductsContainer= styleds.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 30px;
    justify-content: center;
    max-width: 1280px;
    gap: 60px;
    margin: 50px auto;
`;