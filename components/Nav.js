import React from 'react'
import { navStyles } from 'styles'

/**
 * Site footer component
 */
const Nav = () => (
  <nav>
   <ul>
     <li>
       <a href="/">
         Home
       </a>
     </li>
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
     <a href="/Blog">
         Blog
       </a>
     </li>
   </ul>
    <style jsx global>{navStyles}</style>
  </nav>
)

export default Nav
