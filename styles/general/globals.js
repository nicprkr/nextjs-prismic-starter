import css from "styled-jsx/css";

export const globals = css.global`
  * {
    -webkit-font-smoothing: antialiased;
  }
  html {
    --nav-height: 72px;
    --primary: #806b7b;
    --secondary: #e2b5d4;
    --tertiary: #e8c6e9;
    --pink: #d3c5ea;
    --purple: #c2c6ea;
    --dark: #353535;
    --grey: #c0cee5;
    --spacing: 1rem;
  }
  /*
 * Globals
 */
  body {
    color: var(--dark);
    line-height: 1.5;
    font-family: "Work Sans", Arial, Helvetica, sans-serif;
    font-size: 20px;
  }
  .container {
    padding: 0 var(--spacing);
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Work Sans", sans-serif;
  }
  h1 {
    margin-bottom: 1rem;
    font-size: 50px;
    font-weight: 900;
    line-height: 60px;
  }
  h2 {
    margin-bottom: 1rem;
    font-size: 28px;
    font-weight: 900;
    line-height: 40px;
  }
  h3 {
    margin-bottom: 1rem;
    font-size: 22px;
    font-weight: 900;
  }
  p {
    margin-bottom: 2rem;
  }
  a {
    color: var(--primary);
  }
  a:visited {
    color: var(--secondary);
  }
  a:focus {
    outline: 2px dotted var(--grey)
  }
  a:hover, a:active {
    color: var(--tertiary);
  }
  pre,
  ul,
  ol {
    margin-bottom: 20px;
  }
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }

  /* Media Queries */
  @media screen and (min-width: 600px) {
    html {
      --spacing: 2rem;
    }
  }
  @media screen and (min-width: 1200px) {
    html {
      --spacing: 3rem;
    }  
  }

  @media screen and (min-width: 1600px) {
    html {
      --spacing: 4rem;
    }  
  }

  /* vh vw fallback for ios7 */
  @media all and (device-width: 768px) and (device-height: 1024px) and (orientation: portrait) {
    .main .blog-header.single,
    .blog-header.home {
      height: 1024px;
    }
    .main .blog-main.single .image-full-width {
      width: 768px;
    }
    .main .post-part.single .image-full-width {
      width: 768px;
    }
  }

  @media all and (device-width: 768px) and (device-height: 1024px) and (orientation: landscape) {
    .main .blog-header.single,
    .blog-header.home {
      height: 768px;
    }
    .main .blog-main.single .image-full-width {
      width: 768px;
    }
    .main .post-part.single .image-full-width {
      width: 768px;
    }
  }

  @media screen and (device-aspect-ratio: 40/71) {
    .main .blog-header.single,
    .main .blog-header.home {
      height: 530px;
    }
    .main .blog-main.single .image-full-width {
      width: 530px;
    }
    .main .post-part.single .image-full-width {
      width: 530px;
    }
  }
`;
