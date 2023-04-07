import styled from "styled-components";
export const Container = styled.div `
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  
  h1 {
    color: #FFFFFF;
    text-align: center;
    font-size: 1.6rem;
   };

  h2 {
    font-size: 1.8rem;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: #FAFFA5;
    // border: solid 1px #FFFFFF;

    margin-top: 1.2rem;
  }

  ul {
    list-style: none;
    color: #3B3B3B;
  }

  li {
    margin-top: 1.6rem;
    background-color: #FAFFA5;
    padding: 1.6rem;
    font-size: 1.6rem;
    text-align: center;
    color: #3B3B3B;
  }

  .questionText {
    color: #FFFFFF;
    text-align: center;
    font-size: 1.6rem;
  }

   
`