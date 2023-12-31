import { createGlobalStyle } from 'styled-components';
import './Font.css';

const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 62.5%;
    }
    body {
        overflow-x: hidden;
        font-size: 1.6rem;
        font-family: "Pretendard ExtraBold";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    input,
    select,
    button {
        background: none;
        border: none;
        font-size: inherit;
        color: inherit;
        &:focus {
        outline: none;
        }
        &:disabled {
        cursor: not-allowed;
        }
    }
    a,
    button {
        cursor: pointer;
        text-decoration: none;
        outline: none;
    }
    

`;
export default GlobalStyle;
