import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  :root {
    // sizes
    --default-border-radius: 10px;
    --default-font-size: 14px;

    // colors
    --white: #fff;
    --placeholder-color: #c0bcbc;
    // bg-colors
    --input-bg-color: #46464a;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;
