import styled from 'styled-components'
import { createGlobalStyle } from '@nfront/global-styles'

import colors from './colors'

const GlobalStyleComponent = createGlobalStyle`
  body {
    min-height: 100vh;
    background-color: ${colors.primary};
    color: ${colors.secondary};
  }


  html {
    min-height: 100%;
    font-family: Arial;
    font-weight: bold;
  }


  h1, h2, h3, h4, p {
    margin: 0;
    padding: 0 ;
  }

  h1 {
    font-size: 4rem;
  }


  h2 {
    font-size: 3rem;
  }

  
  h3 {
    font-size: 2.5rem;
  }


  h4 {
    font-size: 2rem;
  }


  p {
    font-size: 1.5rem;
  }

  a {
    font-size: 1.5rem;
    text-decoration: underline;
    color: ${colors.secondary}
  }
`;


export const GlobalStyles = {
  Separator: styled.div`
    margin: 1rem 0;
    height: 3px;
    background: ${colors.secondary};
    background: -webkit-gradient(linear, 0 0, 100% 0, from(${colors.primary}), to(${colors.primary}), color-stop(50%, ${colors.secondary}));
  `,

  Page: styled.section`
    max-width: 75rem;
    min-height: 100vh;
    margin: 0 auto;
  `
}


export default GlobalStyleComponent
