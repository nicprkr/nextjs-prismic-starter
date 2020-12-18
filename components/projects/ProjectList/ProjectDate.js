import React from 'react'
import { Date } from 'prismic-reactjs'

/**
 * project list item date component
 */
const ProjectDate = ({ date }) => {
  // Format the date to M d, Y
  const dateFormat = {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  }
  const displayDate = new Intl.DateTimeFormat('en-US', dateFormat).format(Date(date))

  return (
    <p className="blog-project-meta">
      <time className="created-at">{displayDate}</time>
    </p>
  )
}

export default ProjectDate
