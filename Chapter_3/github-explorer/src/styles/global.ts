import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/background.svg';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #E5E5E5;
    --white: #FFFFFF;
    --dark-400: #3A3A3A;
    --gray-400: #A8A8B3;
    --green-400: #04D361;

  }

  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      text-decoration: none;

  }

  @media(max-width: 1080px) {
    html{
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html{
      font-size: 87,5%;
    }
  }

  body {
    background: var(--background) url(${backgroundImage}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased; //melhora a visualização da fonte - funciona só pro chrome
  }

  body, input, button, select, textarea {
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    //fazendo com que a cor padrão do a seja a mesma do seu elemento pai!
    text-decoration: none;
  }

  #root {
    max-width: 60rem;
    margin: 0 auto;
    padding: 2.5rem 1.25rem;

  }
`;
