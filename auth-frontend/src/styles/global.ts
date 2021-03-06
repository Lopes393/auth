import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33CC95;

        --blue-light: #6933FF;
        --blue-variant: #8837DB;
        --rocket: #8257e6;

        --text-tile: #363F5F;
        --text-body: #969CB3;

        --shape: #FFFFFF;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    //font-size: 16px (Desktop)
    html{ 
        @media (min-width:1000px) {
            font-size:93.75%; //15px
        }
        @media (min-width:720px) {
            font-size:87.5%; //14px
        }
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family:'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
       font-weight: 600; 
    }
    button {
        cursor: pointer;
    }
`;
