import styled from 'styled-components';

export const Wrapper = styled.div` 
`;

export const Container = styled.div`
    background-color: #ffffff;
    border-radius: 12px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  

    *{
        color: #484848;
        font-weight: 500;
    }

    .container-top{
        display: grid;
        grid-gap: 10x 30%;
        justify-content: space-between;
        grid-template-areas: 
        'title title'
        'items items-price'
        'delivery-tax delivery-taz-price';

        .title{
            grid-area: title;
            font-weight: 700;
            font-size: 20px;
            margin-bottom: 20px;
            background-color: #484848;
            color: #ffffff;
            padding: 8px 12px;
            text-align: center;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        }
        .items{
            grid-area: items;
            padding-left: 20px;
        }
        .items-price{
            grid-area: items-price;
        }
        .delivery-tax{
            grid-area: delivery-tax;
            padding-left: 20px;
        }
        .delivery-taz-price{
            grid-area: delivery-taz-price;
        }
    }
    .container-bottom{
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        font-weight: 700;
        margin-top: 24px;
        padding: 20px;

        *{
            color: #484848;}
    }
`;
