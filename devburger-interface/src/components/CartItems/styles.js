import styled from 'styled-components';

export const ProductImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 16px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        color: #fff;
        background-color: #9758a6;
        transition: all 0.4s ease;
        border: none;
        border-radius: 4px;

        &:hover {
            background-color: #6f357c;
        }
    }
`;

export const EmptyCart = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: bold;

`;

export const ProductTotalPrice = styled.p`
    font-weight: bold;
`;

export const TrashImage = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;