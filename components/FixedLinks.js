import React from 'react'
import { fixedLinksStyles } from 'styles'

/**
 * Site footer component
 */
const FixedLinks = () => (
      <div className="fixed-links--wrapper">
      <ul className="fixed-links">
        <li>
          <a>Dribble</a>
        </li>
        <li>
          <a>Instagram</a>
        </li>
        <li>
          <a>Codepen</a>
        </li>
        <li>
          <a>Github</a>
        </li>
      </ul>
      <style jsx global>{fixedLinksStyles}</style>
    </div>
)

export default FixedLinks
