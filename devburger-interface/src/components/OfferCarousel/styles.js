import styled from "styled-components";



export const Container = styled.div`
    .carousel-item {
        padding-left: 40px;
    }

    padding-left: -20px;
`;

export const Title = styled.h2`
    font-size: 40px;
    font-weight: 800;
    color: #61a120;
    padding-bottom: 12px;
    text-align: center;
    position: relative;
    margin: 40px 0;
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

export const ContainerItems = styled.div`
    background: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;

    display: flex;
    align-items: center;
    padding: 10px 10px;
    width: 94%;
    height: 200px;
    border-radius: 20px;
    margin: 0 10px;
    gap: 10px;

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