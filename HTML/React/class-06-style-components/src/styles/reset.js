import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
:root {
    font-size: 62.5%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-size: 1.6rem;
    background: ${(props) => props.theme.color.background};
    color: ${({theme}) => theme.color.font};
}

button, input, select, textarea {
    font-size: 1.6rem;
    border: none
}
`