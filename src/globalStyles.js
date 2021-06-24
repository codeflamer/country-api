import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --mainBg:${({ theme }) => theme.body};
        --textColor:${({ theme }) => theme.text};
        --elemBg:${({ theme }) => theme.elements};
        --inputColor: ${({ theme }) => theme.input};
    } 
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }
    body{
        font-family: 'Nunito Sans', sans-serif;
        background: var(--mainBg);
        color:var(--textColor) ;
        padding:0;
        marging:0;
        transition: all 0.25s linear;
    }
`;

export default GlobalStyles;