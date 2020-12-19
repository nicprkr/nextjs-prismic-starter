import css from "styled-jsx/css";

export const reset = css.global`
*,
::after,
::before {
box-sizing: border-box
}
ol[class],
ul[class] {
padding: 0
}
blockquote,
body,
dd,
dl,
figcaption,
figure,
h1,
h2,
h3,
h4,
li,
ol[class],
p,
ul[class] {
margin: 0
}
body {
min-height: 100vh;
scroll-behavior: smooth;
text-rendering: optimizeSpeed;
}

ol[class],
ul[class] {
list-style: none
}

a:not([class]) {
text-decoration-skip-ink: auto;
}
a[class]{
  text-decoration: none;
}
img {
max-width: 100%;
display: block
}

button,
input,
select,
textarea {
font: inherit
}

@media (prefers-reduced-motion:reduce) {
* {
  animation-duration: 0s!important;
  animation-iteration-count: 1!important;
  transition-duration: 0s!important;
  scroll-behavior: auto!important
}
}
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
`;
