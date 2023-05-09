import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline-style: solid;
    outline-width: 2px;
    outline-offset: 3px;
    outline-color: ${props => props.theme['green-500']};
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  body {
    color: ${props => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
    background: ${props => props.theme['gray-800']};
  }

  body, button, input, textarea {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1020px) {
    font-size: 87.5%;
  }
`;
