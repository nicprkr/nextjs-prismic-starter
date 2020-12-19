import css from "styled-jsx/css";

export const navStyles = css.global`
  nav {
    width:100%;
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;
    align-items:center;
    height: var(--nav-height);
  }
  .site-logo {
    flex: 2;
  }
  .site-logo--placeholder {
    width: var(--nav-height);
    height: var(--nav-height);
    background: var(--primary);
  }
  ul.nav-links {
    flex: 1;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    width:100%;
  }
  ul li {
    list-style: none;
  }
  ul li a {
    color: var(--primary);
    text-transform: uppercase;
    text-decoration: none;
  }
  ul li a:hover {
    color: var(--secondary)
  }
`;
