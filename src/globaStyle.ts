import { createGlobalStyle } from "styled-components";

export const colors = {
	primary_bg_color: "#000",
    primary_text_color:"#fff",
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
        color: ${colors.primary_text_color}
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
  }
`;