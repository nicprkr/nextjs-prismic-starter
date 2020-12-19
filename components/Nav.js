import React from 'react'
import { navStyles } from 'styles'

/**
 * Site footer component
 */
const Nav = () => (
  <nav className="container">
    <div className="site-logo">
      {/* <img src="" alt="" /> */}
      <a href="/">
        <div className="site-logo--placeholder">logo</div>
       </a>

    </div>
   <ul className="nav-links">
     <li>       
       <a href="/about">
         About
       </a>
       </li>
       <li>       
       <a href="/projects">
         Projects
       </a>
       </li>
     <li>
     <a href="/blog">
         Blog
       </a>
     </li>
   </ul>
    <style jsx global>{navStyles}</style>
  </nav>
)

export default Nav
