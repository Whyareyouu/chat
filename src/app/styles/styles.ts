import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  :root {
    // sizes
    --default-border-radius: 10px;
    --xl-border-radius: 20px;
    --default-font-size: 14px;

    // colors
    --white: #fff;
    --primary: #B347EA;
    --primary-hover: #bf3efe;
    --placeholder-color: #c0bcbc;
    --gray-default: #7a8194;

    // bg-colors
    --main-bg: #292F3F;
    --input-bg-color: #46464a;
    --input-bg-hover: #4f4f55;
    --message-bg-incoming: #434556;
    --message-bg-outgoing: #272A35;

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
    overflow: hidden;
    color: var(--white);
    background-color: var(--main-bg);
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #505a6b;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--main-bg);
  }

  ::-webkit-scrollbar-button {
    display: none;
  }
`;

export default GlobalStyles;
