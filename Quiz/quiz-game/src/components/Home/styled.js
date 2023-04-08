import styled from "styled-components";
export const Container = styled.div `
  width: 100%;
  display: flex ;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  h1 {
    color: #FFFFFF;
    text-align: center;
   };

   .startButton {
    width: 16.2rem;
    height: 7vh;
    margin-top: 30.2rem;
    padding: .8rem;
    align-items: center;
    justify-content: center;
   
    border: 3px solid #FAFFA5;
    background: #6B6B6B;

    text-align: center;
    color: white;
    font-size: 2.4rem;
    cursor: pointer;
   }

   button:hover {
      background:  ${({theme}) => theme.colors.neutral5};
   }

   
`