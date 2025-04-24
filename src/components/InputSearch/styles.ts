import styled from "styled-components";
import { colors } from "../../globaStyle";

export const InputContainer = styled.section`
    display: flex;
    padding-left: 20px;
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
            color: ${colors.primary_text_color}
        }
    }
`