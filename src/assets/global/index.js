import { createGlobalStyle } from "styled-components";
import { colors } from "../colors";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        margin: 0;
        padding: 0;
    }
    
    body {
        background: ${colors.gray};
    }
`;

export default GlobalStyle;
