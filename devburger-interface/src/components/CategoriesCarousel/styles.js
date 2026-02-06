import styled from "styled-components";



export const Container = styled.div`
    .carousel-item {
        padding-left: 40px;
    }

      .react-multiple-carousel__arrow--right{
        top: 2px;
    }

    .react-multiple-carousel__arrow--left{
        top: 2px;
    }
        
    padding-left: -20px;
`;

export const Title = styled.h2`
    font-size: 40px;
    font-weight: 800;
    color: #9758a6;
    padding-bottom: 12px;
    text-align: center;
    position: relative;
    margin-bottom: 20px;
    margin-top: 20px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: #9758a6;
        left: calc(50% - 28px);

    }
    
`;

export const ContainerItems = styled.div`
    background: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 94%;
    height: 200px;
    border-radius: 20px;
    margin: 0 10px;
    gap: 10px;
    cursor: grab;

    p{
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 22.5px;
        font-family: bold;
        margin-top: 100px;
        cursor: pointer;

        &:hover{
            opacity: 0.8;
        }

    }
    `;