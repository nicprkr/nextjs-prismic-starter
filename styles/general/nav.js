import css from "styled-jsx/css";

export const navStyles = css.global`
  nav {
    width:100%;
    background: grey;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    width:100%;
  }
  ul li {
    list-style: none;
  }
`;
