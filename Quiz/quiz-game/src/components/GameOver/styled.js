import styled from "styled-components";
export const Container = styled.div `
  width: 100%;
  display: flex ;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  h1 {
    color: #FAFFA5;
    text-align: center;
   };

   p {
    text-align: center;
    font-size: 1.6rem;
    margin-top: 1.6rem;
    color: #FFFFFF;
   }

   .restartButton {
    width: 16.2rem;
    height: 7vh;
    margin-top: 29rem;
    border-color: #FAFFA5;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #6B6B6B;
    color: white;
    padding: .4rem;
    font-size: 2.4rem;
    
    cursor: pointer;

   }
   
`