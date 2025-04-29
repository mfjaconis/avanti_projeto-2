import styled from "styled-components";
import { colors } from "../../globaStyle";

export const ProfileContainer = styled.main`
    display: flex;
    justify-content: center;
    margin: 20px 0;

    @media (max-width: 460px){
        justify-content: center;
    }

`

export const ProfileContent = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 804px;
    height: 257px;
    border-radius: 25px;
    background-color: ${colors.secundary_bg_color};

 img{
        width: 220px;
        height: 220px;
        border: 2px solid ${colors.terceary_bg_color};  
        border-radius: 50%;
    }

    @media (max-width: 850px){
        width: 600px;
        padding: 0 20px;

        img{
            width: 150px;
            height: 150px;
        }
    }

    
    @media (max-width: 620px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 400px;
        height: 400px;
        padding: 20px 0;
    }

    @media (max-width: 460px){
        width: 270px;
        justify-content: center;
    }
`

export const ProfileText = styled.div`
    width: 448px;
    height: 123px;
    margin-left: 30px;

    h3{
        font-weight: 700;
        font-size: 20px;
        color: ${colors.terceary_bg_color};  ;
    }

    p{
        color: ${colors.primary_bg_color};
        margin-top: 20px;
    }

    @media (max-width: 850px){
        p{
            font-size: 15px;
        }
    }

    @media (max-width: 620px){
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: auto;
    }
`
export const ProfileError = styled.div`
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    
    h3{
        color: ${colors.text_error_color};
        width: 500px;
        height: 54px;
        font-weight: 400;
        font-size: 20px;
    }
`