import React from 'react'
import { footerStyles } from 'styles'

/**
 * Site footer component
 */
const Footer = () => (
  <footer>
    <p>
      &copy; 2020 Nicola Parker |
      Built with &nbsp;
      <a
        href="https://prismic.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        Prismic
      </a>
    </p>

    <style jsx global>{footerStyles}</style>
  </footer>
)

export default Footer
