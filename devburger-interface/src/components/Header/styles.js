import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #111111;
    color: #fff;
    padding: 0 40px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin: 0 auto;
`;

export const Navigate= styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;

    div{
        margin-left: 56px;
        display: flex;
        align-items: center;
        gap: 20px;
        color: #fff; 
        cursor: pointer;

        hr{
            height: 24px;
            border: 1px solid #9758a6;
        }
        
    }
`;

export const HeaderLink = styled(Link)`
   text-decoration: none;
   color: ${props => props.$isActive ? '#9758a6' : '#fff'};
   border-bottom: ${props => props.$isActive ? '2px solid #9758a6' : 'none'};
   font-size: 14px;
   transition: color 0.2s ease;

   &:hover {
    color: #9758a6;
   }
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;  
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;

    p{
        color: #ffffff;
        line-height: 90%;
        font-weight: 600;

        span{
            color: #9758a6;
            font-weight: 700;
        }

    }
`;

export const Logout = styled.button`
    color: #ff3205;
    background: none;
    border: none;
    font-size: 16px;
    cursor : pointer;
    font-weight: bold;

    &:hover {
        opacity: 0.8;
        font-size: 18px;

    }

`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;


   