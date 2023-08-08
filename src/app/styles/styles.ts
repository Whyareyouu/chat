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
    --message-bg-incoming: #373E4E;
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
    overflow-x: hidden;
    color: var(--white);
    background-color: var(--main-bg);
  }
`;

export default GlobalStyles;
