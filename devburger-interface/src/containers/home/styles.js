import styled from "styled-components";

import Background from "../../assets/background-login.svg";

import BannerHome from "../../assets/banner-home.svg";

export const Banner = styled.div`
   background: url('${BannerHome}');
   background-size: cover;
   background-position: center;
   height: 250px;
   
   h1{
    font-family: "Road Rage", sans-serif;
    font-size: 80px;
    color: #f4f4f4;
    position: absolute;
    right: 20%;
    top: 10%;
   }`

export const Container = styled.section`
    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
    ),
    url('${Background}');
    height: 580px;
`;