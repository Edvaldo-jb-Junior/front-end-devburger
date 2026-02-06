import styled from "styled-components";



export const Container = styled.div`
    .carousel-item {
        padding-right: 40px;
    }

    .react-multiple-carousel__arrow--right{
        top: 2px;
    }

    .react-multiple-carousel__arrow--left{
        top: 2px;
    }

    overflow-x: hidden;
    padding-left: -20px;
    .react-multi-carousel-list{
        overflow: visible;
    }

    padding-bottom: 40px;
    padding-left: 40px;
    
`;

export const Title = styled.h2`
    font-size: 40px;
    font-weight: 800;
    color: #61a120;
    padding-bottom: 10px;
    text-align: center;
    position: relative;
    margin: 60px 0;
    margin-top: 20px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: #61a120;
        left: calc(50% - 28px);

    }
    
`;

