import styled from "styled-components"
export const Container = styled.div `
   width: 100%;
   height: 100vh;
   overflow: auto;
   background: #202020;

   main {
    max-width: 32.0rem;
    margin: 0 auto;
    padding: 2.4rem 0 7.6rem;
    text-align: justify;
   };

   footer {
    position: fixed;
    text-align: center;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #202020;
    // border-top:.4rem solid;

    font-size: 1.4rem;
    padding: 1.6rem;
    color: white;

   }
`