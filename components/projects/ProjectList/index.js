import React from 'react'
import ProjectItem from './ProjectItem'
import { projectListStyles } from 'styles'

/**
 * project list component
 */
const ProjectList = ({ projects }) => {
  return (
    <div className="blog-main">
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
      <style jsx global>{projectListStyles}</style>
    </div>
  )
}

export default ProjectList
