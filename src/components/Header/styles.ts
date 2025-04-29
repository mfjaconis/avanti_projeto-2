import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    padding-top: 176px;
    padding-left: 250px;

    h1{
        font-weight: 600;
        font-size: 60px;
        line-height: 100%;
    }

    span{
        font-weight: bold;
    }

    img{
        width: 58px;
        height: 58px;
        margin-right: 10px;
    }
    
    @media (max-width: 850px){
        padding-left: 0;
        justify-content: center;

        h1{
            font-size: 40px;
        }
    }

    @media (max-width: 470px){  
        justify-content: center;

        h1{
            font-size: 30px;
        }

        img{
            width: 45px;
        }
    }
    `