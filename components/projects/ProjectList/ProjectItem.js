import React from 'react'
import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'

import ProjectDate from './ProjectDate'
import FirstParagraph from './FirstParagraph'
import { hrefResolver, linkResolver } from 'prismic-configuration'

/**
 * project list item component
 */
const ProjectItem = ({ project }) => {
  const title = RichText.asText(project.data.title) ? RichText.asText(project.data.title) : 'Untitled'
  
  return (
    <div className="blog-project">
      <NextLink
        as={linkResolver(project)}
        href={hrefResolver(project)}
      >
        <a>
          <h2>{title}</h2>
        </a>
      </NextLink>

      <ProjectDate date={project.data.date} />
      
      <FirstParagraph
        sliceZone={project.data.body}
        textLimit={300}
      />
    </div>
  )
}

export default ProjectItem
