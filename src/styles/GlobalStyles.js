import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  html, body, #root{
    height: 100%;
    font-family: 'Hahmlet';
  }
  *::-webkit-scrollbar {
    width: 10px;
    height: 8px;
    border-radius: 6px;
    background: rgb(255, 255, 255, 0.4);
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgb(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`;

export default GlobalStyles