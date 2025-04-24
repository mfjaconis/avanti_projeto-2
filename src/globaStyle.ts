import styled, { createGlobalStyle } from "styled-components";

export const colors = {
	primary_bg_color: "#000",
    secundary_bg_color:"#D9D9D9",
    terceary_bg_color: "#005CFF",
    text_color:"#fff",
    text_error_color: "#FF0000"

};

export const GlobalCss = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito Sans", sans-serif;
    text-decoration: none;
    border: none;
    }

    body{
        background-color: ${colors.primary_bg_color};
        color: ${colors.text_color}
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
  }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`