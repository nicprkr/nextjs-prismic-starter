import css from "styled-jsx/css";

export const fixedLinksStyles = css.global`
  .fixed-links--wrapper {
    position: absolute;
    height: 100%;
  }
  ul.fixed-links {
    position: sticky;
    top:0;
  }
`;
