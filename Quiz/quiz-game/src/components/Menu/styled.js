import styled from "styled-components";
export const Container = styled.div `
   background: #202020;
   width: 100%;
   padding: 2.4rem;
   
   height: calc(100vh - 10.0rem);
   position: absolute;
   display: grid;
   place-content: center;

   ul {
    list-style: none;
    font-size: 1.6rem;
    text-align: center;

    display: grid;
    gap: 3.2rem;
    
    
   };

   a {
      color: #6b6b6b;
      padding: .2rem;
      border-radius: .4rem;
      border-bottom: .2rem solid transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .8rem;
   };

   a:hover {
      border-bottom-color: #fAFFA5 ;
   };

   .select {
      color: #fAFFA5;
   };
`