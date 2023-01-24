import styled from 'styled-components'
export const ButtonHome = styled.button`
   background: ${({theme}) => theme.color.main};
   color: ${({theme}) => theme.color.complementar};
   &:hover {
    filter: brightness(0.9);
    cursor: pointer;
   }
`