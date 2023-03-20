import styled from "styled-components"

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

   height: 10.0rem;
   width: 100%;
   padding: 2.4rem;
   background: #202020;
   color: white;
   

 
   button {
    background: none;
    border: none;
    color:white;
   }; 

   .menuIcon {
    font-size: 2.4rem;
    color: #FAFAA5;
   };

   .logoMenu {
    display: flex;
    align-items: center;
    gap: .4rem;
   };

   .logoMenu div {
    text-align: end;
   }

   h1 {
    font-size: 1.6rem
   };

   h3 {
    font-size: 1.4rem;
    color: #FAFAA5;
   };

   img {
    width: 10rem;
    justify-content: flex-end;
   };
`