import { createGlobalStyle } from "styled-components";
export const ResetStyled = createGlobalStyle`
:root {
    font-size: 62.5%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #202020;
}

body, input, textarea, select {
    font-size: 1.6rem;
    font-family: Arial, Helvetica, sans-serif;
    
}


a {
    text-decoration: none;
}
`