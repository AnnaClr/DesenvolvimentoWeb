import styled from "styled-components";
export const Container = styled.div `
   h1 {
    color: ${({theme}) => theme.colors.main2};
   }

   a {
      color: ${({theme}) => theme.colors.main1}
   }

   .select {
      color: orange;
      
   }
`