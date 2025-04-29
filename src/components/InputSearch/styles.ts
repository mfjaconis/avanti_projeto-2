import styled from "styled-components";
import { colors } from "../../globaStyle";

export const InputContainer = styled.section`
    display: flex;
    align-items: center;
    padding-left: 20px;

    @media (max-width: 850px){
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 0;
    }

    @media (max-width: 470px){
        justify-content: start;
        padding-left: 40px;
    }
`

export const Input = styled.input`
    width: 503px;
    height: 62px;
    margin-top: 40px;
    margin-left: 200px;
    border-radius: 10px;
    border-width: 1px;
    padding: 0 20px;
    font-weight: 600;
    font-size: 20px;

    &::placeholder {
        color: ${colors.primary_bg_color};
        font-weight: 600;
        font-size: 20px;
    }

    @media (max-width: 850px){
        margin-left: 0;
        width: 400px;
        height: 50px;

        &::placeholder {
            font-size: 18px;
        }
    }

    @media (max-width: 470px){
        margin-left: 0;
        width: 270px;
        height: 40px;

        &::placeholder {
            font-size: 14px;
        }
    }
  
`
export const InputContent = styled.div`
    position: relative;
    
    button{
        position: absolute;
        top: 40px;
        right: 0;
        width: 62px;
        height: 62px;
        border-radius: 10px;
        border-width: 1px;
        background-color:${colors.terceary_bg_color};  
        cursor: pointer;

        .searchIcon{
            width: 25px;
            height: 25px;
            color: ${colors.text_color}
        }
    }

    @media (max-width: 850px){
        display: flex;
        justify-content: center;

        
        button{
            height: 50px;
            width: 50px;
        }
    }

    @media (max-width: 470px){
        
        button{
            height: 40px;
            width: 40px;
        }
    }
`